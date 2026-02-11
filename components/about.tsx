import { Card } from '@/components/ui/card'

export function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quiénes Somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestra historia y los valores que nos guían
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <Card className="p-6 md:p-8 border-border/50 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Historia</h3>
            <p className="text-muted-foreground leading-relaxed">
              A comienzos de la década de 1990 iniciamos en Rosario la docencia particular de apoyo, abarcando los tres niveles educativos: primario, secundario y universitario. Durante la pandemia incorporamos las clases online. Hoy retomamos el trabajo cara a cara con nuestros alumnos, con el objetivo de alcanzar juntos los resultados propuestos.
            </p>
          </Card>

          <Card className="p-6 md:p-8 border-border/50 hover:border-primary/50 transition-colors">
            <h3 className="text-xl font-bold text-foreground mb-4">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro trabajo se apoya en la vocación, el compromiso educativo y la responsabilidad. Buscamos acompañar de manera cercana y constante, con una clara orientación a resultados, respetando los tiempos y necesidades individuales para favorecer un aprendizaje efectivo.
            </p>
          </Card>
        </div>

        <Card className="p-6 md:p-8 border-border/50 hover:border-primary/50 transition-colors mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📚</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Cursos Especializados</h4>
                <p className="text-sm text-muted-foreground">
                  Matemáticas y Lengua (Idioma Nacional) diseñados específicamente para ingresos
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👨‍🎓</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Docentes Egresados</h4>
                <p className="text-sm text-muted-foreground">
                  Profesores egresados del Politécnico y Contadores
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Cupos Reducidos</h4>
                <p className="text-sm text-muted-foreground">
                  Seguimiento personalizado para cada estudiante
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Informes Quincenales</h4>
                <p className="text-sm text-muted-foreground">
                  Seguimiento permanente del progreso académico
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 md:p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-border/50">
          <h3 className="text-2xl font-bold text-foreground mb-4">Por Qué Elegirnos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-muted-foreground">Años de experiencia</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">Mañana y Tarde</p>
              <p className="text-muted-foreground">Horarios flexibles</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">Nivelación</p>
              <p className="text-muted-foreground">Clases de apoyo personalizadas</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
