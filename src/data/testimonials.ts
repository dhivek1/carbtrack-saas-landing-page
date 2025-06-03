import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: 'Ananya Mehra',
    role: 'Sustainability Officer, GreenTech Pvt Ltd',
    message: `${siteDetails.siteName} helped us automate our emission tracking and identify key reduction areas. The AI-generated reports made compliance filing stress-free.`,
    avatar: '/images/testimonial-1.webp',
  },
  {
    name: 'Rahul Verma',
    role: 'Operations Head, EcoSupply Chain Solutions',
    message: `Thanks to ${siteDetails.siteName}, we now get clear, data-backed insights into our Scope 1, 2, and 3 emissions. It’s become an essential tool for internal reporting and partner transparency.`,
    avatar: '/images/testimonial-2.webp',
  },
  {
    name: 'Nidhi Shah',
    role: 'Founder, TerraStart Sustainability Consultants',
    message: `${siteDetails.siteName} makes it simple for growing companies to get ESG-ready. The platform adjusts reporting based on industry, which is a huge plus for our diverse clients.`,
    avatar: '/images/testimonial-3.webp',
  },
];
