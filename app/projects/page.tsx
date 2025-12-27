export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p className="text-gray-600">
            Description of your project will go here.
          </p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">Project 2</h2>
          <p className="text-gray-600">
            Description of another project.
          </p>
        </div>
      </div>
    </main>
  );
}
