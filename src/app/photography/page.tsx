'use client'

const PhotographyPage = () => (
    <div className="space-y-6">
        <h2 className="text-3xl font-bold">Photography Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="aspect-square overflow-hidden rounded-lg">
                    <img
                        src={`/api/placeholder/400/400?text=Photo ${num}`}
                        alt={`Photography sample ${num}`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                </div>
            ))}
        </div>
    </div>
)

export default PhotographyPage;