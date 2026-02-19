import { useEffect, useMemo, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Play, Pause, RotateCcw, Volume2, HomeIcon } from 'lucide-react';
import recipes from '../data/recipes.json';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const stickerImages = [
    "image-0cPKr66ydMkJsLqzkBFCHVHXBZnw5X.webp",
    "image-2l0iEpELH8Dh6SlznWDG9UTDI7CXxF.webp",
    "image-5aEfm3A4zPjOYuRHNBSWFud5tmTxmF.webp",
    "image-79XLKwCuOZGHdVcOlEApISx6x2nVd2.webp",
    "image-8ysCNWCXSEUz8gev3IoCnzMXrG4Dgv.webp",
    "image-9SRE3OZK4XE1FqSayTmmiO5UqIcDGi.webp",
    "image-DQeRZcV77tvbEVDqxkEAaca8RwJ5KO.webp",
    "image-Lo6Z6zumG1tr01pDUmtp1bOwDlTeIE.webp",
    "image-N9RhY87VfwsgJMKMyc6MmdTUevd8SD.webp",
    "image-Okh2T4EAWiKpUpMznx5A3abb1qlVOz.webp",
    "image-PGsquqsWiNY7oX6G4drTdq36ieTBjG.webp",
    "image-R3MIm1xrlriIuCYpng20K9bds317N1.webp",
    "image-SMCaMDciKil0Q7RQPsqtTbNzUr2yr4.webp",
    "image-TVCwuOTeNqH2vGlDuJretqMcHhLHIu.webp",
    "image-VjaFekZH9sPWoqpxI5GfJzkoq55agF.webp",
    "image-WY6AfxnM6HoBlCZzV8tiWQPQJEORNb.webp",
    "image-X9moyHVyJ6at687pyOIlNGA3s1k5fQ.webp",
    "image-aJLwIUBibrkyvuHgIEe5momwaF3NRx.webp",
    "image-dB0Lnna9SnPK6FovcZxwjRtkxgSPBu.webp",
    "image-hGcGLkiClD5sryAD46zXP6yqYmhpvJ.webp",
    "image-j09SjN7IVQChRChhcG4DQd2XX9D6NP.webp",
    "image-mLIzz1a3BcyWlL2gqM5P7hK76WDldX.webp",
    "image-pnMXO2YYqMD8UCmPNtTPryUPlAVqkM.webp",
    "image-rXyreG0Sz8i9iLVpkX784JgqMjICxP.webp"
];

const Recipes = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === Number(id));

    const stickers = useMemo(() => {
        const count = 48;

        let indices: number[] = [];
        while (indices.length < count) {
            const batch = Array.from({ length: stickerImages.length }, (_, k) => k);
            for (let k = batch.length - 1; k > 0; k--) {
                const j = Math.floor(Math.random() * (k + 1));
                [batch[k], batch[j]] = [batch[j], batch[k]];
            }
            indices = indices.concat(batch);
        }

        return Array.from({ length: count }).map((_, i) => {
            const side = i % 6;
            let leftPosition;


            if (side === 0) leftPosition = Math.random() * 2 + 1;
            else if (side === 1) leftPosition = Math.random() * 2 + 6;
            else if (side === 2) leftPosition = Math.random() * 2 + 11;

            else if (side === 3) leftPosition = Math.random() * 2 + 85;
            else if (side === 4) leftPosition = Math.random() * 2 + 90;
            else leftPosition = Math.random() * 2 + 95;


            const isMiddleColumn = side === 1 || side === 4;
            const scale = isMiddleColumn
                ? 1.5 + Math.random() * 0.6
                : 1.0 + Math.random() * 0.5;

            return {
                src: stickerImages[indices[i]],

                top: (i / count) * 94 + 3 + (Math.random() * 2 - 1),
                left: leftPosition,
                rotation: Math.random() * 40 - 20,
                scale: scale,
                animationDuration: 3 + Math.random() * 5 + "s",
                animationDelay: -Math.random() * 5 + "s"
            };
        });
    }, []);




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
        <div className="min-h-screen bg-gray-100 font-sans flex flex-col relative overflow-hidden">
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) translateX(0px) rotate(var(--rot)) scale(var(--scale)); }
                    33% { transform: translateY(-10px) translateX(5px) rotate(var(--rot)) scale(var(--scale)); }
                    66% { transform: translateY(5px) translateX(-5px) rotate(var(--rot)) scale(var(--scale)); }
                    100% { transform: translateY(0px) translateX(0px) rotate(var(--rot)) scale(var(--scale)); }
                }
            `}</style>

            <Navbar />
            <main className="flex-1 w-full flex flex-col justify-center items-center space-y-5 py-10 px-0 md:px-8 relative z-10">
                {/* Background Stickers */}
                <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-20">
                    {stickers.map((sticker, index) => (
                        <img
                            key={index}
                            src={`/Strickers/${sticker.src}`}
                            alt="decorative sticker"
                            className="absolute w-14 h-14 object-contain"
                            style={{
                                top: `${sticker.top}%`,
                                left: `${sticker.left}%`,
                                // @ts-ignore
                                "--rot": `${sticker.rotation}deg`,
                                "--scale": `${sticker.scale}`,
                                animation: `float ${sticker.animationDuration} ease-in-out infinite alternate`,
                                animationDelay: sticker.animationDelay,
                                filter: "drop-shadow(2px 0 0 white) drop-shadow(-2px 0 0 white) drop-shadow(0 2px 0 white) drop-shadow(0 -2px 0 white) drop-shadow(2px 2px 0 white) drop-shadow(-2px -2px 0 white)",
                            }}
                        />
                    ))}
                </div>

                <div className="bg-gray-50 rounded-[2rem] p-8 md:p-8 shadow-sm max-w-3xl w-full relative z-30">

                    <div className="rounded-2xl overflow-hidden mb-8 w-full aspect-video relative">
                        <img
                            src={recipe.RecipeImage || recipe.image}
                            alt={recipe.RecipeName || recipe.name}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="font-serif font-bold text-4xl text-gray-900 tracking-wide mb-6">
                        {recipe.RecipeName || recipe.name}
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600  mb-8 font-semibold italic font-outfit tracking-wide">
                        {recipe.RecipeDescription || "A delicious recipe."}
                    </p>

                    {/* Prep Time & Timer Widget Container */}
                    <div className="flex flex-col md:flex-row gap-6 mb-10">
                        {/* Preparation Time Box */}
                        <div className="bg-gray-100 rounded-xl p-6 flex-1">
                            <h3 className="text-gray-800 font-serif text-lg font-semibold mb-3 tracking-wider">Preparation time</h3>
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

                        {/* Timer Widget */}
                        <TimerWidget durationStr={recipe.duration || "10 mins"} />
                    </div>

                    {/* Ingredients Section */}
                    <div className="mb-10">
                        <h2 className="font-serif text-3xl text-black font-semibold tracking-wider mb-6">Ingredients</h2>
                        {/* Ingredents image */}
                        <div className="flex justify-center">
                            <img src={recipe.IngredientsImage} alt={recipe.name} className="w-full max-w-md h-full object-contain rounded-2xl" />
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
                        <h2 className="font-serif text-3xl text-black font-semibold tracking-wider mb-6">Instructions</h2>
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
                        <h2 className="font-serif text-3xl text-black font-semibold tracking-wider mb-6">Nutrition</h2>
                        <p className="text-gray-500 mb-6 text-sm">The table below shows nutritional values per serving without the additional fillings.</p>

                        <div className="text-gray-700 text-sm">
                            <div className="flex justify-between py-3 border-b border-gray-100">
                                <span className="pl-4">Calories</span>
                                <span className="font-bold text-gray-800 pr-4">{recipe.calories}kcal</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-100">
                                <span className="pl-4">Carbs</span>
                                <span className="font-bold text-gray-800 pr-4">0g</span> {/* Placeholder as data missing */}
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-100">
                                <span className="pl-4">Protein</span>
                                <span className="font-bold text-gray-800 pr-4">20g</span> {/* Placeholder */}
                            </div>
                            <div className="flex justify-between py-3">
                                <span className="pl-4">Fat</span>
                                <span className="font-bold text-gray-800 pr-4">22g</span> {/* Placeholder */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-center w-full max-w-3xl mb-10">
                    <Link to="/" className="bg-gray-800 hover:bg-red-400 hover:text-black font-bold tracking-wider text-white px-12 py-3 rounded-lg flex items-center gap-2 transition-colors duration-300">
                        <HomeIcon className="w-5 h-5" />
                        <span>Home</span>
                    </Link>
                </div>
            </main >
            <Footer />
        </div >
    )
}

// Timer Widget Component
const TimerWidget = ({ durationStr }: { durationStr: string }) => {
    const parseDuration = (str: string) => {
        const match = str.match(/(\d+)/);
        return match ? parseInt(match[0]) * 60 : 600; // Default 10 mins if fail
    };

    const initialTimeRef = useRef(parseDuration(durationStr));
    const [timeLeft, setTimeLeft] = useState(initialTimeRef.current);
    const [isRunning, setIsRunning] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        audioRef.current.loop = true; // Loop the alarm
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    useEffect(() => {
        initialTimeRef.current = parseDuration(durationStr);
        setTimeLeft(initialTimeRef.current);
        setIsRunning(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [durationStr]);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isRunning) {
            // Timer finished
            setIsRunning(false);
            if (audioRef.current) audioRef.current.play().catch(e => console.log("Audio play failed", e));
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const toggleTimer = () => {
        // Stop alarm if playing
        if (timeLeft === 0 && !isRunning) {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setTimeLeft(initialTimeRef.current);
            return;
        }
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(initialTimeRef.current);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };



    return (
        <div className={`bg-gray-800 text-white rounded-xl p-6 flex flex-col justify-between items-center w-full md:w-48 shadow-lg transition-colors duration-500 ${timeLeft === 0 ? 'bg-red-500 animate-pulse' : 'bg-gray-800'}`}>
            <h3 className="text-gray-300 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                {timeLeft === 0 ? <Volume2 className="w-4 h-4" /> : "Timer"}
            </h3>
            <div className="text-4xl font-mono font-bold tracking-wider mb-4">
                {formatTime(timeLeft)}
            </div>
            <div className="flex gap-4">
                <button
                    onClick={toggleTimer}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors active:scale-95 text-white"
                >
                    {isRunning ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
                </button>
                <button
                    onClick={resetTimer}
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors active:scale-95 text-gray-300 hover:text-white"
                >
                    <RotateCcw size={20} />
                </button>
            </div>
        </div>
    );
};

export default Recipes