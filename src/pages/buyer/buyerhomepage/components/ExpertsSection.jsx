import { FaCheckCircle, FaUserCircle } from "react-icons/fa";

export default function ExpertsSection({ containerClass, experts, scrollTo }) {
  return (
    <section className="bg-cyan-50 py-14">
      <div className={containerClass}>
        <h2 className="text-center text-3xl font-bold">Đội ngũ kiểm định viên</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Đội ngũ chuyên gia có kinh nghiệm thực tế thẩm định chi tiết để bảo vệ bạn.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {experts.map((person) => (
            <article key={person.name} className="rounded-3xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-3xl text-cyan-700">
                <FaUserCircle />
              </div>
              <h3 className="text-2xl font-bold">{person.name}</h3>
              <p className="mt-1 text-cyan-600">{person.role}</p>
              <p className="mt-4 italic text-slate-600">"{person.quote}"</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => scrollTo("process")}
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            <FaCheckCircle className="text-sm" />
            Tìm hiểu quy trình kiểm định
          </button>
        </div>
      </div>
    </section>
  );
}
