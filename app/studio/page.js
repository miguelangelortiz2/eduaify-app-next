'use client';

import { useState } from 'react';

export default function StudioPage() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('');
  const [audience, setAudience] = useState('');
  const [duration, setDuration] = useState('');
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, level, audience, duration }),
      });
      if (!response.ok) {
        throw new Error('Error generating modules');
      }
      const data = await response.json();
      setModules(data.modules || data);
    } catch (err) {
      setError(err.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 space-y-8">
      <h1 className="text-4xl font-bold">Crea tu curso</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Tema del curso"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Nivel"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Audiencia"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Duración (horas)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-brand-500 text-white rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Generando...' : 'Generar temario'}
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <section className="space-y-4">
        {modules.length > 0 &&
          modules.map((module, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h2 className="text-2xl font-semibold">{module.title}</h2>
              <p className="mt-2">{module.description}</p>
              {module.lessons && (
                <ul className="list-disc ml-5 mt-2">
                  {module.lessons.map((lesson, idx) => (
                    <li key={idx}>{lesson}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </section>
    </main>
  );
}
