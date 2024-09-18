'use client'

const HomePage = () => (
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
            <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">AI Highlights</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Image Recognition</li>
                    <li>Natural Language Processing</li>
                    <li>Generative AI</li>
                </ul>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Photography Showcase</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Travel</li>
                    <li>Nature</li>
                    <li>Cityscapes</li>
                </ul>
            </div>
        </div>
    </div>
)

export default HomePage;