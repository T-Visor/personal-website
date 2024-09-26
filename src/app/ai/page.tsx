"use client";

type Project = {
  id: number;
  title: string;
  description: string;
  url: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "MissionChat",
    description: "A large language model (LLM) capability satisfying multiple use-cases such as synthetic data generation, document generation for help desk support, and knowledge discovery engines.",
    url: ""
  },
  {
    id: 2,
    title: "Restorations as Denoising",
    description: "Evaluated the use of generative adversarial networks (GANs) to remove perturbed face images generated to fool face recognition systems.",
    url: "https://ieeexplore.ieee.org/document/10197680"
  },
  {
    id: 3,
    title: "Transformations as Denoising",
    description: "Evaluated the use of simple image transformation techniques to remove perturbed face images generated to fool face recognition systems.",
    url: "https://ieeexplore.ieee.org/document/9925338"
  },
  {
    id: 4,
    title: "GARD-CAPTCHA",
    description: "Developed a special algorithm using deconvolution to protect image-based CAPTCHAs from being cracked by automated image recognition systems.",
    url: "https://link.springer.com/chapter/10.1007/978-3-031-09145-2_2"
  },
  {
    id: 5,
    title: "Deep CAPTCHA Recognition",
    description: "Developed a comprehensive framework for training and fine-tuning convolutional neural network (CNN) models to recognize text-based CAPTCHA images.",
    url: "https://ieeexplore.ieee.org/document/9798233"
  },
];

type ProjectCardProps = {
  title: string;
  description: string;
  url: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url }) => (
  <div className="bg-gray-700 p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-lg mb-2">{description}</p>
    {url && <a href={url} target="_blank" className="text-indigo-400 hover:underline">Learn more</a>}
  </div>
);

const AIProjectsPage: React.FC = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold">AI Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          url={project.url}
        />
      ))}
    </div>
  </div>
)

export default AIProjectsPage;