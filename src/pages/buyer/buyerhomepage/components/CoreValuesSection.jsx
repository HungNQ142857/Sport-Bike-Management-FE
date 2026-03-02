export default function CoreValuesSection({ containerClass, coreValues }) {
  return (
    <section className="bg-slate-100 py-14">
      <div className={containerClass}>
        <h2 className="text-center text-3xl font-bold">Giá trị cốt lõi</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-4">
          {coreValues.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-transparent bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
              >
                <div className="inline-flex rounded-xl bg-cyan-100 p-2 text-cyan-600">
                  <Icon />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
