'use client';

import { Code, Layers, Zap, GitBranch } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  languages: string[]; // Array to hold programming languages used
};

const projectsData: Project[] = [
  {
    id: 0,
    title: "Natural Language Housing Search",
    description: "A Zillow-style hobby project that leverages generative AI to power natural language search, enabling users to explore homes for sale through a seamless, intuitive interface.",
    url: "https://github.com/T-Visor/natural-language-housing-search",
    languages: ["JavaScript", "TensorFlow"], // Example languages
  },
  {
    id: 1,
    title: "Knowledge Advisor (Company Proprietary)",
    description: "A large language model (LLM) powered platform prototyped to demonstrate use-cases such as synthetic data generation, intelligent data parsing, automated metadata tagging, help desk support, and knowledge discovery engines.",
    url: "",
    languages: ["Python", "TensorFlow"], // Example languages
  },
  {
    id: 2,
    title: "Restorations as Denoising",
    description: "Evaluated the use of generative adversarial networks (GANs) to remove adversarial noise in face images designed to deceive face recognition systems.",
    url: "https://ieeexplore.ieee.org/document/10197680",
    languages: ["Python", "PyTorch"],
  },
  {
    id: 3,
    title: "Transformations as Denoising",
    description: "Evaluated the use of simple image transformation techniques to remove adversarial noise in face images designed to deceive face recognition systems.",
    url: "https://ieeexplore.ieee.org/document/9925338",
    languages: ["Python", "OpenCV"],
  },
  {
    id: 4,
    title: "GARD-CAPTCHA",
    description: "Developed a special algorithm using deconvolution to protect image-based CAPTCHAs from being cracked by automated image recognition systems.",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-09145-2_2",
    languages: ["Python", "TensorFlow"],
  },
  {
    id: 5,
    title: "Deep CAPTCHA Recognition",
    description: "Developed a comprehensive framework for training and fine-tuning convolutional neural network (CNN) models to recognize text-based CAPTCHA images.",
    url: "https://ieeexplore.ieee.org/document/9798233",
    languages: ["Python", "Keras"],
  },
];

type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
  languages: string[];
};

const languageIcons: { [key: string]: JSX.Element } = {
  Python: <Code size={25} className="text-yellow-500" />,
  JavaScript: <Code size={25} className="text-yellow-400" />,
  TensorFlow: <Layers size={25} className="text-orange-500" />,
  PyTorch: <Zap size={25} className="text-red-500" />,
  OpenCV: <GitBranch size={25} className="text-blue-600" />,
  Keras: <GitBranch size={25} className="text-purple-500" />,
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, languages }) => (
  <div className="bg-gray-800 rounded-lg">
    <h3 className="text-2xl font-semibold mb-3 text-white">{title}</h3>
    <p className="text-lg text-gray-300 mb-4">{description}</p>
    {languages.length > 0 && (
      <div className="flex space-x-4 mb-4">
        {languages.map((lang, index) => (
          <div key={index} className="transition-transform transform hover:scale-110">
            {languageIcons[lang] || <GitBranch size={30} className="text-gray-400" />}
          </div>
        ))}
      </div>
    )}
    {url && <a href={url} target="_blank" className="text-indigo-400 hover:underline">Learn more</a>}
  </div>
);

const AIProjectsPage: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-white">Software Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          url={project.url}
          languages={project.languages}
        />
      ))}
    </div>
  </div>
);

export default AIProjectsPage;
