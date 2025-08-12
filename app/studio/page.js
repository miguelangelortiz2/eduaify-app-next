'use client';
import { useState } from 'react';

export default function StudioPage() {
  const [topic, setTopic] = useState('');
  const [modules, setModules] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate modules generation
    setModules([
      { title: 'Introducción', description: 'Introducción al tema' },
      { title: 'Contenido', description: 'Contenido principal' },
      { title: 'Conclusiones', description: 'Resumen final' },
    ]);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">Crea tu curso</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <label className="block text-sm font-medium mb-2">Tema del curso</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border border-mute rounded-md p-2 w-full mb-4"
          placeholder="Escribe un tema..."
        />
        <button type="submit" className="px-4 py-2 bg-brand-500 text-white rounded-md hover:bg-brand-600">
          Generar temario
        </button>
      </form>
      {modules.length > 0 && (
        <div className="space-y-4">
          {modules.map((mod, idx) => (
            <div key={idx} className="p-4 border rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{mod.title}</h2>
              <p>{mod.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
