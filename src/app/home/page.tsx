'use client'

const HomePage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Welcome to My Portfolio</h2>
        <p className="text-lg">
            Explore the intersection of Artificial Intelligence and Photography through my work and projects.
            Here, you'll find a blend of cutting-edge AI technology and captivating visual storytelling.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">AI Highlights</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Machine Learning Models</li>
                    <li>Computer Vision Projects</li>
                    <li>Natural Language Processing</li>
                </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Photography Showcase</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Landscape Photography</li>
                    <li>Portrait Sessions</li>
                    <li>Urban Exploration</li>
                </ul>
            </div>
        </div>
    </div>
)

export default HomePage;