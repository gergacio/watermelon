import { WikiCard } from "@/components/ui/wiki-card";

export default function Home() {
  return (
    <div>
      <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6">
        <WikiCard
          title="Math 1"
          author="Georgi Gospodinov"
          date="Jan 2026"
          summary="Introduces fundamental mathematical concepts and their applications."
          href="/wiki/1"
        />
        <WikiCard
          title="Math 2"
          author="Petar Petrov"
          date="Jan 2026"
          summary="The second part of the Math series."
          href="/wiki/2"
        />
        <WikiCard
          title="Math 3"
          author="Stamen Stamenov"
          date="Jan 2026"
          summary="Georgi Gospodinov covers advanced mathematical concepts and their applications."
          href="/wiki/3"
        />
        <WikiCard
          title="Math 4"
          author="Georgi Gospodinov"
          date="Jan 2026"
          summary="Georgi Gospodinov explores advanced mathematical concepts and their applications."
          href="/wiki/4"
        />
      </main>
    </div>
  );
}
