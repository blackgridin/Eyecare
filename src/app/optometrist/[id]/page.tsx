import { redirect } from 'next/navigation';

// Generate static params for common optometrist IDs
export function generateStaticParams() {
  // Generate paths for common IDs that might be indexed by search engines
  const commonIds = ['334', '123', '1', '2', '3', '4', '5'];
  
  return commonIds.map((id) => ({
    id: id,
  }));
}

export default function OptometristRedirect() {
  // Server-side redirect to homepage doctors section
  redirect('/#doctors');
}
