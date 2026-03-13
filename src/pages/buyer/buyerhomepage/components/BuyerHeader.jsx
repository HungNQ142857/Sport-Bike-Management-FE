import { FaBicycle, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearSessionUser, getSessionUser } from "../../../../services/mockAuth";

export default function BuyerHeader({ containerClass, query, setQuery, scrollTo }) {
  const navigate = useNavigate();
  const [sessionUser, setSessionUser] = useState(() => getSessionUser());

  const handleLogout = () => {
    clearSessionUser();
    setSessionUser(null);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className={`${containerClass} flex items-center gap-3 py-3 md:gap-6`}>
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 font-bold" type="button">
          <div className="rounded-lg bg-cyan-400 p-2 text-slate-900">
            <FaBicycle />
          </div>
          <span className="hidden text-lg md:inline">XeĐạp Market</span>
        </button>

        <div className="relative flex-1">
          <FaSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm xe đạp, thương hiệu, người bán..."
            className="w-full rounded-full border border-transparent bg-slate-100 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-cyan-400 focus:bg-white"
          />
        </div>

        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          <button type="button" onClick={() => scrollTo("categories")} className="hover:text-cyan-600">
            Khám phá
          </button>
          <button type="button" onClick={() => scrollTo("featured")} className="hover:text-cyan-600">
            Xe nổi bật
          </button>
          <button type="button" onClick={() => scrollTo("footer")} className="hover:text-cyan-600">
            Liên hệ
          </button>
        </nav>

        <button
          type="button"
          onClick={() => scrollTo("featured")}
          className="hidden items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold md:inline-flex"
        >
          <FaShoppingCart className="text-xs" />
          Giỏ hàng
        </button>

        {sessionUser ? (
          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-cyan-50 px-3 py-2 text-sm font-semibold text-cyan-700 md:inline">
              {sessionUser.fullName}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Đăng xuất
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Đăng nhập
          </button>
        )}
      </div>
    </header>
  );
}
