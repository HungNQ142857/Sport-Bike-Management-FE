import { FaBicycle, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function BuyerFooter({ containerClass }) {
  const linkHoverClass = "cursor-pointer transition hover:text-cyan-400";

  return (
    <footer id="footer" className="border-t border-slate-200 bg-white">
      <div className={`${containerClass} grid gap-8 py-12 md:grid-cols-12`}>
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 font-bold">
            <div className="rounded-lg bg-cyan-400 p-2 text-slate-900">
              <FaBicycle />
            </div>
            <span>XeĐạp Market</span>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Nền tảng thương mại điện tử chuyên biệt cho xe đạp thể thao cũ hàng đầu Việt Nam. Kết nối đam mê, lan
            tỏa lối sống xanh.
          </p>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold">Hỗ trợ khách hàng</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className={linkHoverClass}>Hướng dẫn mua hàng</li>
            <li className={linkHoverClass}>Hướng dẫn bán xe</li>
            <li className={linkHoverClass}>Chính sách kiểm định</li>
            <li className={linkHoverClass}>Câu hỏi thường gặp</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-bold">Về chúng tôi</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className={linkHoverClass}>Giới thiệu công ty</li>
            <li className={linkHoverClass}>Tin tức & Blog</li>
            <li className={linkHoverClass}>Chính sách bảo mật</li>
            <li className={linkHoverClass}>Điều khoản sử dụng</li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold">Liên hệ</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-cyan-600" />
              Tòa nhà TechHub, Đường số 7, Quận 1, TP. Hồ Chí Minh
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-cyan-600" />
              1900 1234 (8h00 - 21h00)
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-600" />
              support@xedapmarket.vn
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © 2026 XeĐạp Market. All rights reserved.
      </div>
    </footer>
  );
}
