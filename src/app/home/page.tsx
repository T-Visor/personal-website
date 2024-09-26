'use client'

type Section = {
    id: number;
    title: string;
    items: string[];
}

const sections: Section[] = [
 /*   {
        id: 1,
        title: "AI Highlights",
        items: ["Image Recognition", "Natural Language Processing", "Generative AI"]
    },
    {
        id: 2,
        title: "Photography Showcase",
        items: ["Travel", "Nature", "Cityscapes"]
    }
    */
] 

type SectionCardProps = {
    title: string;
    items: string[];
};

const SectionCard: React.FC<SectionCardProps> = ({ title, items }) => (
    <div className="bg-gray-700 p-4 rounded-lg">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const HomePage: React.FC = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
        <p className="text-lg">
            I am thrilled by the incredible potential of generative AI, both today and in the future!
            The possibilities are endless, and I am excited to be part of this transformative journey!
        </p>
        <p className="text-lg">
            In addition you can occassionally find me behind the camera, capturing the beauty of the world as a passionate part-time photographer!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
                <SectionCard
                    key={section.id}
                    title={section.title}
                    items={section.items}
                />
            ))}
        </div>
    </div>
)

export default HomePage;