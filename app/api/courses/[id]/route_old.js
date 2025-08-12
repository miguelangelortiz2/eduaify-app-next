export async function GET(request, { params }) {
  const { id } = params;
  // Stub data for courses
  const courses = {
    demo: {
      id: 'demo',
      title: 'Curso Demo de IA en la Educación',
      description: 'Aprende cómo la IA puede transformar la educación.',
      modules: [
        {
          title: 'Introducción a la IA',
          lessons: ['¿Qué es la IA?', 'Historia y evolución', 'Aplicaciones en educación'],
        },
        {
          title: 'IA generativa',
          lessons: ['Modelos generativos', 'Chatbots y tutores virtuales'],
        },
      ],
    },
  };
  const course = courses[id] || null;
  if (course) {
    return new Response(JSON.stringify(course), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Course not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
