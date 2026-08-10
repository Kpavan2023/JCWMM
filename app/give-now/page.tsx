import type { Metadata } from 'next';
import GiveNowClient from './GiveNowClient';

export const metadata: Metadata = {
  title: 'Give Now | Jesus Christ Word Miracles Ministry (JCWMM)',
  description:
    'Sow into the Kingdom of God. Support JCWMM through online giving via UPI, PhonePe, GPay, Paytm, or bank transfer.',
};

export default function GiveNowPage() {
  return <GiveNowClient />;
}
