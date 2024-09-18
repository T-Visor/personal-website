"use client";

type Project = {
  id: number;
  title: string;
  description: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "MissionChat",
    description: "A large language model (LLM) capability satisfying multiple use-cases such as synthetic data generation, document generation for help desk support, and knowledge discovery engines.",
  },
  {
    id: 2,
    title: "Restorations as Denoising",
    description: "Evaluated the use of generative adversarial networks (GANs) to remove perturbed face images generated to fool face recognition systems.",
  },
  {
    id: 3,
    title: "Transformations as Denoising",
    description: "Evaluated the use of simple image transformation techniques to remove perturbed face images generated to fool face recognition systems.",
  },
  {
    id: 4,
    title: "GARD-CAPTCHA",
    description: "Developed a special algorithm using deconvolution to protect image-based CAPTCHAs from being cracked by automated image recognition systems.",
  }
];

type ProjectCardProps = {
  title: string;
  description: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => (
  <div className="bg-gray-700 p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-lg mb-2">{description}</p>
    <a href="#" className="text-blue-400 hover:underline">Learn more</a>
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
        />
      ))}
    </div>
  </div>
)

export default AIProjectsPage;