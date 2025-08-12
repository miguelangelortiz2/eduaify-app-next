export default function Home() {
  return (
    <main aclassName="min-h-screen flex flex-col justify-center items-center text-center p-8">

    <h1 className="text-5xl font-bold text-ink mb-4">EDUAIFY</h1>
      <p className="mb-6 text-lg text-mute max-w-xl">
        Genera cursos increíbles con IA en 60 segundos.
      </p>
      <a href="/studio" className="px-6 py-3 bg-brand-500 text-white rounded-lg shadow-md hover:bg-brand-600 transition">
        Crea tu curso
      </a>
    </main>
  );
}
