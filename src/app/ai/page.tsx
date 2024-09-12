'use client';

const AIProjectsPage = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">AI Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">AI Project {num}</h3>
          <p className="text-lg mb-2">Description of AI project {num}. This could be about machine learning, neural networks, or other AI technologies.</p>
          <a href="#" className="text-blue-400 hover:underline">Learn more</a>
        </div>
      ))}
    </div>
  </div>
)

export default AIProjectsPage;