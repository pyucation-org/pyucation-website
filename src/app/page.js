import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 bg-gray-900">
      <div className=" flex max-w-6xl h-auto p-24">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="font-bold text-5xl">pyucation</h1>
          <p className="text-gray-500 text-lg">
            Weiterbildung und Beratung in Python: praxisorientiert,
            projektbasiert und individuell gestaltbar
          </p>
          <div className="flex flex-row gap-8">
            <Link href="/services">
              <button className="rounded-lg bg-blue-600 py-3 px-6 text-xl hover:bg-blue-700 transition-colors">
                Dienstleistungen
              </button>
            </Link>
            <Link href="/contact">
              <button className="rounded-lg bg-opacity-0 py-3 px-6 text-xl border-2 hover:text-black hover:bg-opacity-1 hover:bg-white transition-colors">
                Kontakt
              </button>
            </Link>
          </div>
        </div>

        <Image
          className="flex relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/logo_notext.svg"
          alt="Next.js Logo"
          width={600}
          height={600}
          priority
        />
      </div>
    </main>
  );
}
