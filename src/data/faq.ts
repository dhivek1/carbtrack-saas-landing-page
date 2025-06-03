import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `What is ${siteDetails.siteName} and who is it for?`,
    answer: `${siteDetails.siteName} is an AI-powered carbon tracking and sustainability reporting platform. It's built for companies of all sizes—across industries—to simplify carbon accounting and generate compliance-ready reports.`,
  },
  {
    question: 'Do I need technical or sustainability expertise to use it?',
    answer: 'No, the platform is built with simplicity in mind. Our onboarding flow and smart data suggestions help anyone—regardless of background—generate meaningful emission reports and insights.',
  },
  {
    question: 'Can we customize the dashboard and reports based on our industry?',
    answer: 'Yes, our AI tailors the reporting format, emission sources, and benchmarks to your company’s sector—whether you’re in logistics, manufacturing, IT, or services.',
  },
  {
    question: 'Does the platform help with India’s BRSR compliance?',
    answer: `Absolutely. ${siteDetails.siteName} supports SEBI's BRSR framework and helps listed companies auto-generate reports as per national disclosure mandates.`,
  },
  {
    question: 'Do you support Scope 1, 2, and 3 emission reporting?',
    answer: 'Yes, we fully support Scope 1 (direct), Scope 2 (indirect from energy), and Scope 3 (value chain) emissions tracking. You’ll be guided through structured data entry or integrations.',
  },
  {
    question: 'Is my company’s data secure?',
    answer: 'We follow enterprise-grade security protocols, including end-to-end encryption and role-based access controls. Your data stays confidential and audit-trail ready.',
  },
  {
    question: 'Can we integrate this with our ERP or data systems?',
    answer: 'Yes. We offer API integrations with common enterprise tools (SAP, Excel, Google Sheets, etc.) and support custom data connectors based on your workflow.',
  },
  {
    question: 'Do you offer support and training?',
    answer: 'Yes, we provide live onboarding support, training sessions, and a detailed help center. Priority support is available for enterprise users.',
  }
];
