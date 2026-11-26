import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, BellRing, BrainCircuit, MapPinned, ShieldCheck, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/app/Logo";
import hero from "@/assets/hero-city.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RoadGuard AI — Real-time accident detection & vehicle tracking" },
      {
        name: "description",
        content: "AI and GPS powered accident detection, live fleet tracking, emergency alerts and analytics in one console.",
      },
      { property: "og:title", content: "RoadGuard AI — Real-time accident detection" },
      { property: "og:description", content: "Detect crashes with sensor fusion and Random Forest AI, track vehicles live, alert contacts fast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: BrainCircuit, title: "Hybrid AI detection", text: "Sensor thresholds and a Random Forest classifier agree before anything is called an accident." },
  { icon: MapPinned, title: "Live GPS tracking", text: "Browser or device GPS on an OpenStreetMap view, with full movement history." },
  { icon: Siren, title: "Emergency workflow", text: "Countdown to cancel false alarms, then contacts are notified with exact coordinates." },
  { icon: Activity, title: "Analytics & reports", text: "Monthly trends, severity mix, hotspots and vehicle-wise reports with CSV export." },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost">
              <Link to="/auth">Sign in</Link>
            </Button>
            <Button asChild variant="hero">
              <Link to="/dashboard">Open console</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Night highway interchange with GPS tracking overlays" width={1600} height={1008} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-40 md:pt-48">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary-glow">
            <span className="status-dot live text-success" /> Sensor fusion · Random Forest · GPS
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Every second counts <br />
            <span className="text-gradient">after a crash.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            RoadGuard AI watches vehicle sensors and GPS in real time, detects accidents with multi-signal AI, and gets location details to the people who need them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="xl" variant="hero">
              <Link to="/dashboard">
                <ShieldCheck /> Launch console
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline">
              <Link to="/detection">
                <BellRing /> Try the demo lab
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="panel p-6">
            <f.icon className="size-6 text-primary-glow" />
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>
      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        RoadGuard AI · Final-year project · Maps © OpenStreetMap contributors
      </footer>
    </div>
  );
}
