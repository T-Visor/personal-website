import { headers } from 'next/headers';
import ClientLayout from '@/components/clientLayout';

export default function Layout({ children }) {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '';

  return <ClientLayout currentPath={pathname}>{children}</ClientLayout>;
}