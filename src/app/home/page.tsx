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

    <div className="mt-8"> {/* Add margin-bottom here */}
      <h3 className="text-2xl font-semibold mb-6">Education & Skills</h3>
      
      <ul className="text-lg list-none space-y-6 sm:space-y-4 md:space-y-3">
        <li className="flex items-center space-x-3 md:space-x-4">
          <GraduationCap size={25} className="text-green-500" />
          <span className="text-base sm:text-lg">M.S/B.S Computer Science</span>
        </li>
        <li className="flex items-center space-x-3 md:space-x-4">
          <Code size={25} className="text-blue-500" />
          <span className="text-base sm:text-lg">Python, BASH, JavaScript, C/C++, Java</span>
        </li>
        <li className="flex items-center space-x-3 md:space-x-4">
          <Brain size={25} className="text-red-500" />
          <span className="text-base sm:text-lg">Haystack - Deepset, LangChain, TensorFlow, PyTorch</span>
        </li>
        <li className="flex items-center space-x-3 md:space-x-4">
          <Server size={25} className="text-yellow-500" />
          <span className="text-base sm:text-lg">React/Next.js, FastAPI, Tailwind CSS, Shadcn UI</span>
        </li>
      </ul>
    </div>
  </div>
);

export default HomePage;
