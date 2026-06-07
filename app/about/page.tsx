import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site"

const skillGroups = [
  ["Languages", siteConfig.skills.languages],
  ["Frameworks", siteConfig.skills.frameworks],
  ["Developer Tools", siteConfig.skills.tools],
  ["Libraries", siteConfig.skills.libraries],
] as const

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
          <section>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">About</p>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">I like hard systems and clear interfaces.</h1>
            <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
              As a software engineer and mathematics student, I enjoy solving complex problems and turning them into
              useful products. I am especially interested in distributed systems, machine learning, AI tooling, and
              infrastructure that feels simple from the user side.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
              Outside of technical work, I play poker, run, cook, and spend time with friends and family. Those parts of
              my life keep me practical, competitive, and grounded.
            </p>
          </section>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-md border border-border">
              <Image
                src="/photos/friend-night.png"
                alt="Sunny Shah with a friend"
                width={1040}
                height={1037}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="mt-10 overflow-hidden rounded-md border border-border">
              <Image
                src="/photos/outdoor-friend.png"
                alt="Sunny Shah outdoors"
                width={1049}
                height={1026}
                className="aspect-square w-full object-cover"
              />
            </div>
            <div className="col-span-2 overflow-hidden rounded-md border border-border">
              <Image
                src="/photos/grand-canyon.png"
                alt="Sunny Shah at the Grand Canyon"
                width={1031}
                height={1035}
                className="aspect-[2/1] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <section className="mt-16 grid gap-8 border-t border-border py-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Education</p>
            <h2 className="mt-3 text-3xl font-semibold">{siteConfig.education.university}</h2>
          </div>
          <div>
            <p className="text-xl font-medium">{siteConfig.education.degree}</p>
            <p className="mt-2 text-muted-foreground">
              {siteConfig.education.location} - {siteConfig.education.graduation}
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.education.courses.map((course) => (
                <p key={course} className="border-t border-border py-2 text-sm text-muted-foreground">
                  {course}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border py-12 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Skills</p>
            <h2 className="mt-3 text-3xl font-semibold">Technical stack</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map(([label, skills]) => (
              <div key={label}>
                <h3 className="font-medium">{label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
