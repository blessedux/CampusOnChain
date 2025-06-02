import React from "react";

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#18181a] text-white">
      <h1 className="text-3xl font-bold mb-4">Web3 Courses</h1>
      <p className="text-lg text-gray-300 mb-8">Aquí encontrarás todos los cursos de Web3, blockchain y más. ¡Próximamente!</p>
      <div className="w-full max-w-2xl bg-white/10 rounded-xl p-8 shadow-lg">
        <div className="text-center text-gray-400">(Aquí aparecerán los cursos disponibles...)</div>
      </div>
    </div>
  );
} 