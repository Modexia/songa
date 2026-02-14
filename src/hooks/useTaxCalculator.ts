import { useMemo } from 'react';

interface TaxCalculatorParams {
    grossIncome: number;
    age: number;
    isStudent: boolean;
}

interface TaxResult {
    netIncome: number;
    pitAmount: number;
    zusAmount: number; // Health/Social insurance
    pitRate: number;
}

export function useTaxCalculator({ grossIncome, age, isStudent }: TaxCalculatorParams): TaxResult {
    const result = useMemo(() => {
        // Simplified Polish Tax Logic for Civial Contracts (Umowa Zlecenie)
        // 1. Social Security (ZUS): ~13.71% (Pension, Disability, Sickness) - Optional for students < 26 usually, but let's assume standard logic overrides.
        // Actually, Students < 26 on Umowa Zlecenie pay 0 ZUS and 0 PIT.

        let zusRate = 0.1371;
        let pitRate = 0.12;
        let costOfRevenueRate = 0.20; // 20% standard cost of revenue

        if (isStudent && age < 26) {
            zusRate = 0;
            pitRate = 0;
        }

        const zusAmount = grossIncome * zusRate;
        const incomeAfterZus = grossIncome - zusAmount;

        const costOfRevenue = incomeAfterZus * costOfRevenueRate;
        const taxBase = incomeAfterZus - costOfRevenue;

        const pitAmount = Math.max(0, Math.round(taxBase * pitRate));
        const netIncome = grossIncome - zusAmount - pitAmount;

        return {
            netIncome,
            pitAmount,
            zusAmount,
            pitRate
        };
    }, [grossIncome, age, isStudent]);

    return result;
}
