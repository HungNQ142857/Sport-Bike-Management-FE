import { useMemo, useState } from "react";
import {
  FaArrowRight,
  FaBicycle,
  FaEnvelope,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
  FaUser,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../../services/mockAuth";

function getPasswordScore(password) {
  const checks = [
    password.length >= 8,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];
  return checks.filter(Boolean).length;
}

function getStrengthMeta(score) {
  if (score <= 1) return { label: "Yếu", color: "bg-red-400" };
  if (score === 2) return { label: "Trung bình", color: "bg-amber-400" };
  if (score === 3) return { label: "Khá", color: "bg-cyan-400" };
  return { label: "Mạnh", color: "bg-emerald-400" };
}

export default function RegisterFormCard() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({ fullName: "", email: "", password: "", confirmPassword: "", agreeTerms: "" });
  const [notice, setNotice] = useState({ type: "", message: "" });

  const passwordScore = useMemo(() => getPasswordScore(password), [password]);
  const strengthMeta = useMemo(() => getStrengthMeta(passwordScore), [passwordScore]);
  const hasRequiredFields = useMemo(
    () => fullName.trim() && email.trim() && password.trim() && confirmPassword.trim(),
    [fullName, email, password, confirmPassword]
  );
  const isPasswordMatched = useMemo(() => password && confirmPassword && password === confirmPassword, [password, confirmPassword]);
  const isFormReady = Boolean(hasRequiredFields && agreeTerms && isPasswordMatched);

  const clearFieldError = (field) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
    if (notice.message) setNotice({ type: "", message: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    const nextErrors = {
      fullName: trimmedFullName ? "" : "Vui lòng nhập họ và tên.",
      email: trimmedEmail ? "" : "Vui lòng nhập email.",
      password: trimmedPassword ? "" : "Vui lòng nhập mật khẩu.",
      confirmPassword: trimmedConfirmPassword ? "" : "Vui lòng nhập lại mật khẩu.",
      agreeTerms: agreeTerms ? "" : "Bạn cần đồng ý điều khoản để tiếp tục.",
    };

    if (trimmedPassword && trimmedConfirmPassword && trimmedPassword !== trimmedConfirmPassword) {
      nextErrors.confirmPassword = "Mật khẩu xác nhận chưa khớp.";
    }

    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      setNotice({ type: "error", message: "Vui lòng kiểm tra lại thông tin đăng ký." });
      return;
    }

    const result = registerUser({
      fullName: trimmedFullName,
      email: trimmedEmail,
      password: trimmedPassword,
    });

    if (!result.ok && result.error === "EMAIL_EXISTS") {
      setErrors((prev) => ({ ...prev, email: "Email này đã được đăng ký." }));
      setNotice({ type: "warning", message: "Email đã tồn tại. Bạn có thể đăng nhập ngay." });
      return;
    }

    setErrors({ fullName: "", email: "", password: "", confirmPassword: "", agreeTerms: "" });
    navigate("/login", {
      state: {
        registeredEmail: trimmedEmail,
        registeredMessage: "Tạo tài khoản thành công. Vui lòng đăng nhập để tiếp tục.",
      },
    });
  };

  return (
    <div className="w-full max-w-[460px] rounded-[24px] border border-white/40 bg-white/45 px-8 py-9 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-xl">
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-cyan-500 text-3xl text-white shadow-lg shadow-cyan-500/30">
        <FaBicycle />
      </div>

      <h1 className="whitespace-nowrap text-center text-[42px] font-extrabold leading-tight text-slate-900">
        Đăng ký tài khoản
      </h1>
      <p className="mb-6 mt-1 text-center text-sm text-slate-600">
        Tạo tài khoản để bắt đầu hành trình mua bán xe an toàn.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-800">
            Họ và tên
          </label>
          <div className="group relative">
            <FaUser className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 transition group-focus-within:text-cyan-400" />
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(event) => {
                setFullName(event.target.value);
                clearFieldError("fullName");
              }}
              placeholder="Nguyễn Văn A"
              className={`w-full rounded-2xl border bg-white/80 py-3 pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                errors.fullName
                  ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                  : "border-slate-200/90 focus:border-cyan-400 focus:ring-cyan-200"
              }`}
            />
          </div>
          {errors.fullName ? <p className="mt-1 text-xs font-medium text-red-600">{errors.fullName}</p> : null}
        </div>

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
              onChange={(event) => {
                setEmail(event.target.value);
                clearFieldError("email");
              }}
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
          <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-800">
            Mật khẩu
          </label>
          <div className="group relative">
            <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-400 transition group-focus-within:text-cyan-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                clearFieldError("password");
                clearFieldError("confirmPassword");
              }}
              placeholder="Tối thiểu 8 ký tự"
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
          <div className="mt-2 flex gap-2">
            {[0, 1, 2, 3].map((bar) => (
              <span
                key={bar}
                className={`h-1.5 flex-1 rounded-full transition ${
                  bar < passwordScore ? strengthMeta.color : "bg-slate-200/80"
                }`}
              />
            ))}
          </div>
          <p className="mt-1 text-xs font-medium text-slate-500">Độ mạnh: {strengthMeta.label}</p>
          <ul className="mt-2 space-y-1 text-xs text-slate-500">
            <li>- Ít nhất 8 ký tự</li>
            <li>- Bao gồm chữ hoa, chữ thường và số</li>
          </ul>
          {errors.password ? <p className="mt-1 text-xs font-medium text-red-600">{errors.password}</p> : null}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-slate-800">
            Nhập lại mật khẩu
          </label>
          <div className="group relative">
            <FaLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-400 transition group-focus-within:text-cyan-400" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
                clearFieldError("confirmPassword");
              }}
              placeholder="Nhập lại mật khẩu"
              className={`w-full rounded-2xl border bg-white/80 py-3 pl-12 pr-12 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-2 ${
                errors.confirmPassword
                  ? "border-red-300 focus:border-red-400 focus:ring-red-200"
                  : "border-slate-200/90 focus:border-cyan-400 focus:ring-cyan-200"
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              aria-label={showConfirmPassword ? "Ẩn mật khẩu xác nhận" : "Hiện mật khẩu xác nhận"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-400 hover:text-cyan-500"
            >
              {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          {errors.confirmPassword ? <p className="mt-1 text-xs font-medium text-red-600">{errors.confirmPassword}</p> : null}
        </div>

        <label className="mt-1 inline-flex cursor-pointer items-start gap-2 text-[13px] text-slate-700">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(event) => {
              setAgreeTerms(event.target.checked);
              clearFieldError("agreeTerms");
            }}
            className="mt-[2px] h-4 w-4 rounded border-slate-300 text-cyan-500 focus:ring-cyan-300"
          />
          <span className="whitespace-nowrap">
            Tôi đồng ý với{" "}
            <button type="button" className="font-bold underline transition hover:text-cyan-500">
              Điều khoản sử dụng
            </button>{" "}
            và{" "}
            <button type="button" className="font-bold underline transition hover:text-cyan-500">
              Chính sách bảo mật
            </button>
          </span>
        </label>
        {errors.agreeTerms ? <p className="text-xs font-medium text-red-600">{errors.agreeTerms}</p> : null}

        <button
          type="submit"
          disabled={!isFormReady}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 font-bold text-slate-900 transition ${
            isFormReady
              ? "bg-cyan-400 shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:bg-cyan-300"
              : "cursor-not-allowed bg-cyan-200/80 text-slate-500 shadow-none"
          }`}
        >
          Tiếp tục
          <FaArrowRight className="text-sm" />
        </button>
        {!isFormReady ? (
          <p className="text-center text-xs font-medium text-red-600">
            Vui lòng nhập đủ thông tin, xác nhận mật khẩu đúng và đồng ý điều khoản để tiếp tục.
          </p>
        ) : null}
        {notice.message ? (
          <div
            className={`rounded-xl border px-4 py-3 text-sm ${
              notice.type === "warning" ? "border-amber-200 bg-amber-50 text-amber-700" : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <p>{notice.message}</p>
            {notice.type === "warning" ? (
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="mt-2 font-semibold text-cyan-600 transition hover:text-cyan-500"
              >
                Đi đến đăng nhập
              </button>
            ) : null}
          </div>
        ) : null}
      </form>

      <p className="mt-7 text-center text-sm text-slate-600">
        Đã có tài khoản?{" "}
        <button type="button" onClick={() => navigate("/login")} className="font-bold text-slate-900 transition hover:text-cyan-500">
          Đăng nhập
        </button>
      </p>

      <p className="mt-5 text-center text-xs text-slate-500">© 2026 Xe Đạp Market. All rights reserved.</p>
    </div>
  );
}
