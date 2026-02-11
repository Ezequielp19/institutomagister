'use client'

import React from 'react'

export function TermsContent() {
    return (
        <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Aceptación de los Términos</h2>
                <p>Al acceder y utilizar el sitio web de Instituto Magister, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Servicios Educativos</h2>
                <p>Instituto Magister ofrece cursos de preparación para ingresos escolares. La inscripción a los cursos está sujeta a disponibilidad de cupos y al cumplimiento de los requisitos administrativos de la institución.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Propiedad Intelectual</h2>
                <p>Todo el contenido presente en este sitio, incluyendo textos, gráficos, logos e imágenes, es propiedad de Instituto Magister y está protegido por las leyes de propiedad intelectual.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Limitación de Responsabilidad</h2>
                <p>Instituto Magister se esfuerza por proporcionar información precisa, pero no garantiza que la información en el sitio esté libre de errores. El uso del sitio es bajo su propio riesgo.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Modificaciones</h2>
                <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en el sitio web.</p>
            </section>
        </div>
    )
}
