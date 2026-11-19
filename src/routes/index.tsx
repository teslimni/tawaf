import { createFileRoute } from "@tanstack/react-router";
import { Header, Hero, Why, Ladder, Journey, Governance, Impact, PathFinder, Partners, People, Join } from "@/components/tawaf/Sections";
import { useReveal } from "@/components/tawaf/hooks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The TAWAF Collective · Islamic Venture Philanthropy" },
      { name: "description", content: "Turning Zakat, Sadaqah and Islamic finance into enterprises, livelihoods and assets across Nigeria and West Africa." },
      { property: "og:title", content: "The TAWAF Collective" },
      { property: "og:description", content: "Giving that does not just relieve hardship. It ends it." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main>
      <Header />
      <Hero />
      <Why />
      <Ladder />
      <Journey />
      <Governance />
      <Impact />
      <PathFinder />
      <Partners />
      <People />
      <Join />
    </main>
  );
}
