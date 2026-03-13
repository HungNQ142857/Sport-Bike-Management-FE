import RegisterFormCard from "./components/RegisterFormCard";

const meshBackgroundStyle = {
  backgroundImage: `
    radial-gradient(at 0% 0%, hsla(187, 85%, 85%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(150, 80%, 90%, 1) 0, transparent 50%),
    radial-gradient(at 100% 100%, hsla(180, 70%, 85%, 1) 0, transparent 50%),
    radial-gradient(at 0% 100%, hsla(190, 80%, 90%, 1) 0, transparent 50%)
  `,
  backgroundColor: "#ffffff",
  backgroundAttachment: "fixed",
};

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8" style={meshBackgroundStyle}>
      <RegisterFormCard />
    </main>
  );
}
