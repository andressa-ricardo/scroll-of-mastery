import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/6 bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.jpeg" alt="Scroll of Mastery logo" width={36} height={36} />
          <div>
            <div className="font-semibold">Scroll of Mastery</div>
            <div className="text-sm text-zinc-400">Helping small businesses grow</div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <nav className="flex gap-4 text-sm text-zinc-300">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="text-sm text-zinc-500">© {new Date().getFullYear()} Scroll of Mastery</div>
        </div>
      </div>
    </footer>
  );
}
