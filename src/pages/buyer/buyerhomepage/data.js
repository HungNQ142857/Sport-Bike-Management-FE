import {
  FaBicycle,
  FaBolt,
  FaCheckCircle,
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaMountain,
  FaRoad,
  FaShieldAlt,
  FaTools,
  FaTruck,
  FaWallet,
} from "react-icons/fa";

export const categories = [
  { id: "road", title: "Road Bike", subtitle: "Xe đạp đua", icon: FaRoad },
  { id: "mtb", title: "MTB", subtitle: "Xe đạp địa hình", icon: FaMountain },
  { id: "gravel", title: "Gravel", subtitle: "Xe đạp đường trường", icon: FaMapMarkedAlt },
  { id: "ebike", title: "E-bike", subtitle: "Xe đạp trợ lực", icon: FaBolt },
];

export const coreValues = [
  {
    title: "Thanh toán an toàn",
    desc: "Giao dịch bảo mật 100%, bảo vệ người mua.",
    icon: FaShieldAlt,
  },
  {
    title: "Kiểm định độc lập",
    desc: "Kỹ thuật viên chuyên nghiệp giám định xe.",
    icon: FaClipboardCheck,
  },
  {
    title: "Uy tín hàng đầu",
    desc: "Cộng đồng tin cậy với hàng ngàn đánh giá tốt.",
    icon: FaCheckCircle,
  },
  {
    title: "Giao hàng tận nơi",
    desc: "Hỗ trợ vận chuyển an toàn trên toàn quốc.",
    icon: FaTruck,
  },
];

export const bikes = [
  {
    id: 1,
    name: "Giant TCR Advanced 2",
    brand: "Giant",
    type: "road",
    condition: "Carbon",
    size: "S",
    price: 18500000,
    oldPrice: 21000000,
    rating: 4.9,
    seller: "Minh Trần",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Specialized Rockhopper",
    brand: "Specialized",
    type: "mtb",
    condition: "Hardtail",
    size: "M",
    price: 12200000,
    oldPrice: 14000000,
    rating: 4.8,
    seller: "Linh Nguyễn",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Trek Domane SL5",
    brand: "Trek",
    type: "road",
    condition: "Carbon",
    size: "52",
    price: 45000000,
    oldPrice: 50000000,
    rating: 5,
    seller: "Hoàng Nam",
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    name: "Cannondale CAAD13",
    brand: "Cannondale",
    type: "gravel",
    condition: "Nhôm",
    size: "54",
    price: 24500000,
    oldPrice: 28000000,
    rating: 4.7,
    seller: "Thùy Vy",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=80",
  },
];

export const flowSteps = [
  {
    title: "Chọn xe",
    text: "Dễ dàng tìm kiếm và lựa chọn chiếc xe ưng ý nhất.",
    icon: FaBicycle,
  },
  {
    title: "Thanh toán",
    text: "Thanh toán an toàn qua ví ký quỹ XeĐạp Market.",
    icon: FaWallet,
  },
  {
    title: "Giao hàng",
    text: "Đối tác vận chuyển lấy xe và kiểm định trước khi giao.",
    icon: FaTruck,
  },
  {
    title: "Xác nhận",
    text: "Kiểm tra xe trực tiếp tại nhà trước khi nhận.",
    icon: FaClipboardCheck,
  },
  {
    title: "Hoàn tất",
    text: "Tiền được chuyển cho người bán sau khi bạn hài lòng.",
    icon: FaCheckCircle,
  },
];

export const experts = [
  {
    name: "Kỹ sư Hoàng",
    role: "Chuyên gia Road Bike",
    quote: "Tôi kiểm tra kỹ từng mối hàn và chi tiết carbon để đảm bảo an toàn.",
  },
  {
    name: "Chuyên gia Minh",
    role: "Chuyên gia MTB & Gravel",
    quote: "Kinh nghiệm 10 năm bảo dưỡng phuộc và hệ thống truyền động xe địa hình.",
  },
  {
    name: "Kỹ thuật viên Lan",
    role: "Chuyên gia E-bike",
    quote: "Đánh giá chính xác tình trạng pin và động cơ để người mua yên tâm.",
  },
];
