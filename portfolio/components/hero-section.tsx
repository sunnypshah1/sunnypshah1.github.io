import { HeroButtons } from "@/components/hero-buttons"
import { siteConfig } from "@/config/site"

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr,300px] items-center gap-12 max-w-7xl mx-auto w-full">
      <div className="space-y-6 order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Hi, I'm <span className="text-purple-400">{siteConfig.name}</span>, a{" "}
          <span className="text-purple-400">Software Engineer</span>
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Computer Science and Mathematics student at the University of Michigan, passionate about building innovative
          solutions and exploring new technologies.
        </p>
        <HeroButtons />
      </div>
      <div className="relative w-[300px] justify-self-center lg:justify-self-end order-1 lg:order-2">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/20 rounded-full blur-3xl" />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1726168732807-JnOeBDRNqz1Vv0CnA3dd9lTBgLq8b3.jpeg"
          alt="Sunny Shah"
          className="rounded-lg border border-white/10 w-full relative z-10"
        />
      </div>
    </div>
  )
}

