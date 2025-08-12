export async function POST(request) {
  const { topic, level, audience, duration } = await request.json();
  // Generar un temario de ejemplo basado en los datos recibidos
  const modules = [
    {
      title: `Módulo 1: Introducción a ${topic}`,
      description: `Introducción general al tema` ,
      lessons: [
        `¿Qué es ${topic}?`,
        `Importancia de ${topic}`
      ]
    },
    {
      title: `Módulo 2: Profundizando en ${topic}`,
      description: `Conceptos intermedios y avanzados`,
      lessons: [
        `Historia y evolución de ${topic}`,
        `Casos prácticos de ${topic}`
      ]
    },
    {
      title: `Módulo 3: Aplicaciones de ${topic}`,
      description: `Aplicaciones prácticas en la industria`,
      lessons: [
        `Uso de ${topic} en la educación`,
        `Perspectivas futuras para ${topic}`
      ]
    }
  ];
  return new Response(JSON.stringify({ modules }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200,
  });
}
