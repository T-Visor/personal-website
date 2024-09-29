import { ReactNode } from 'react';
import ClientLayout from '@/components/clientLayout';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <ClientLayout>{children}</ClientLayout>;
}