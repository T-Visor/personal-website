'use client'

const AboutPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg">
            I'm passionate about both Artificial Intelligence and Photography. My background in AI technology
            informs my approach to photography, while my photographic eye helps me create more intuitive and
            visually appealing AI interfaces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 className="text-2xl font-semibold mb-2">AI Expertise</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Machine Learning</li>
                    <li>Neural Networks</li>
                    <li>Computer Vision</li>
                    <li>Natural Language Processing</li>
                </ul>
            </div>
            <div>
                <h3 className="text-2xl font-semibold mb-2">Photography Gear</h3>
                <ul className="list-disc list-inside text-lg space-y-2">
                    <li>Camera: Canon EOS R5</li>
                    <li>Lenses: 24-70mm f/2.8, 70-200mm f/4</li>
                    <li>Editing: Adobe Lightroom & Photoshop</li>
                </ul>
            </div>
        </div>
    </div>
)

export default AboutPage;