import React from "react";

export type Service = {
  id: string;
  title: string;
  description: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const Activity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path d="M12 2v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Users = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Layout = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 9h18" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 21V9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Megaphone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path d="M2 11a1 1 0 0 0 1 1h4l7 4V6L7 10H3a1 1 0 0 0-1 1z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 12c1.333 0 2 .667 2 2s-.667 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const services: Service[] = [
  {
    id: "strategy",
    title: "Strategy",
    description: "Research-driven planning to find product-market fit and growth levers.",
    Icon: Activity,
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Hands-on guidance to prioritize and execute business initiatives.",
    Icon: Users,
  },
  {
    id: "website",
    title: "Website Creation",
    description: "Fast, modern websites tuned for conversion and performance.",
    Icon: Layout,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Growth marketing: paid, organic, and content strategies that scale.",
    Icon: Megaphone,
  },
];

export default services;
