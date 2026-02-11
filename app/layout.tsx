import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { WhatsAppFloating } from '@/components/whatsapp-floating'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '',
  description: 'Más de 30 años de excelencia preparando alumnos para el Politécnico, Superior de Comercio y San José en Rosario. Cursos de Matemáticas y Lengua con seguimiento personalizado.',
  keywords: ['ingresos rosario', 'politecnico rosario', 'superior de comercio', 'colegio san jose', 'preparacion ingresos', 'clases de apoyo rosario', 'instituto magister'],
  authors: [{ name: 'Instituto Magister' }],
  creator: 'Instituto Magister',
  publisher: 'Instituto Magister',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Instituto Magister | Preparación para Ingresos',
    description: 'Preparación integral para los ingresos más exigentes de Rosario. 30 años de trayectoria.',
    url: 'https://instituto-magister.com.ar', // Reemplazar con URL real
    siteName: 'Instituto Magister',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instituto Magister | Ingresos Rosario',
    description: 'Cursos de preparación para el Politécnico, Superior y San José.',
  },
  icons: {
    icon: '/logo-removebg-preview.png',
    shortcut: '/logo-removebg-preview.png',
    apple: '/logo-removebg-preview.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Instituto Magister",
              "url": "https://instituto-magister.com.ar",
              "logo": "https://instituto-magister.com.ar/logo-removebg-preview.png",
              "description": "Preparación para ingresos al Politécnico, Superior de Comercio y San José en Rosario desde hace 30 años.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rosario",
                "addressRegion": "Santa Fe",
                "addressCountry": "AR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+54-9-3412-720120",
                "contactType": "customer service"
              }
            })
          }}
        />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  )
}
