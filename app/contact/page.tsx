import Image from "next/image"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { siteConfig } from "@/config/site"

const contactItems = [
  { label: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Mail },
  { label: siteConfig.phone, href: `tel:${siteConfig.phone}`, icon: Phone },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.links.github, icon: Github },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_420px]">
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">Contact</p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight">Let&apos;s connect.</h1>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            I am always open to software engineering roles, technical collaborations, and conversations about systems,
            AI, and product engineering.
          </p>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {contactItems.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-4 py-5 text-lg transition hover:text-primary"
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  {item.label}
                </a>
              )
            })}
          </div>
        </section>
        <div className="overflow-hidden rounded-md border border-border">
          <Image
            src="/photos/group-formal.png"
            alt="Sunny Shah with friends"
            width={1049}
            height={1045}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
