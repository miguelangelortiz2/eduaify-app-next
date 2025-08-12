let courses = {
  demo: {
    id: 'demo',
    title: 'Curso Demo de la IA en la Educación',
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

export async function GET(request, { params }) {
  const { id } = params;
  const course = courses[id] || null;
  if (course) {
    return Response.json(course);
  }
  return new Response(JSON.stringify({ message: 'Course not found' }), {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request, { params }) {
  const { id } = params;
  const data = await request.json();
  // Save the course in the in-memory store. Include the id in the stored object.
  courses[id] = { id, ...data };
  return Response.json({ message: 'Course saved', id });
}
