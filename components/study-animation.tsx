'use client'

import React from 'react'
import { BookOpen, PenTool, GraduationCap, Users, Brain } from 'lucide-react'

export function StudyAnimation() {
    return (
        <div className="relative w-full h-96 bg-primary/5 rounded-3xl overflow-hidden flex items-center justify-center border border-primary/10">
            {/* Background Decorative Circles */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />

            {/* Main Illustration Container */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Central Icon */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150 animate-pulse" />
                    <div className="relative bg-white dark:bg-slate-800 p-8 rounded-full shadow-2xl border border-primary/10 transform transition-transform hover:scale-110 duration-500">
                        <GraduationCap className="w-20 h-20 text-primary animate-bounce" />
                    </div>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute w-[300px] h-[300px] pointer-events-none">
                    {/* Student 1 */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 animate-[spin_15s_linear_infinite]">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-primary/5 animate-[spin_15s_linear_infinite_reverse]">
                            <Users className="w-8 h-8 text-accent" />
                        </div>
                    </div>

                    {/* Book */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-[spin_20s_linear_infinite]">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-primary/5 animate-[spin_20s_linear_infinite_reverse]">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>
                    </div>

                    {/* Pen */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 animate-[spin_12s_linear_infinite]">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-primary/5 animate-[spin_12s_linear_infinite_reverse]">
                            <PenTool className="w-8 h-8 text-secondary" />
                        </div>
                    </div>

                    {/* Brain */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite]">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-lg border border-primary/5 animate-[spin_18s_linear_infinite_reverse]">
                            <Brain className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                </div>

                {/* Floating Text Particles Labels */}
                <div className="mt-8 flex gap-6 overflow-hidden">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full animate-bounce delay-100">Matemáticas</span>
                    <span className="px-4 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full animate-bounce delay-300">Lengua</span>
                    <span className="px-4 py-1.5 bg-secondary/10 text-secondary text-xs font-bold rounded-full animate-bounce delay-500">Ingresos</span>
                </div>
            </div>

            {/* Classroom background elements (abstract) */}
            <div className="absolute bottom-0 w-full h-1/4 flex items-end justify-center gap-4 px-8 opacity-20">
                <div className="w-20 h-32 bg-primary rounded-t-lg animate-[slideUp_1s_ease-out]" />
                <div className="w-20 h-24 bg-accent rounded-t-lg animate-[slideUp_1.2s_ease-out]" />
                <div className="w-20 h-40 bg-primary rounded-t-lg animate-[slideUp_1.4s_ease-out]" />
                <div className="w-20 h-28 bg-secondary rounded-t-lg animate-[slideUp_1.6s_ease-out]" />
            </div>
        </div>
    )
}
