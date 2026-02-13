import { StudyAnimation } from '@/components/study-animation'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-primary/5 to-background py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-7xl font-bold text-foreground leading-tight text-balance">
              Preparación para Ingresos
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-2xl mx-auto">
              Soluciones cuidadas y responsables para la enseñanza
            </p>
          </div>

          <div className="text-left space-y-4 max-w-2xl mx-auto bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-primary/10 shadow-lg">
            <p className="text-lg md:text-xl font-bold text-primary mb-2">Nuestro instituto ofrece:</p>
            <ul className="text-left space-y-3 text-muted-foreground text-base md:text-lg">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Cursos de Matemáticas y Lengua (Idioma Nacional)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Cursos organizados por egresados del Politécnico y Contadores</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Treinta años de experiencia en la preparación de materias y la tutoría de alumnos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Seguimiento permanente con informes quincenales de los alumnos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Clases de nivelación para cumplir con los mínimos requeridos para preparar el examen de ingreso.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Cupos reducidos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Horarios de cursado por la mañana y por la tarde.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-8 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-9 h-auto shadow-xl shadow-accent/20 transition-all hover:scale-105 active:scale-95"
            >
              <a
                href="https://wa.me/5493412720120?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20cursos%20de%20preparaci%C3%B3n%20del%20Instituto%20Magister"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-bold text-lg md:text-xl px-8 md:px-12 py-6 md:py-9 h-auto bg-transparent hover:bg-primary/5 transition-all text-foreground"
            >
              <a href="#contact">Formulario de Contacto</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
