import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export default function ChatDrawer() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
        { role: 'assistant', text: 'Cześć! I am your Songa AI Assistant. Ask me anything about Polish taxes (PIT/ZUS) or your settlements.' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        setMessages([...messages, { role: 'user', text: input }]);
        setInput('');

        // Simulate response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'assistant', text: 'I am a demo bot. Since you are a student under 26, you likely pay 0% Income Tax!' }]);
        }, 1000);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 p-4 bg-brand-orange text-white rounded-full shadow-lg hover:bg-orange-600 transition-all z-40 transform hover:scale-110"
                aria-label="Open AI Assistant"
            >
                <MessageSquare className="w-6 h-6" />
            </button>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-300 sm:duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-300 sm:duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-black shadow-xl">
                                            <div className="bg-brand-orange px-4 py-6 sm:px-6">
                                                <div className="flex items-center justify-between">
                                                    <Dialog.Title className="text-base font-semibold leading-6 text-white">
                                                        Songa AI Assistant
                                                    </Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative rounded-md text-orange-200 hover:text-white focus:outline-none"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="absolute -inset-2.5" />
                                                            <span className="sr-only">Close panel</span>
                                                            <X className="w-6 h-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-1">
                                                    <p className="text-sm text-orange-100">
                                                        Your guide to taxes and earnings in Poland.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="relative flex-1 flex flex-col p-4 sm:px-6">
                                                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                                                    {messages.map((msg, idx) => (
                                                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                            <div className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${msg.role === 'user'
                                                                    ? 'bg-brand-orange text-white'
                                                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200'
                                                                }`}>
                                                                {msg.text}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <form onSubmit={handleSend} className="flex gap-2">
                                                    <Input
                                                        value={input}
                                                        onChange={(e) => setInput(e.target.value)}
                                                        placeholder="Ask a question..."
                                                        className="flex-1"
                                                    />
                                                    <Button type="submit" size="sm">
                                                        <Send className="w-4 h-4" />
                                                    </Button>
                                                </form>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
