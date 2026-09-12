import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800">
      <div className="flex flex-col items-center gap-5">
        {/* Separate loading logo */}
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-full border-[3px] border-white/15 border-t-gold-400 animate-spin"
            style={{ animationDuration: '0.8s' }}
          />

          <div className="absolute inset-2 rounded-full overflow-hidden bg-white/5 flex items-center justify-center">
            <Image
              src="/images/both_pic.png"
              alt="JCWMM loading logo"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        <p className="font-inter text-royal-300 text-sm tracking-wide">
          Loading…
        </p>
      </div>
    </div>
  );
}