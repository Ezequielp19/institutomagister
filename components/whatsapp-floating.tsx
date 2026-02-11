'use client'

import { X, Send } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-8 h-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  // Trigger pulse animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShouldAnimate(true)
      setTimeout(() => setShouldAnimate(false), 2000)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const phoneNumber = '5493412720120'
  const message = 'Hola, quisiera consultar sobre los cursos del Instituto Magister'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-3rem)] sm:w-[320px] max-w-[320px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 zoom-in-95 duration-300">
          <div className="bg-[#075e54] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <WhatsAppIcon />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-sm">Instituto Magister</h3>
                <p className="text-[10px] opacity-80">En línea ahora</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcd2de4.png')] bg-repeat bg-opacity-10 min-h-[100px] flex items-end">
            <div className="bg-white dark:bg-slate-800 p-3 rounded-lg rounded-bl-none shadow-sm max-w-[90%] border border-slate-100 dark:border-slate-700">
              <p className="text-sm text-slate-800 dark:text-slate-200">
                ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
              </p>
              <span className="text-[10px] text-slate-400 block text-right mt-1">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/50">
            <Button
              asChild
              className="w-full bg-[#25D366] hover:bg-[#128c7e] text-white font-bold py-6 rounded-xl shadow-lg shadow-green-500/20 group transition-all duration-300 active:scale-95"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Iniciar Chat
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <div className="relative">
        {/* Badge / Tooltip hint */}
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg shadow-md border border-slate-100 dark:border-slate-800 text-xs font-semibold whitespace-nowrap animate-bounce pointer-events-none">
            ¿Dudas? Escribinos
            <div className="absolute -bottom-1 right-5 w-2 h-2 bg-white dark:bg-slate-900 rotate-45 border-r border-b border-slate-100 dark:border-slate-800"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-16 h-16 bg-[#25D366] hover:bg-[#128c7e] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 z-50
            ${shouldAnimate ? 'animate-whatsapp-pulse' : ''}
          `}
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon />

          {/* Notification Dot */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
        </button>
      </div>
    </div>
  )
}
