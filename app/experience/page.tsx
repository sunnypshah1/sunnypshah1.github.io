import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { experiences } from "@/config/experience"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Experience</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Work that shaped how I build.</h1>
            <div className="mt-8 overflow-hidden rounded-md border border-border">
              <Image
                src="/photos/outdoor-friend.png"
                alt="Sunny Shah outdoors"
                width={1049}
                height={1026}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {experiences.map((exp) => (
              <article key={exp.company} className="grid gap-5 py-8 sm:grid-cols-[120px_1fr]">
                <div className="relative h-16 w-16 overflow-hidden rounded-md border border-border bg-white p-2">
                  <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain p-2" />
                </div>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-semibold">{exp.company}</h2>
                      <p className="text-primary">{exp.title}</p>
                    </div>
                    <div className="text-sm text-muted-foreground sm:text-right">
                      <p>{exp.date}</p>
                      {exp.location && <p>{exp.location}</p>}
                    </div>
                  </div>
                  <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
