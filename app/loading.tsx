export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800">
      <div className="flex flex-col items-center gap-5">
        {/* Logo + spinner ring */}
        <div className="relative w-16 h-16">
          <div
            className="absolute inset-0 rounded-full border-[3px] border-white/15 border-t-gold-400 animate-spin"
            style={{ animationDuration: '0.8s' }}
          />
          <div className="absolute inset-2 rounded-full bg-white/5 flex items-center justify-center">
            <span className="font-poppins font-bold text-gold-400 text-sm">JCWMM</span>
          </div>
        </div>
        <p className="font-inter text-royal-300 text-sm tracking-wide">Loading…</p>
      </div>
    </div>
  );
}
