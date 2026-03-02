export default function CategoriesSection({ containerClass, categories, setSelectedType, scrollTo }) {
  return (
    <section id="categories" className={`${containerClass} py-14`}>
      <h2 className="text-center text-3xl font-bold">Danh mục phổ biến</h2>
      <p className="mt-2 text-center text-slate-500">Tìm kiếm nhanh loại xe phù hợp với nhu cầu của bạn</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setSelectedType(item.id);
                scrollTo("featured");
              }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-5 py-8 text-center transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="mb-5 inline-flex rounded-full bg-cyan-100 p-3 text-cyan-600">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
              <p className="mt-5 text-sm font-semibold text-cyan-600 opacity-0 transition group-hover:opacity-100">
                Lọc theo danh mục
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
