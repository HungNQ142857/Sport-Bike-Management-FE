import { FaCheckCircle, FaFilter, FaHeart, FaSortAmountDown, FaUserCircle } from "react-icons/fa";

const formatCurrency = (value) => `${value.toLocaleString("vi-VN", { maximumFractionDigits: 0 })}đ`;

export default function FeaturedBikesSection({
  containerClass,
  filteredBikes,
  selectedType,
  setSelectedType,
  sortBy,
  setSortBy,
  setQuery,
}) {
  return (
    <section id="featured" className={`${containerClass} py-14`}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold">Xe nổi bật trong tuần</h2>
          <p className="mt-2 text-slate-500">Tuyển chọn những chiếc xe chất lượng tốt nhất với giá hợp lý</p>
        </div>
        <button type="button" className="font-semibold text-cyan-600 hover:text-cyan-700">
          Xem tất cả
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <FaFilter className="text-cyan-600" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-transparent text-sm font-medium outline-none"
          >
            <option value="all">Tất cả danh mục</option>
            <option value="road">Road</option>
            <option value="mtb">MTB</option>
            <option value="gravel">Gravel</option>
            <option value="ebike">E-bike</option>
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <FaSortAmountDown className="text-cyan-600" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm font-medium outline-none"
          >
            <option value="featured">Sắp xếp mặc định</option>
            <option value="priceAsc">Giá tăng dần</option>
            <option value="priceDesc">Giá giảm dần</option>
            <option value="ratingDesc">Đánh giá cao nhất</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedType("all");
            setSortBy("featured");
            setQuery("");
          }}
          className="ml-auto rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Đặt lại bộ lọc
        </button>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filteredBikes.map((bike) => (
          <article
            key={bike.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden">
              <img
                src={bike.image}
                alt={bike.name}
                className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-900">
                <FaCheckCircle className="text-[11px]" />
                Đã kiểm định
              </span>
              <button
                type="button"
                aria-label={`Yêu thích ${bike.name}`}
                className="absolute right-3 top-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-600 opacity-0 shadow transition hover:text-rose-500 group-hover:opacity-100"
              >
                <FaHeart />
              </button>
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                {bike.brand} • {bike.type}
              </p>
              <h3 className="mt-1 text-2xl font-semibold">{bike.name}</h3>
              <p className="text-sm text-slate-500">
                {bike.condition} • Size {bike.size}
              </p>
              <p className="mt-3 text-4xl font-extrabold text-cyan-600">{formatCurrency(bike.price)}</p>
              <p className="text-sm text-slate-400 line-through">{formatCurrency(bike.oldPrice)}</p>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
                <span className="flex items-center gap-2">
                  <FaUserCircle className="text-slate-500" />
                  {bike.seller}
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 px-2.5 py-0.5 font-semibold text-amber-600">
                  ★ {bike.rating}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredBikes.length === 0 && (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-600">
          Không tìm thấy xe phù hợp với điều kiện tìm kiếm. Thử nới bộ lọc hoặc đổi từ khóa.
        </div>
      )}
    </section>
  );
}
