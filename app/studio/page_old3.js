ge.js'use client';

import { useState } from 'react';

export default function StudioPage() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('');
  const [audience, setAudience] = useState('');
  const [duration, setDuration] = useState('');
  const [modules, setModules] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate AI-generated modules based on the topic and details
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
        lessons: ['Proyecto integrador'],
      },
    ]);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Crea tu curso con IA</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium mb-1">Tema del curso</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="border border-mute rounded-md p-2 w-full"
            placeholder="Escribe un tema..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nivel</label>
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border border-mute rounded-md p-2 w-full"
            required
          >
            <option value="">Selecciona nivel</option>
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Público objetivo</label>
          <input
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="border border-mute rounded-md p-2 w-full"
            placeholder="Describe a quién va dirigido..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Duración estimada</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border border-mute rounded-md p-2 w-full"
            placeholder="Duración (en horas o semanas)"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600"
        >
          Generar temario
        </button>
      </form>
      {modules.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Temario sugerido</h2>
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="mb-6 p-4 border border-mute rounded-md shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
              <p className="text-sm mb-2">{mod.description}</p>
              <ul className="list-disc list-inside">
                {mod.lessons.map((lesson, li) => (
                  <li key={li}>{lesson}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
