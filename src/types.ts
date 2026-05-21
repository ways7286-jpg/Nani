import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // The Lucide icon string
  features: string[];
  duration: string;
  pageCount: string;
  matchTier: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ProjectSample {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  mockImage: string;
}
