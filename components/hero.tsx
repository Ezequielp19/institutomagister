import { StudyAnimation } from '@/components/study-animation'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-primary/5 to-background py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Preparación para Ingresos
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Soluciones cuidadas y responsables para la enseñanza
            </p>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Instituto Magister ofrece cursos de Matemáticas y Lengua para la preparación de ingresos al Politécnico, Superior y Colegio San José. Con 30 años de experiencia, contamos con docentes egresados de estas instituciones. Cupos reducidos, seguimiento personalizado e informes quincenales.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-8 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xl px-12 py-9 h-auto shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95"
            >
              <a
                href="https://wa.me/5493412720120?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20cursos%20de%20preparaci%C3%B3n%20del%20Instituto%20Magister"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-7 h-7" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-bold text-xl px-12 py-9 h-auto bg-transparent hover:bg-primary/5 transition-all"
            >
              <a href="#contact">Formulario de Contacto</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
