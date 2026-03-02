export default function HeroSection({ containerClass, scrollTo }) {
  return (
    <section id="hero" className={`${containerClass} pt-6 md:pt-8`}>
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=1800&q=80"
          alt="Xe đạp thể thao"
          className="h-[500px] w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/40 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 md:px-14">
          <div className="max-w-2xl text-white">
            <p className="mb-4 inline-block rounded-full bg-cyan-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
              Nền tảng uy tín số 1 Việt Nam
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Mua bán xe đạp thể thao cũ
              <span className="text-cyan-400"> an toàn & minh bạch</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm text-slate-200 md:text-base">
              Khám phá hàng ngàn chiếc xe đạp đã qua kiểm định từ các thương hiệu hàng đầu. Giao dịch an toàn,
              vận chuyển tận nhà.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("featured")}
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-300"
              >
                Mua xe ngay
              </button>
              <button
                type="button"
                onClick={() => scrollTo("process")}
                className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
              >
                Đăng tin bán
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
