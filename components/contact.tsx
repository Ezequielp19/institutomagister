'use client'

import React from "react"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    const email = 'ingresos.politecnico@gmail.com'
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construir el mensaje para WhatsApp
    const mensaje = `Hola, soy ${formData.name}. ${formData.message} Mi email es: ${formData.email}${formData.phone ? ` y mi teléfono es: ${formData.phone}` : ''}`
    const mensajeEncoded = encodeURIComponent(mensaje)

    // Redirigir a WhatsApp
    window.open(`https://wa.me/5493412720120?text=${mensajeEncoded}`, '_blank')

    // Limpiar formulario
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Comunícate con nosotros por el medio que prefieras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            onClick={() => window.location.href = 'tel:+5493412720120'}
            className="block group cursor-pointer"
          >
            <Card className="p-6 text-center border-border/50 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Teléfono</h3>
              <p className="text-muted-foreground mb-2">+54 9 3412-720120</p>
              <span className="text-primary hover:underline text-sm font-medium">
                Llamar ahora
              </span>
            </Card>
          </div>

          <div
            onClick={handleCopyEmail}
            className="block group cursor-pointer"
          >
            <Card className="p-6 text-center border-border/50 group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-2">ingresos.politecnico@gmail.com</p>
              <span className={`text-sm font-medium transition-colors duration-300 ${copied ? 'text-green-500 font-bold' : 'text-primary hover:underline'}`}>
                {copied ? '¡Copiado!' : 'Click para copiar correo'}
              </span>

              {copied && (
                <div className="absolute inset-0 bg-green-500/5 flex items-center justify-center animate-in fade-in duration-300">
                  <span className="bg-green-500 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-full shadow-sm">
                    Copiado al portapapeles
                  </span>
                </div>
              )}
            </Card>
          </div>

          <div className="block">
            <Card className="p-6 text-center border-border/50 shadow-sm">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Ubicación</h3>
              <p className="text-muted-foreground text-sm">
                Rosario<br />
                Santa Fe, Argentina
              </p>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <Card className="p-8 border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6">Formulario de Contacto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre completo
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(011) 1234-5678"
                  className="bg-background border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={4}
                  required
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
              >
                Enviar por WhatsApp
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Horarios de Atención</h4>
                </div>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 shadow-sm">
              <h4 className="font-bold text-foreground mb-3">¿Tienes dudas?</h4>
              <p className="text-muted-foreground text-sm">
                Nuestro equipo de admisiones está listo para responder todas tus preguntas sobre
                nuestros programas, aranceles y proceso de inscripción.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
