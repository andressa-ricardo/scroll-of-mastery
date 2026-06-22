import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <p className="mt-2 text-zinc-400 max-w-2xl">We offer targeted services to help your small business grow.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article key={s.id} className="rounded-xl border border-white/6 bg-white/2 p-6 transition-shadow hover:shadow-lg">
            <div className="flex items-center gap-4">
              <s.Icon className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-medium">{s.title}</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
