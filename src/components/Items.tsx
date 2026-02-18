import recipes from '../data/recipes.json'

const Items = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 w-full">
                {recipes.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white aspect-3/4 p-6 flex flex-col justify-between relative shadow-sm hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
                    >

                        <div className="flex justify-end opacity-40 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-gray-400">
                                Mastery in a Slice
                            </span>
                        </div>


                        <div className="flex-1 flex items-center justify-center p-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-in-out"
                            />
                        </div>


                        <div className="pt-4 border-t border-gray-100 flex items-end justify-between">
                            <div className="flex flex-col gap-1">
                                <span className="font-serif text-gray-900 text-sm tracking-wide">
                                    {item.name}
                                </span>
                                <span className="text-[10px] text-gray-400 font-mono">
                                    {item.duration} — {item.calories} calories
                                </span>
                            </div>

                            {/* Type */}
                            <div className={`px-4 py-1.5 rounded-full border text-[10px] font-medium tracking-wide ${item.type === 'Veg'
                                ? 'bg-green-300'
                                : 'bg-red-300'
                                }`}>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items