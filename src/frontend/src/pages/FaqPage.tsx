import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'What is the shelf life of your theplas?',
    answer:
      'Our theplas come in different varieties with varying shelf lives. Long Duration theplas (Masala, Methi, Til) can be stored for up to 3 months when kept in an airtight container. Short Duration theplas (Dudhi, Spinach) are best consumed within 1 day for optimal freshness. All our products are made without preservatives, so proper storage is essential.',
  },
  {
    question: 'How should I store the theplas?',
    answer:
      'For best results, store theplas in an airtight container in a cool, dry place. Long duration varieties can be refrigerated to extend freshness. Avoid exposure to moisture and direct sunlight. Once opened, consume within the recommended timeframe for each variety.',
  },
  {
    question: 'Are your products made without preservatives?',
    answer:
      'Yes, absolutely! We take pride in using only honest, natural ingredients. Our theplas contain no preservatives, no artificial colors, and no shortcuts. We follow traditional methods passed down through generations, ensuring you get authentic taste and wholesome nutrition.',
  },
  {
    question: 'How do I place an order?',
    answer:
      'Simply browse our products, add items to your cart, and proceed to checkout. You can contact us directly via phone or email for bulk orders or special requests. We are currently expanding our delivery network to serve more locations.',
  },
  {
    question: 'What areas do you deliver to?',
    answer:
      'We currently deliver across Mumbai and surrounding areas, with our main operations based in Mulund East. We are continuously expanding our delivery network. Contact us to check if we deliver to your location.',
  },
  {
    question: 'Who makes your theplas?',
    answer:
      'Our theplas are lovingly prepared by skilled women working from their homes as part of our Griha Mahila Udyog initiative. These talented homemakers bring generations of culinary expertise and prepare each thepla with the same care they would for their own families. This model empowers women with financial independence while preserving traditional cooking methods.',
  },
  {
    question: 'Can I customize my order?',
    answer:
      'Yes! For bulk orders or special requirements, please contact us directly. We can accommodate custom pack sizes and special requests based on availability.',
  },
  {
    question: 'What makes your theplas different?',
    answer:
      'Our theplas are made using traditional methods with no preservatives or shortcuts. Each piece is handcrafted by experienced homemakers who bring authentic taste and quality. We use only the finest ingredients and maintain strict hygiene standards while preserving the homemade touch that makes our theplas special.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about our products and services
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
