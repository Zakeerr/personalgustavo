import { ReelVideo } from "@/components/reel-video"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { VIDEOS } from "@/lib/site-config"

export function Social() {
  return (
    <section id="redes" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-3xl" />
      <div className="site-container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Redes sociais"
            title={
              <>
                Conteúdo que transforma <span className="text-primary">treino em resultado</span>
              </>
            }
            description="Treinos, orientações e bastidores para ajudar você a entender melhor o processo e manter a constância."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-4">
          {VIDEOS.map((video, index) => (
            <Reveal key={video.instagram} delay={(index % 4) * 70} className="w-full">
              <ReelVideo
                src={video.src}
                poster={video.poster}
                instagram={video.instagram}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
