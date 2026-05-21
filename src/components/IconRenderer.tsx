import React from 'react';
import {
  Palette,
  Briefcase,
  Utensils,
  FolderGit2,
  Sparkles,
  RefreshCw,
  Paintbrush,
  Layers,
  Zap,
  ShieldCheck,
  DollarSign,
  ArrowRight,
  Phone,
  MessageSquare,
  Menu,
  X,
  Check,
  Calendar,
  Award,
  Star,
  ExternalLink,
  ChevronRight,
  User,
  Clock,
  MapPin,
  Laptop
} from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = "", size = 24 }) => {
  const iconMap: Record<string, React.ComponentType<{ className?: string, size?: number }>> = {
    Palette,
    Briefcase,
    Utensils,
    FolderGit2,
    Sparkles,
    RefreshCw,
    Paintbrush,
    Layers,
    Zap,
    ShieldCheck,
    DollarSign,
    ArrowRight,
    Phone,
    MessageSquare,
    Menu,
    X,
    Check,
    Calendar,
    Award,
    Star,
    ExternalLink,
    ChevronRight,
    User,
    Clock,
    MapPin,
    Laptop
  };

  const Component = iconMap[name] || Sparkles; // Fallback to Sparkles
  return <Component className={className} size={size} />;
};
