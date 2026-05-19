import type { Metadata } from 'next';
import CareerExplorerForm from './form';

export const metadata: Metadata = {
  title: 'Career Explorer | Edussentials',
  description: 'A guided career assessment for students in Grades 9 to 12.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function Page() {
  return <CareerExplorerForm />;
}
