import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.jpeg" alt="Scroll of Mastery logo" width={48} height={48} />
              <span className="text-sm text-white/80">Scroll of Mastery</span>
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Helping Small Businesses Grow With Strategy, Websites & Digital Marketing
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-300">
              We help small businesses build a modern digital presence, improve positioning, and attract more customers through strategy, branding, and performance-driven websites.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#contact" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 font-medium shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Start Your Project
              </Link>
              <Link href="#services" className="rounded-full border border-white/8 px-5 py-3 text-sm hover:bg-white/2 focus:outline-none focus:ring-2 focus:ring-blue-400">
                View Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none aspect-video w-full rounded-2xl bg-gradient-to-tr from-blue-800/30 via-transparent to-purple-800/20 p-1">
              <div className="h-64 w-full rounded-xl bg-gradient-to-b from-white/2 to-white/3 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
