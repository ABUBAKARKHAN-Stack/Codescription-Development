import NotFound from '@/components/ui/not-found';
import { brandName } from '@/constants/constants';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: `Page not found | ${brandName}`,
  description: `Oops! This page doesn’t exist. Return to the homepage to continue exploring ${brandName}.`,
  robots: { index: false }
}

export default function GlobalNotFoundPage() {
  return <NotFound />
}