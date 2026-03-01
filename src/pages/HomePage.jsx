import { useEffect } from "react";
import axiosClient from "../services/axiosClient";

export default function HomePage() {
  useEffect(() => {
    axiosClient
      .get("/test")
      .then((response) => {
        console.log("API response:", response.data);
      })
      .catch((error) => {
        console.log("API error:", error.message);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Home Page 🚴
      </h1>
    </div>
  );
}