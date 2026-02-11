'use client'

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TermsContent } from './terms-content'
import { PrivacyContent } from './privacy-content'

interface LegalModalProps {
    type: 'terms' | 'privacy'
    trigger: React.ReactNode
}

export function LegalModal({ type, trigger }: LegalModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                        {type === 'terms' ? 'Términos y Condiciones' : 'Política de Privacidad'}
                    </DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    {type === 'terms' ? <TermsContent /> : <PrivacyContent />}
                </div>
            </DialogContent>
        </Dialog>
    )
}
