"use client";

import { useState } from 'react';

/**
 * CoursePage displays the content of an individual course. In this MVP it
 * uses a set of static sample data to illustrate how a course overview,
 * lesson list and simple quiz might appear. In a full implementation this
 * component would fetch the course and module data from an API based on
 * the course identifier provided in the URL. The user can read through
 * the modules and then take a short quiz at the bottom of the page to
 * demonstrate comprehension.
 */
export default function CoursePage({ params }) {
  // Extract the dynamic route parameter. Next.js provides params as an
  // object keyed by the bracket name in the directory structure.
  const { id } = params;

  // Static sample course content for demonstration purposes. This data
  // includes a title, a set of modules each with lessons, and a simple
  // multiple-choice quiz. In a real app this data would be fetched from
  // your back-end API or database.
  const course = {
    title: `Curso Demo ${id}`,
    description:
      'Este es un curso de ejemplo generado por IA. Incluye módulos con lecciones y un cuestionario básico.',
    modules: [
      {
        title: 'Introducción a la IA generativa',
        lessons: ['¿Qué es la IA generativa?', 'Historia y evolución'],
      },
      {
        title: 'Herramientas y técnicas',
        lessons: ['Modelos de difusión', 'Transferencia de estilo'],
      },
      {
        title: 'Aplicaciones prácticas',
        lessons: ['Arte generativo', 'Educación personalizada'],
      },
    ],
    quiz: {
      question: '¿Cuál de los siguientes es un modelo de IA generativa?',
      options: [
        'Redes neuronales convolucionales (CNN)',
        'Redes generativas adversarias (GAN)',
        'Árboles de decisión',
      ],
      answerIndex: 1,
    },
  };

  // Track the selected option for the quiz and whether the user has
  // submitted their answer. We use useState to manage local component
  // state. When the answer is submitted we compute if it is correct.
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = submitted && selectedOption === course.quiz.answerIndex;

  // Handler for quiz submission. Prevents the default form submission
  // behaviour, marks the quiz as submitted and leaves the selected option
  // untouched.
  function handleQuizSubmit(e) {
    e.preventDefault();
    if (selectedOption !== null) setSubmitted(true);
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
      <p className="text-mute mb-6">{course.description}</p>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Módulos</h2>
        <ul className="space-y-4">
          {course.modules.map((mod, idx) => (
            <li key={idx} className="border border-mute rounded p-4 bg-white shadow">
              <h3 className="font-semibold text-lg mb-2">{mod.title}</h3>
              <ul className="list-disc pl-6 space-y-1">
                {mod.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Cuestionario</h2>
        <form onSubmit={handleQuizSubmit} className="space-y-4">
          <p className="font-medium">{course.quiz.question}</p>
          {course.quiz.options.map((opt, idx) => (
            <label key={idx} className="block">
              <input
                type="radio"
                name="quiz"
                value={idx}
                checked={selectedOption === idx}
                onChange={() => {
                  setSelectedOption(idx);
                  setSubmitted(false);
                }}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
          <button
            type="submit"
            className="px-4 py-2 bg-brand-500 text-white rounded hover:bg-brand-600"
          >
            Enviar respuesta
          </button>
          {submitted && (
            <p
              className={
                'mt-2 font-semibold ' + (isCorrect ? 'text-green-600' : 'text-red-600')
              }
            >
              {isCorrect
                ? '¡Correcto! Las GAN son un tipo de modelo generativo.'
                : 'Respuesta incorrecta. Inténtalo de nuevo.'}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
