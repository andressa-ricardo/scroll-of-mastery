import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/20 p-8 text-center">
        <h3 className="text-2xl font-semibold">Ready to take your business to the next level?</h3>
        <p className="mt-3 text-zinc-300">Book a consultation and get a tailored plan for growth.</p>
        <div className="mt-6 flex justify-center">
          <Link href="#contact" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium">Book a Consultation</Link>
        </div>
      </div>
    </section>
  );
}
