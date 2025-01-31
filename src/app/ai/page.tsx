'use client';

import { GitBranch, Code, Zap, GitMerge, Layers } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
  languages: string[]; // Array to hold programming languages used
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "OfflineChat (Company Proprietary)",
    description: "A large language model (LLM) powered capability satisfying multiple use-cases such as synthetic data generation, intelligent data parsing, fix generation for help desk support, and knowledge discovery engines.",
    url: "",
    languages: ["Python", "JavaScript", "TensorFlow"], // Example languages
  },
  {
    id: 2,
    title: "Restorations as Denoising",
    description: "Evaluated the use of generative adversarial networks (GANs) to detect perturbed face images generated to fool face recognition systems.",
    url: "https://ieeexplore.ieee.org/document/10197680",
    languages: ["Python", "PyTorch"],
  },
  {
    id: 3,
    title: "Transformations as Denoising",
    description: "Evaluated the use of simple image transformation techniques to detect perturbed face images generated to fool face recognition systems.",
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
  Python: <GitBranch size={30} className="text-yellow-500" />, // Using Lucide's Python icon
  JavaScript: <Code size={30} className="text-yellow-400" />, // JavaScript icon (code)
  TensorFlow: <Layers size={30} className="text-orange-500" />, // Placeholder for TensorFlow
  PyTorch: <Zap size={30} className="text-red-500" />, // PyTorch icon
  OpenCV: <GitMerge size={30} className="text-blue-600" />, // OpenCV icon
  Keras: <GitBranch size={30} className="text-purple-500" />, // Keras icon
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url, languages }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
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
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-white mb-8">AI Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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