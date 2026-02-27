"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  { question: "Can I change my plan anytime?", answer: "Yes. You can upgrade or downgrade at any time. Changes apply at the start of the next billing cycle." },
  { question: "Is there a free trial?", answer: "Yes. The Professional plan includes a 14 day free trial." },
  { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers." },
  { question: "Do you offer refunds?", answer: "We provide a 30 day money back guarantee if you are not satisfied with the service." },
  { question: "Is there a contract?", answer: "No. All plans are month to month and you may cancel at any time." },
  { question: "How do I contact support?", answer: "Professional and Enterprise include 24/7 support by chat, email, and phone." },

  { question: "Can I use my membership in partner stations in the future?", answer: "Yes. Roaming partner access will be available for professional and enterprise users as coverage expands." },
  { question: "Does the app track my charging history?", answer: "Yes. You may view full past charging sessions at any time. Professional and Enterprise can export reports for audit and fleet use." },
  { question: "Can I book charging slots in advance?", answer: "Enterprise customers can reserve fast charging slots during busy evening periods to avoid waiting." },
  { question: "Does the system prioritise solar energy when possible?", answer: "Professional and Enterprise tiers are routed to solar first when available and only fall back to grid if needed." },
  { question: "Can this integrate with vehicle telemetry to study efficiency?", answer: "Yes. Vehicle telemetry integration is optional and helps improve planning for fleet operations." },
  { question: "Do you provide priority physical maintenance support for enterprise fleets?", answer: "Enterprise members receive priority response for repeated charging issues reported from their vehicles." },
]

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-balance">
          <span className="gradient-text">Frequently Asked Questions</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-background border-t border-border/50">
                  <p className="text-foreground/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
