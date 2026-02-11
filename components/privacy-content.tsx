'use client'

import React from 'react'

export function PrivacyContent() {
    return (
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Recolección de Información</h2>
                <p>Recopilamos información que usted nos proporciona directamente a través de nuestros formularios de contacto, como nombre, correo electrónico y número de teléfono.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Uso de la Información</h2>
                <p>La información recopilada se utiliza exclusivamente para responder a sus consultas, gestionar inscripciones y proporcionar información sobre nuestros cursos.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Protección de Datos</h2>
                <p>Implementamos medidas de seguridad para mantener la seguridad de su información personal. No vendemos, intercambiamos ni transferimos su información a terceros.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Cookies</h2>
                <p>Nuestro sitio puede utilizar cookies para mejorar la experiencia del usuario. Usted puede elegir configurar su navegador para rechazar las cookies.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Consentimiento</h2>
                <p>Al utilizar nuestro sitio, usted acepta nuestra política de privacidad.</p>
            </section>
        </div>
    )
}
