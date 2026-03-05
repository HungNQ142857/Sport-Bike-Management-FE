import {
    FiUsers,
    FiShoppingBag,
    FiCheckCircle,
    FiAlertTriangle,
    FiCheck,
    FiMoreVertical,
} from "react-icons/fi";

/* ── Mock Data ── */
const stats = [
    {
        icon: FiUsers,
        color: "blue",
        label: "Tổng người dùng",
        value: "12,840",
        change: "+12%",
        up: true,
    },
    {
        icon: FiShoppingBag,
        color: "orange",
        label: "Tin đăng hiện thị",
        value: "3,420",
        change: "+5%",
        up: true,
    },
    {
        icon: FiCheckCircle,
        color: "green",
        label: "Giao dịch thành công",
        value: "856",
        change: "+8%",
        up: true,
    },
    {
        icon: FiAlertTriangle,
        color: "red",
        label: "Khiếu nại đang xử lý",
        value: "12",
        change: "-2%",
        up: false,
    },
];

const chartData = [
    { label: "Tháng 1", height: 38, cls: "chart-bar-1" },
    { label: "Tháng 2", height: 55, cls: "chart-bar-2" },
    { label: "Tháng 3", height: 45, cls: "chart-bar-3" },
    { label: "Tháng 4", height: 65, cls: "chart-bar-4" },
    { label: "Tháng 5", height: 85, cls: "chart-bar-5" },
    { label: "Tháng 6", height: 72, cls: "chart-bar-6" },
];

const listings = [
    {
        id: 1,
        name: "Trek Domane SLR 7",
        price: "12.500.000 đ",
        oldPrice: null,
        seller: "Minh Trần",
        img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=120&h=120&fit=crop",
    },
    {
        id: 2,
        name: "Giant Escape 3 Disc",
        price: "8.200.000 đ",
        oldPrice: null,
        seller: "Hoàng Nam",
        img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=120&h=120&fit=crop",
    },
    {
        id: 3,
        name: "Specialized Allez Sprint",
        price: "45.000.000 đ",
        oldPrice: null,
        seller: "Quốc Huy",
        img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=120&h=120&fit=crop",
    },
];

const users = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        email: "an.nguyen@email.com",
        avatar: "NA",
        avatarColor: "linear-gradient(135deg, #a78bfa, #818cf8)",
        role: "seller",
        roleLabel: "Người bán",
        status: "verified",
        statusLabel: "Đã xác minh",
        date: "12/05/2024",
    },
    {
        id: 2,
        name: "Trần Thị Bình",
        email: "binh.tran@email.com",
        avatar: "TB",
        avatarColor: "linear-gradient(135deg, #f472b6, #ec4899)",
        role: "buyer",
        roleLabel: "Người mua",
        status: "verified",
        statusLabel: "Đã xác minh",
        date: "18/06/2024",
    },
    {
        id: 3,
        name: "Phạm Quốc Cường",
        email: "cuong.pham@email.com",
        avatar: "PC",
        avatarColor: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
        role: "seller",
        roleLabel: "Người bán",
        status: "pending",
        statusLabel: "Chờ duyệt",
        date: "02/07/2024",
    },
    {
        id: 4,
        name: "Lê Hoàng Dũng",
        email: "dung.le@email.com",
        avatar: "LD",
        avatarColor: "linear-gradient(135deg, #fb923c, #f97316)",
        role: "admin",
        roleLabel: "Quản trị",
        status: "verified",
        statusLabel: "Đã xác minh",
        date: "05/01/2024",
    },
    {
        id: 5,
        name: "Hoàng Mai Linh",
        email: "linh.hoang@email.com",
        avatar: "HL",
        avatarColor: "linear-gradient(135deg, #34d399, #10b981)",
        role: "buyer",
        roleLabel: "Người mua",
        status: "blocked",
        statusLabel: "Đã khóa",
        date: "20/08/2024",
    },
];

export default function AdminDashboard() {
    return (
        <>
            {/* ── Stats ── */}
            <div className="stats-grid">
                {stats.map((s, i) => (
                    <div className="stat-card" key={i}>
                        <div className="stat-card-header">
                            <div className={`stat-card-icon ${s.color}`}>
                                <s.icon />
                            </div>
                            <span className={`stat-card-change ${s.up ? "up" : "down"}`}>
                                {s.change}
                            </span>
                        </div>
                        <div className="stat-card-value">{s.value}</div>
                        <div className="stat-card-label">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* ── Chart + Listings ── */}
            <div className="dashboard-grid">
                {/* Revenue Chart */}
                <div className="chart-card">
                    <div className="chart-card-header">
                        <h3>Biểu đồ doanh thu phí dịch vụ</h3>
                        <span className="period-badge">6 tháng qua</span>
                    </div>
                    <div className="chart-bars">
                        {chartData.map((bar, i) => (
                            <div className="chart-bar-wrapper" key={i}>
                                <div
                                    className={`chart-bar ${bar.cls}`}
                                    style={{ height: `${bar.height}%` }}
                                    title={bar.label}
                                />
                                <span className="chart-bar-label">{bar.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="chart-total">
                        <span className="amount">450.000.000đ</span>
                        <span className="growth">+15% so với tháng trước</span>
                    </div>
                </div>

                {/* Listings */}
                <div className="listings-card">
                    <div className="listings-card-header">
                        <h3>Duyệt tin mới</h3>
                        <a className="view-all" href="#all">
                            Tất cả
                        </a>
                    </div>
                    {listings.map((item) => (
                        <div className="listing-item" key={item.id}>
                            <img
                                className="listing-item-img"
                                src={item.img}
                                alt={item.name}
                            />
                            <div className="listing-item-info">
                                <h4>{item.name}</h4>
                                <div className="price">
                                    {item.price}
                                    {item.oldPrice && (
                                        <span className="old-price">{item.oldPrice}</span>
                                    )}
                                </div>
                                <div className="seller">BỞI: {item.seller.toUpperCase()}</div>
                            </div>
                            <button className="listing-approve-btn" title="Duyệt">
                                <FiCheck />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Users Table ── */}
            <div className="users-card">
                <div className="users-card-header">
                    <h3>Quản lý người dùng mới nhất</h3>
                    <div className="users-card-actions">
                        <button className="filter-btn">Lọc theo vai trò</button>
                        <button className="export-btn">Xuất dữ liệu</button>
                    </div>
                </div>

                <table className="users-table">
                    <thead>
                        <tr>
                            <th>Người dùng</th>
                            <th>Vai trò</th>
                            <th>Trạng thái</th>
                            <th>Ngày tham gia</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>
                                    <div className="user-cell">
                                        <div
                                            className="user-avatar"
                                            style={{ background: u.avatarColor }}
                                        >
                                            {u.avatar}
                                        </div>
                                        <div>
                                            <div className="user-name">{u.name}</div>
                                            <div className="user-email">{u.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`role-badge ${u.role}`}>
                                        {u.roleLabel}
                                    </span>
                                </td>
                                <td>
                                    <span className={`status-badge ${u.status}`}>
                                        <span className="status-dot" />
                                        {u.statusLabel}
                                    </span>
                                </td>
                                <td>{u.date}</td>
                                <td>
                                    <button className="action-menu-btn" title="Hành động">
                                        <FiMoreVertical />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
