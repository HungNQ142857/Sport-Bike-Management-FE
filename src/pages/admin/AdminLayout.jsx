import { Outlet, NavLink } from "react-router-dom";
import {
    FiHome,
    FiUsers,
    FiFileText,
    FiRepeat,
    FiBarChart2,
    FiAlertCircle,
    FiSettings,
    FiSearch,
    FiBell,
    FiPlus,
    FiLogOut,
} from "react-icons/fi";
import { GiCycling } from "react-icons/gi";
import "./admin.css";

const navItems = [
    { to: "/admin", icon: FiHome, label: "Tổng quan", end: true },
    { to: "/admin/users", icon: FiUsers, label: "Quản lý người dùng" },
    {
        to: "/admin/listings",
        icon: FiFileText,
        label: "Duyệt tin đăng",
        badge: 12,
    },
    { to: "/admin/transactions", icon: FiRepeat, label: "Theo dõi giao dịch" },
    { to: "/admin/revenue", icon: FiBarChart2, label: "Thống kê doanh thu" },
    {
        to: "/admin/reports",
        icon: FiAlertCircle,
        label: "Báo cáo & Khiếu nại",
    },
];

const systemItems = [
    { to: "/admin/settings", icon: FiSettings, label: "Cài đặt hệ thống" },
];

export default function AdminLayout() {
    return (
        <div className="admin-root">
            {/* ── Sidebar ── */}
            <aside className="admin-sidebar">
                <div className="admin-sidebar-logo">
                    <div className="logo-icon">
                        <GiCycling />
                    </div>
                    <div className="logo-text">
                        <h2>VeloAdmin</h2>
                        <span>Marketplace System</span>
                    </div>
                </div>

                <nav className="admin-nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `admin-nav-item ${isActive ? "active" : ""}`
                            }
                        >
                            <span className="nav-icon">
                                <item.icon />
                            </span>
                            {item.label}
                            {item.badge && <span className="nav-badge">{item.badge}</span>}
                        </NavLink>
                    ))}

                    <div className="admin-nav-section-label">Hệ thống</div>

                    {systemItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `admin-nav-item ${isActive ? "active" : ""}`
                            }
                        >
                            <span className="nav-icon">
                                <item.icon />
                            </span>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="admin-sidebar-footer">
                    <div className="avatar">LQ</div>
                    <div className="user-info">
                        <h4>Lê Minh Quân</h4>
                        <span>Super Admin</span>
                    </div>
                    <span className="logout-btn" title="Đăng xuất">
                        <FiLogOut />
                    </span>
                </div>
            </aside>

            {/* ── Main Area ── */}
            <div className="admin-main">
                <header className="admin-header">
                    <div className="admin-header-left">
                        <h1>Tổng quan hệ thống</h1>
                        <p>Chào mừng quay trở lại, đây là những gì đang diễn ra hôm nay.</p>
                    </div>

                    <div className="admin-header-right">
                        <div className="admin-search">
                            <FiSearch className="search-icon" />
                            <input type="text" placeholder="Tìm kiếm nhanh..." />
                        </div>

                        <button className="admin-header-btn" title="Thông báo">
                            <FiBell />
                            <span className="notif-dot" />
                        </button>

                        <button className="admin-create-btn">
                            <FiPlus size={16} />
                            Tạo báo cáo
                        </button>
                    </div>
                </header>

                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
