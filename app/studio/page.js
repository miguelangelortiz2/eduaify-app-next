'use client';

import { useState } from 'react';

export default function StudioPage() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('');
  const [audience, setAudience] = useState('');
  const [duration, setDuration] = useState('');
  const [modules, setModules] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModules([
      {
        title: `Módulo 1: Introducción a ${topic}`,
        description: 'Introducción general al tema',
        lessons: [
          `¿Qué es ${topic}?`,
          `Importancia de ${topic}`,
          `Aplicaciones de ${topic}`,
        ],
      },
      {
        title: `Módulo 2: Profundizando en ${topic}`,
        description: 'Conceptos intermedios y avanzados',
        lessons: [
          `Conceptos avanzados de ${topic}`,
          'Estudios de caso',
        ],
      },
      {
        title: 'Módulo 3: Proyecto final',
        description: 'Aplicación práctica de los conocimientos adquiridos',
        lessons: [
          'Definición del proyecto',
          'Desarrollo del proyecto',
          'Presentación y retroalimentación',
        ],
      },
    ]);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Crea tu curso</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tema del curso</label>
          <input value={topic} onChange={(e) => setTopic(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nivel</label>
          <input value={level} onChange={(e) => setLevel(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Público objetivo</label>
          <input value={audience} onChange={(e) => setAudience(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duración (horas)</label>
          <input value={duration} onChange={(e) => setDuration(e.target.value)} type="number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500" />
        </div>
        <button type="submit" className="px-4 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600">Generar temario</button>
      </form>
      {modules.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Temario sugerido</h2>
          <ul className="space-y-4">
            {modules.map((mod, index) => (
              <li key={index} className="p-4 border rounded-md">
                <h3 className="text-xl font-semibold">{mod.title}</h3>
                <p className="text-gray-600 mb-2">{mod.description}</p>
                <ul className="list-disc list-inside">
                  {mod.lessons.map((lesson, i) => (
                    <li key={i}>{lesson}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
