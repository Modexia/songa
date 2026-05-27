// Songa SVG Logo — Modern wordmark with a dynamic "S" movement icon
// The icon represents speed/movement (road arrow) + structure (clean geometry)
// Colors: Teal (#006072) icon mark + dark text, orange accent dot

import { cn } from '@/lib/utils';

interface SongaLogoProps {
  className?: string;
  /** 'light' = dark text on light bg, 'dark' = white text on dark bg */
  theme?: 'light' | 'dark';
  showWordmark?: boolean;
  iconSize?: number;
}

export function SongaLogo({
  className,
  theme = 'light',
  showWordmark = true,
  iconSize = 40,
}: SongaLogoProps) {
  const textColor = theme === 'dark' ? '#FFFFFF' : '#0A0F1E';

  return (
    <div className={cn('flex items-center gap-2.5 select-none', className)}>
      {/* Icon mark — stylized "S" arrow / road mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Background rounded square */}
        <rect width="40" height="40" rx="10" fill="#006072" />

        {/* Abstract stylized "S" / road-arrow shape */}
        {/* Top arc — going right */}
        <path
          d="M10 14 C10 10.5 13 8 17 8 L27 8 C29.2 8 31 9.8 31 12 C31 14.2 29.2 16 27 16 L17 16 C15 16 13.5 17.2 13.5 19.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Bottom arc — going left */}
        <path
          d="M30 26 C30 29.5 27 32 23 32 L13 32 C10.8 32 9 30.2 9 28 C9 25.8 10.8 24 13 24 L23 24 C25 24 26.5 22.8 26.5 20.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Orange accent dot — bottom right */}
        <circle cx="33" cy="33" r="4" fill="#FF6B35" />
      </svg>

      {showWordmark && (
        <svg
          width="90"
          height={iconSize * 0.55}
          viewBox="0 0 90 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SONGA wordmark */}
          <text
            x="0"
            y="18"
            fontFamily="'Outfit', system-ui, sans-serif"
            fontWeight="800"
            fontSize="22"
            fill={textColor}
            letterSpacing="-0.5"
          >
            songa
          </text>
        </svg>
      )}
    </div>
  );
}
