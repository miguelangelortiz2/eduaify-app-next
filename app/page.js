export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center p-8 space-y-4">
      <h1 className="text-5xl font-bold text-ink mb-4">EDUAIFY</h1>
      <p className="text-xl text-mute max-w-2xl">
        Diseña un curso, genera lecciones y evalúa a tus alumnos con inteligencia artificial en minutos.
      </p>
      <div className="flex space-x-4">
        <a href="/studio" className="px-6 py-3 bg-brand-500 text-white rounded-lg shadow-md hover:bg-brand-600 transition-colors">
          Crea tu curso
        </a>
        <a href="/course/demo" className="px-6 py-3 bg-accent text-ink rounded-lg shadow-md hover:bg-accent/90 transition-colors">
          Ver curso demo
        </a>
      </div>
    </main>
  );
}
