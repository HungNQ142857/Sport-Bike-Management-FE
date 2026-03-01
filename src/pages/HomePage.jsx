import { FaShoppingCart } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      
      <FaShoppingCart className="text-6xl text-green-600 mb-4" />

      <h1 className="text-4xl font-bold text-blue-600">
        Home Page 🚴
      </h1>

    </div>
  );
}