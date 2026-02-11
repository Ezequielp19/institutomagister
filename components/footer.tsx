import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { LegalModal } from './legal-modal'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Instituto Magister</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Preparación para ingresos al Politécnico, Superior y Colegio San José. 30 años de experiencia en Rosario, Argentina.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Políticas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <LegalModal
                  type="terms"
                  trigger={
                    <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left outline-none">
                      Términos y Condiciones
                    </button>
                  }
                />
              </li>
              <li>
                <LegalModal
                  type="privacy"
                  trigger={
                    <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left outline-none">
                      Política de Privacidad
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/magister.ingresos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/magister.ingresos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Instituto Magister - División Ingresos. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              Preparación para ingresos
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
