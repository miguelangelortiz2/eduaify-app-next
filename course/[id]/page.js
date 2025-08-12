import { useState } from 'react';

export default function CoursePage({ params }) {
  const { id } = params;
  // Datos de ejemplo (esto se reemplazaría con datos reales del backend)
  const course = {
    title: 'Curso de IA - Ejemplo',
    description: 'Este es un curso de ejemplo generado por IA.',
    modules: [
      {
        title: 'Módulo 1',
        lessons: ['Lección 1', 'Lección 2'],
      },
      {
        title: 'Módulo 2',
        lessons: ['Lección 3', 'Lección 4'],
      },
    ],
    quiz: {
      question: '¿Qué es la IA?',
      options: ['Conjunto de técnicas de computación', 'Un tipo de hardware', 'Un lenguaje de programación'],
      answer: 0,
    },
  };

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="mb-6">{course.description}</p>
      {course.modules.map((mod, i) => (
        <div key={i} className="mb-4">
          <h2 className="text-2xl font-semibold">{mod.title}</h2>
          <ul className="ml-4 list-disc">
            {mod.lessons.map((les, j) => (
              <li key={j}>{les}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">{course.quiz.question}</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {course.quiz.options.map((opt, idx) => (
            <div key={idx} className="mb-2">
              <label>
                <input
                  type="radio"
                  name="answer"
                  value={idx}
                  checked={selected === idx}
                  onChange={() => setSelected(idx)}
                  className="mr-2"
                />
                {opt}
              </label>
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-brand-500 text-white rounded shadow hover:bg-brand-600 transition"
          >
            Enviar respuesta
          </button>
        </form>
        {submitted && (
          <p className="mt-2">
            {selected === course.quiz.answer
              ? '¡Correcto!'
              : 'Respuesta incorrecta, inténtalo de nuevo.'}
          </p>
        )}
      </div>
    </div>
  );
}
