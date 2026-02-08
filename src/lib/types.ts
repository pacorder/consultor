import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  bio: string[];
  stats: {
    value: string;
    label: string;
  }[];
};

export type Service = {
  title: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
};

export type MethodologyStep = {
  step: number;
  title: string;
  description: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: number;
};

export type Specialization = {
  area: string;
  description: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  roi: string;
};

export type Testimonial = {
  name: string;
  company: string;
  review: string;
  rating: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
};
