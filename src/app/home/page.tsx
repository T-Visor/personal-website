"use client"

import { Code, Brain, GraduationCap, Server } from 'lucide-react';

const HomePage: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">Overview</h2>
    
    <p className="text-lg">
      I am a software engineer who is passionate about artificial intelligence (AI), with experience in computer vision and natural language processing (NLP). 
    </p>
    
    <p className="text-lg">
      Outside of tech, I am a part-time photographer, capturing moments of creativity.
    </p>

    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-6">Education & Skills</h3>
      
      <ul className="text-lg list-none space-y-4">
        <li className="flex items-start sm:items-center gap-3">
          <GraduationCap size={25} className="text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="text-base text-lg">M.S/B.S Computer Science</span>
        </li>
        <li className="flex items-start sm:items-center gap-3">
          <Code size={25} className="text-blue-500 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="text-base text-lg">Python, JavaScript, C/C++, Java, Git</span>
        </li>
        <li className="flex items-start sm:items-center gap-3">
          <Brain size={25} className="text-red-500 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="text-base text-lg">Ollama, HuggingFace Transformers, Haystack, LangChain, TensorFlow, PyTorch</span>
        </li>
        <li className="flex items-start sm:items-center gap-3">
          <Server size={25} className="text-yellow-500 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span className="text-base text-lg">React/Next.js, FastAPI, Tailwind CSS, Shadcn UI</span>
        </li>
      </ul>
    </div>
  </div>
);

export default HomePage;