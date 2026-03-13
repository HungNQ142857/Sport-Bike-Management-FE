import { useState } from "react";
import { FaArrowRight, FaBicycle, FaEnvelope, FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../../../services/mockAuth";

export default function LoginFormCard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [notice, setNotice] = useState({ type: "", message: "" });

  useEffect(() => {
    const { registeredEmail, registeredMessage } = location.state || {};
    if (!registeredEmail && !registeredMessage) return;

    if (registeredEmail) setEmail(registeredEmail);
    if (registeredMessage) setNotice({ type: "success", message: registeredMessage });

    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
    if (notice.message) setNotice({ type: "", message: "" });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
    if (notice.message) setNotice({ type: "", message: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const rawPassword = password;
    const trimmedPassword = password.trim();
    const nextErrors = {
      email: trimmedEmail ? "" : "Vui lòng nhập email.",
      password: trimmedPassword ? "" : "Vui lòng nhập mật khẩu.",
    };

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors);
      setNotice({ type: "error", message: "Vui lòng nhập đầy đủ email và mật khẩu để đăng nhập." });
      return;
    }

    setErrors({ email: "", password: "" });

    const loginResult = loginUser({ email: trimmedEmail, password: rawPassword });
    if (!loginResult.ok && loginResult.error === "NOT_FOUND") {
      setNotice({ type: "warning", message: "Tài khoản này chưa được đăng ký. Bạn có muốn tạo tài khoản mới không?" });
      return;
    }

    if (!loginResult.ok && loginResult.error === "INVALID_PASSWORD") {
      setErrors((prev) => ({ ...prev, password: "Mật khẩu chưa chính xác." }));
      setNotice({ type: "error", message: "Email hoặc mật khẩu chưa đúng. Vui lòng thử lại." });
      return;
    }

    setNotice({ type: "success", message: "Đăng nhập thành công. Đang chuyển hướng..." });
    navigate("/buyer");
  };

  return (
    <div className="w-full max-w-[450px] rounded-[24px] border border-white/40 bg-white/45 px-8 py-9 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-cyan-500 text-3xl text-white shadow-lg shadow-cyan-500/30">
        <FaBicycle />
      </div>

      <h1 className="text-center text-[42px] font-extrabold leading-tight text-slate-900">Chào mừng trở lại</h1>
      <p className="mt-1 text-center text-sm text-slate-600">Đăng nhập để tiếp tục khám phá</p>
      <p className="mb-6 text-center text-xs font-medium text-slate-500">Xe Đạp Market</p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-800">
            Email
          </label>
          <div className="group relative">
            <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition group-focus-within:text-cyan-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="nhap_email@example.com"
              className={`w-full rounded-2xl border bg-white/80 py-3 pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                errors.email
                  ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                  : "border-slate-200/90 focus:border-cyan-400 focus:ring-cyan-200"
              }`}
            />
          </div>
          {errors.email ? <p className="mt-1 text-xs font-medium text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-semibold text-slate-800">
              Mật khẩu
            </label>
            <button type="button" className="text-xs font-semibold text-cyan-600 transition hover:text-cyan-500">
              Quên mật khẩu?
            </button>
          </div>
          <div className="group relative">
            <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-400 transition group-focus-within:text-cyan-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Nhập mật khẩu của bạn"
              className={`w-full rounded-2xl border bg-white/80 py-3 pl-12 pr-12 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                errors.password
                  ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                  : "border-slate-200/90 focus:border-cyan-400 focus:ring-cyan-200"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-400 hover:text-cyan-500"
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          {errors.password ? <p className="mt-1 text-xs font-medium text-red-600">{errors.password}</p> : null}
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-300"
        >
          Đăng nhập
          <FaArrowRight className="text-sm" />
        </button>

        {notice.message ? (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              notice.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : notice.type === "warning"
                  ? "border-amber-200 bg-amber-50 text-amber-700"
                  : "border-emerald-200 bg-emerald-50 text-emerald-700"
            }`}
          >
            <p>{notice.message}</p>
            {notice.type === "warning" ? (
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="mt-2 font-semibold text-cyan-600 transition hover:text-cyan-500"
              >
                Tạo tài khoản
              </button>
            ) : null}
          </div>
        ) : null}
      </form>

      <p className="mt-7 text-center text-sm text-slate-600">
        Chưa có tài khoản?{" "}
        <button type="button" onClick={() => navigate("/register")} className="font-bold text-slate-900 transition hover:text-cyan-500">
          Đăng ký ngay
        </button>
      </p>

      <p className="mt-5 text-center text-xs text-slate-500">© 2026 XeĐạp Market. All rights reserved.</p>
    </div>
  );
}
