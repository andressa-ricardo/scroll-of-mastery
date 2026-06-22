import { processSteps } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Our Process</h2>
      <p className="mt-2 text-zinc-400 max-w-2xl">A simple, proven process to take projects from idea to growth.</p>

      <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, idx) => (
          <li key={step.id} className="rounded-lg border border-white/6 bg-white/3 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">{idx + 1}</div>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="mt-1 text-sm text-zinc-300">{step.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
