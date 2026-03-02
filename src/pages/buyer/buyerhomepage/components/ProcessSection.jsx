export default function ProcessSection({ containerClass, flowSteps }) {
  return (
    <section id="process" className="bg-slate-100 py-14">
      <div className={containerClass}>
        <h2 className="text-center text-3xl font-bold">Quy trình giao dịch minh bạch</h2>
        <p className="mx-auto mt-2 max-w-3xl text-center text-slate-500">
          Chúng tôi bảo vệ quyền lợi của cả người mua và người bán thông qua quy
          <br className="hidden md:block" />
          trình 5 bước nghiêm ngặt.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <div className="mx-auto inline-flex rounded-xl border border-cyan-400 bg-cyan-50 p-3 text-cyan-600">
                  <Icon />
                </div>
                <h3 className="mt-4 font-bold">
                  {index + 1}. {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
