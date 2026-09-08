import GymNavbar from "@/components/nevbar";
import Homeset from "@/components/home";
import {
  
  Dumbbell,
  
  Infinity,
  
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <GymNavbar />

      <section id="home" className="flex min-h-screen items-center justify-center">
        <Homeset />
      </section>

      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-black">
              <img src={"/download.png"}></img>
            </div>

            <span className="text-xs font-bold tracking-[0.15em]">FITZONE</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-white/20">
            <Infinity size={13} />
            <span>KEEP MOVING FORWARD</span>
          </div>
        </div>
      </footer>
    </main>
  );
}