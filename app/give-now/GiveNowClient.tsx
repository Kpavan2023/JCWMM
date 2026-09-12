'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  CheckCheck,
  Copy,
  Heart,
  Landmark,
  Phone,
  QrCode,
  ShieldCheck,
  Sparkles,
  Smartphone,
  WalletCards,
} from 'lucide-react';

import ThemeToggle from '@/components/shared/ThemeToggle';
import {
  PAYMENT_METHODS,
  GIVE_NOW_VERSE,
} from '@/lib/give-now-data';

/* =========================================================
   COPY BUTTON
   ========================================================= */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard may be unavailable in some browser contexts.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${text}`}
      aria-label={`Copy ${text}`}
      className="ml-1.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white/45 transition-all duration-200 hover:border-yellow-400/30 hover:bg-yellow-400/[0.06] hover:text-white"
    >
      {copied ? (
        <CheckCheck className="h-3.5 w-3.5 text-yellow-300" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

/* =========================================================
   BANK DETAIL ROW
   ========================================================= */

function BankRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[92px_minmax(0,1fr)] items-center gap-4 border-b border-white/[0.06] py-4 last:border-b-0">
      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/35">
        {label}
      </span>

      <div className="flex min-w-0 items-center justify-end">
        <span className="break-all text-right text-sm font-medium text-white/90">
          {value}
        </span>

        <CopyButton text={value} />
      </div>
    </div>
  );
}

/* =========================================================
   SECTION EYEBROW
   ========================================================= */

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-yellow-300/70">
      {children}
    </p>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function GiveNowClient() {
  const upiPayment = PAYMENT_METHODS.find(
    (item) => item.id === 'upi-sbi'
  );

  const bankPayment = PAYMENT_METHODS.find(
    (item) => item.id === 'sbi-main'
  );

  const upiId = upiPayment?.upiId ?? 'JCWMM@SBI';
  const merchantName = upiPayment?.merchantName ?? 'JUDAH ASHER';
  const phones = upiPayment?.phones ?? [
    '+91 8686861836',
    '+91 9700545494',
  ];

  return (
    <main className="min-h-screen bg-[#030303] font-inter text-white">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-400/[0.035] blur-[140px]" />

        <div className="absolute bottom-[-180px] left-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/[0.025] blur-[120px]" />
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#030303]/85 backdrop-blur-2xl">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-[12px] font-medium text-white/55 transition-colors hover:text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] transition-all group-hover:border-white/20 group-hover:bg-white/[0.06]">
              <ArrowLeft className="h-3.5 w-3.5" />
            </span>

            <span className="hidden sm:inline">
              Back to Home
            </span>
          </Link>

          {/* Brand */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-yellow-400/25 bg-white/5">
              <Image
                src="/images/both_pic.png"
                alt="JCWMM"
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-poppins text-[13px] font-bold tracking-wide text-white">
                JCWMM
              </p>

              <p className="mt-0.5 text-[7px] uppercase tracking-[0.15em] text-white/35">
                Give &amp; Support
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* =====================================================
          INTRO HERO
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/15 bg-yellow-400/[0.045] px-4 py-2">
            <WalletCards className="h-3.5 w-3.5 text-yellow-300" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.23em] text-yellow-300/85">
              Give &amp; Support
            </span>
          </div>

          <h1 className="mt-6 font-poppins text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
            Sow into the{' '}
            <span
              style={{
                background:
                  'linear-gradient(180deg, #ffffcc 0%, #ffff66 35%, #ffff00 70%, #cccc00 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Kingdom of God
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
            Your generosity helps Jesus Christ Word Miracles Ministry
            preach the Gospel, reach lives, and continue the work God
            has entrusted to us.
          </p>

          {/* Verse */}
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="relative overflow-hidden rounded-[24px] border border-yellow-400/10 bg-white/[0.025] px-6 py-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] sm:px-10">
              <div className="absolute left-1/2 top-0 h-px w-28 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />

              <p className="font-poppins text-sm italic leading-7 text-white/65 sm:text-base">
                {GIVE_NOW_VERSE.text}
              </p>

              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-yellow-400/20" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-300">
                  {GIVE_NOW_VERSE.reference}
                </span>

                <span className="h-px w-8 bg-yellow-400/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl space-y-16 px-4 pb-20 sm:px-6 lg:px-8">

        {/* ===================================================
            01 — ABRAHAMIC COVENANT PARTNER
        =================================================== */}

        <section>
          <div className="mb-7 flex items-end justify-between gap-6">
            <div>
              <SectionEyebrow>
                Monthly Partnership
              </SectionEyebrow>

              <h2 className="font-poppins text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                Become an Abrahamic Covenant Partner
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
                Partner consistently with the ministry and help us
                carry the Gospel farther.
              </p>
            </div>

            <div className="hidden h-11 w-11 items-center justify-center rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.045] sm:flex">
              <Sparkles className="h-4 w-4 text-yellow-300/80" />
            </div>
          </div>

          {/* Main partnership panel */}
          <div className="overflow-hidden rounded-[32px] border border-yellow-400/12 bg-[#090909] shadow-[0_35px_110px_rgba(0,0,0,0.48)]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">

              {/* Image */}
              <div className="relative flex items-center justify-center bg-black p-3 sm:p-5 lg:p-7">
                <div className="relative w-full overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.015]">
                  <Image
                    src="/images/BECOME_A_ABRAHAMIC_COVENANT_PARTNER.jpg"
                    alt="Become an Abrahamic Covenant Partner"
                    width={2048}
                    height={2048}
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="block h-auto w-full object-contain"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/[0.025]" />
                </div>
              </div>

              {/* Information */}
              <div className="flex flex-col justify-center border-t border-white/[0.07] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-yellow-300/75">
                    Abrahamic Covenant
                  </span>
                </div>

                <h3 className="mt-5 font-poppins text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                  Partner with the{' '}
                  <span
                    style={{
                      background:
                        'linear-gradient(180deg, #ffffcc 0%, #ffff66 35%, #ffff00 70%, #cccc00 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Ministry
                  </span>
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/45">
                  Become a monthly partner and sow consistently into
                  the work of the ministry. Your partnership helps
                  us preach the Gospel, conduct crusades, and reach
                  more people with the Word of God.
                </p>

                {/* Divider */}
                <div className="my-7 flex items-center gap-3">
                  <span className="h-px w-10 bg-yellow-400/35" />
                  <span className="h-1 w-1 rounded-full bg-yellow-300" />
                  <span className="h-px flex-1 bg-white/[0.07]" />
                </div>

                {/* UPI compact module */}
                <div className="rounded-[22px] border border-white/[0.07] bg-white/[0.025] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-yellow-300/70">
                        Give Monthly
                      </p>

                      <p className="mt-1 text-sm text-white/65">
                        Scan with any supported UPI app
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-400/15 bg-yellow-400/[0.05]">
                      <QrCode className="h-4 w-4 text-yellow-300" />
                    </div>
                  </div>

                  <div className="mt-5 grid items-center gap-5 sm:grid-cols-[112px_minmax(0,1fr)]">
                    <div className="mx-auto w-[112px] rounded-[16px] bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
                      <Image
                        src="/images/qrrr.jpeg"
                        alt="JCWMM UPI QR Code"
                        width={2048}
                        height={2048}
                        sizes="112px"
                        className="block aspect-square h-auto w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                        UPI ID
                      </p>

                      <div className="mt-1 flex items-center">
                        <span className="break-all font-poppins text-base font-semibold text-yellow-300">
                          {upiId}
                        </span>

                        <CopyButton text={upiId} />
                      </div>

                      <p className="mt-2 text-xs text-white/40">
                        Merchant:{' '}
                        <span className="font-medium text-white/70">
                          {merchantName}
                        </span>
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {[
                          'GPay',
                          'PhonePe',
                          'Paytm',
                          'BHIM',
                        ].map((app) => (
                          <span
                            key={app}
                            className="rounded-full border border-white/[0.07] bg-white/[0.035] px-2.5 py-1 text-[8px] font-medium text-white/45"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact numbers */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3.5 py-2 text-[11px] font-medium text-white/55 transition-all hover:border-yellow-400/25 hover:bg-yellow-400/[0.04] hover:text-white"
                    >
                      <Phone className="h-3 w-3 text-yellow-300" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            PAYMENT METHODS
        =================================================== */}

        <section>
          <div className="mb-7">
            <SectionEyebrow>
              Giving Methods
            </SectionEyebrow>

            <h2 className="font-poppins text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
              Choose Your Way to Give
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/40">
              Use UPI for a quick digital gift or transfer directly
              through the bank.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">

            {/* =================================================
                UPI CARD
            ================================================= */}

            <article className="group overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#090909] shadow-[0_25px_75px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative bg-black p-3 sm:p-5">
                <div className="overflow-hidden rounded-[20px] border border-white/[0.07]">
                  <Image
                    src="/images/JCWMM_OFFERING_QR_CODE_2.jpg"
                    alt="JCWMM UPI payment QR code"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="border-t border-white/[0.07] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionEyebrow>
                      Digital Giving
                    </SectionEyebrow>

                    <h3 className="font-poppins text-xl font-semibold text-white">
                      UPI &amp; Mobile Payments
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/15 bg-yellow-400/[0.05]">
                    <Smartphone className="h-4 w-4 text-yellow-300" />
                  </div>
                </div>

                {/* UPI ID */}
                <div className="mt-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    UPI ID
                  </p>

                  <div className="mt-1 flex items-center">
                    <span className="break-all font-poppins text-lg font-semibold text-yellow-300">
                      {upiId}
                    </span>

                    <CopyButton text={upiId} />
                  </div>
                </div>

                {/* Merchant */}
                <div className="mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Merchant Name
                  </p>

                  <p className="mt-1 font-poppins text-sm font-medium text-white/85">
                    {merchantName}
                  </p>
                </div>

                {/* Apps */}
                <div className="mt-6">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Supported Apps
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'GPay',
                      'PhonePe',
                      'Paytm',
                      'BHIM UPI',
                      'WhatsApp Pay',
                    ].map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-white/50"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Need Help?
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] text-white/55 transition-colors hover:border-yellow-400/20 hover:text-white"
                      >
                        <Phone className="h-3 w-3 text-yellow-300" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* =================================================
                BANK CARD
            ================================================= */}

            <article className="group overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#090909] shadow-[0_25px_75px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1">
              {/* Image */}
              <div className="relative bg-black p-3 sm:p-5">
                <div className="overflow-hidden rounded-[20px] border border-white/[0.07]">
                  <Image
                    src="/images/offering-2.jpeg"
                    alt="JCWMM bank transfer offering"
                    width={1671}
                    height={2048}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="border-t border-white/[0.07] p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <SectionEyebrow>
                      Direct Transfer
                    </SectionEyebrow>

                    <h3 className="font-poppins text-xl font-semibold text-white">
                      Bank Transfer — SBI
                    </h3>

                    <p className="mt-1 text-xs text-white/35">
                      NEFT · RTGS · IMPS · Internet Banking
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/15 bg-yellow-400/[0.05]">
                    <Landmark className="h-4 w-4 text-yellow-300" />
                  </div>
                </div>

                {/* Details */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4">
                  <BankRow
                    label="Account Name"
                    value={
                      bankPayment?.accountName ??
                      'MR. JUDAH ASHER'
                    }
                  />

                  <BankRow
                    label="Account No."
                    value={
                      bankPayment?.accountNumber ??
                      '20385704769'
                    }
                  />

                  <BankRow
                    label="IFSC"
                    value={
                      bankPayment?.ifscCode ??
                      'SBIN0018395'
                    }
                  />

                  <BankRow
                    label="Branch Code"
                    value={
                      bankPayment?.branchCode ??
                      '018395'
                    }
                  />

                  <BankRow
                    label="Bank"
                    value={
                      bankPayment?.bankName ??
                      'State Bank of India'
                    }
                  />

                  <BankRow
                    label="Branch"
                    value={
                      bankPayment?.branch ??
                      'Hyderabad'
                    }
                  />
                </div>

                {/* Contact */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[11px] text-white/55 transition-colors hover:border-yellow-400/20 hover:text-white"
                    >
                      <Phone className="h-3 w-3 text-yellow-300" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ===================================================
            TRUST STRIP
        =================================================== */}

        <section>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                title: 'Give in Faith',
                description:
                  'Every gift is an expression of faith and generosity.',
              },
              {
                icon: ShieldCheck,
                title: 'Give Securely',
                description:
                  'Choose the payment method that works best for you.',
              },
              {
                icon: Sparkles,
                title: 'Kingdom Impact',
                description:
                  'Your generosity helps advance the work of the ministry.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[22px] border border-white/[0.07] bg-white/[0.02] p-5 transition-colors hover:border-yellow-400/15 hover:bg-yellow-400/[0.02]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/12 bg-yellow-400/[0.045]">
                    <Icon className="h-4 w-4 text-yellow-300" />
                  </div>

                  <h3 className="mt-4 font-poppins text-sm font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section className="border-t border-white/[0.07] pt-8 text-center">
          <p className="text-xs leading-6 text-white/35 sm:text-sm">
            For giving-related queries, contact{' '}
            <a
              href="mailto:jcwmm.off@gmail.com"
              className="font-medium text-yellow-300 transition-colors hover:text-yellow-200"
            >
              jcwmm.off@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}