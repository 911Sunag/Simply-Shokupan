import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import recipes from '../data/recipes.json';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Recipes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === Number(id));


    if (!recipe) {
        return (
            <div className="min-h-screen bg-[#fcf9f2] flex flex-col items-center justify-center text-gray-600 font-serif">
                <Navbar />
                <div className="flex-1 flex items-center">Recipe not found</div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcf9f2] font-sans flex flex-col">
            <Navbar />
            <main className="flex-1 w-full flex flex-col justify-center items-center space-y-5 py-10 px-0 md:px-8">
                <div className="bg-white rounded-[2rem] p-8 md:p-8 shadow-sm max-w-3xl w-full">

                    <div className="rounded-2xl overflow-hidden mb-8 w-full aspect-video relative">
                        <img
                            src={recipe.RecipeImage || recipe.image}
                            alt={recipe.RecipeName || recipe.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="font-serif font-bold text-4xl text-[#3a302a] mb-6">
                        {recipe.RecipeName || recipe.name}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600  mb-8 font-semibold">
                        {recipe.RecipeDescription || "A delicious recipe."}
                    </p>

                    {/* Preparation Time Box */}
                    <div className="bg-[#fff5f7] rounded-xl p-6 mb-10">
                        <h3 className="text-[#964B68] font-serif text-lg font-semibold mb-3">Preparation time</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-gray-900">• Total:</span>
                                <span>{recipe.duration}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-gray-900">• Preparation:</span>
                                <span>5 minutes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-gray-900">• Cooking:</span>
                                <span>{recipe.duration && parseInt(recipe.duration) > 5 ? (parseInt(recipe.duration) - 5) + " minutes" : "5 minutes"}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Ingredients Section */}
                    <div className="mb-10">
                        <h2 className="font-serif text-3xl text-[#8b5a4b] mb-6">Ingredients</h2>
                        {/* Ingredents image */}
                        <div className="flex justify-center">
                            <img src={recipe.IngredientsImage} alt={recipe.name} className="w-100 h-full object-contain rounded-2xl" />
                        </div>
                        <ul className="space-y-3 text-gray-700 text-sm pl-2 mt-5">
                            {recipe.Ingredients && recipe.Ingredients.length > 0 ? (
                                recipe.Ingredients.map((ing, idx) => (
                                    <li key={idx} className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[#8b5a4b] before:font-bold">
                                        {ing.amount} {ing.name}
                                    </li>
                                ))
                            ) : (
                                <li className="pl-4">Ingredients not listed.</li>
                            )}
                        </ul>

                    </div>

                    <hr className="border-gray-100 my-8" />

                    {/* Instructions Section */}
                    <div className="mb-10">
                        <h2 className="font-serif text-3xl text-[#8b5a4b] mb-6">Instructions</h2>
                        <ol className="list-decimal list-outside ml-5 space-y-4 text-gray-700 text-sm marker:text-[#8b5a4b] marker:font-bold">
                            {recipe.Cooking && recipe.Cooking.length > 0 ? (
                                recipe.Cooking.map((step, idx) => (
                                    <li key={idx} className="pl-2 leading-relaxed">
                                        <span className="font-bold text-gray-900">Step {idx + 1}:</span> {step}
                                    </li>
                                ))
                            ) : (
                                <li>Instructions not listed.</li>
                            )}
                        </ol>
                    </div>

                    <hr className="border-gray-100 my-8" />

                    {/* Nutrition Section */}
                    <div>
                        <h2 className="font-serif text-3xl text-[#8b5a4b] mb-6">Nutrition</h2>
                        <p className="text-gray-500 mb-6 text-sm">The table below shows nutritional values per serving without the additional fillings.</p>

                        <div className="text-gray-700 text-sm">
                            <div className="flex justify-between py-3 border-b border-gray-100">
                                <span className="pl-4">Calories</span>
                                <span className="font-bold text-[#8b5a4b] pr-4">{recipe.calories}kcal</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-100">
                                <span className="pl-4">Carbs</span>
                                <span className="font-bold text-[#8b5a4b] pr-4">0g</span> {/* Placeholder as data missing */}
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-100">
                                <span className="pl-4">Protein</span>
                                <span className="font-bold text-[#8b5a4b] pr-4">20g</span> {/* Placeholder */}
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="pl-4">Fat</span>
                                <span className="font-bold text-[#8b5a4b] pr-4">22g</span> {/* Placeholder */}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className="bg-[#8b5a4b] text-white px-4 py-2 rounded-lg">Home</Link>
            </main>
            <Footer />
        </div>
    )
}

export default Recipes