'use client';

import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: string;
  icon: ReactNode;
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

export default function PlanVisitAccordion({ faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  const renderAnswer = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('• ')) {
        const content = line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return (
          <div key={i} className="flex items-start gap-2 my-1">
            <span className="text-gold-500 mt-1 flex-shrink-0">•</span>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        );
      }
      if (line === '') return <div key={i} className="h-2" />;
      const content = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={i} dangerouslySetInnerHTML={{ __html: content }} className="leading-relaxed" />;
    });
  };

  return (
    <div className="space-y-3" role="list">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-royal-200 shadow-lg shadow-royal-100/60'
                : 'border-gray-200 hover:border-royal-200 hover:shadow-md'
            }`}
            role="listitem"
          >
            <button
              onClick={() => toggle(faq.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-body-${faq.id}`}
              id={`accordion-header-${faq.id}`}
              className="w-full flex items-center gap-4 px-6 py-5 text-left bg-white hover:bg-royal-50/50 transition-colors"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                isOpen ? 'bg-royal-100' : 'bg-gray-100'
              }`}>
                {faq.icon}
              </div>
              <span className={`flex-1 font-poppins font-semibold text-base transition-colors ${
                isOpen ? 'text-royal-800' : 'text-royal-900'
              }`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                  isOpen ? 'rotate-180 text-royal-700' : 'text-gray-400'
                }`}
              />
            </button>

            <div
              id={`accordion-body-${faq.id}`}
              role="region"
              aria-labelledby={`accordion-header-${faq.id}`}
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? 'max-h-[600px]' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-6 pt-1 bg-white">
                <div className="ml-14 font-inter text-gray-700 text-[0.9375rem] space-y-1">
                  {renderAnswer(faq.answer)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
