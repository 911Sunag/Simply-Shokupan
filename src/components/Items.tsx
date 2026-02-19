import { Filter, Search, Clock, X } from 'lucide-react'
import { useState, useMemo, useEffect, useRef } from 'react'

import recipes from '../data/recipes.json'
import { Link } from 'react-router-dom'

const Items = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filterType, setFilterType] = useState<string>('all')
    const [filterTime, setFilterTime] = useState<number>(60)
    const [showFilters, setShowFilters] = useState(false)
    const [isSearchFocused, setIsSearchFocused] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)

    // Helper to parse duration string "20 mins" -> 20
    const parseDuration = (durationStr: string) => {
        const match = durationStr.match(/(\d+)/)
        return match ? parseInt(match[0]) : 0
    }

    const clearFilters = () => {
        setFilterType('all')
        setFilterTime(60)
        setSearchQuery('')
    }


    // Filter for Grid (Time & Type)
    const filteredRecipes = useMemo(() => {
        return recipes.filter(item => {
            const duration = parseDuration(item.duration)
            const matchesTime = duration <= filterTime
            const matchesType = filterType === 'all' || item.type === filterType
            // Optional: Also filter grid by search? User asked for search dropdown specifically.
            // Let's include search in grid too for better UX, but prioritize dropdown requirement.
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesTime && matchesType && matchesSearch
        })
    }, [filterTime, filterType, searchQuery])

    // Search Suggestions (Dropdown)
    const searchResults = useMemo(() => {
        if (!searchQuery) return []
        return recipes.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    }, [searchQuery])

    // Close search dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className="flex flex-col items-center w-full relative">
            <div className="w-full max-w-7xl px-4 md:px-8 mt-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 relative z-30">

                    {/* Search Bar */}
                    <div className="relative w-full md:w-96" ref={searchRef}>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5a4b] focus:border-transparent transition-all"
                            />
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>

                        {/* Search Dropdown */}
                        {isSearchFocused && searchQuery && (
                            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                                {searchResults.length > 0 ? (
                                    <ul className="max-h-60 overflow-y-auto py-2">
                                        {searchResults.map(item => (
                                            <li key={item.id}>
                                                <Link
                                                    to={`/recipe/${item.id}`}
                                                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#fff5f7] transition-colors cursor-pointer"
                                                    onClick={() => setIsSearchFocused(false)}
                                                >
                                                    <img src={item.image} alt={item.name} className="w-10 h-10 object-contain rounded-full bg-gray-50" />
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-800">{item.name}</p>
                                                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.type === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                                            {item.type}
                                                        </span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-4 text-center text-gray-500 text-sm">
                                        Item will be available soon..
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Filter Toggle Button */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${showFilters ? 'bg-[#8b5a4b] text-white border-[#8b5a4b]' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Filter Panel */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showFilters ? 'max-h-50 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start md:items-center justify-center">

                        {/* Type Filter */}
                        <div className="flex flex-col gap-2">
                            <h3 className="text-sm font-semibold text-gray-700">Type</h3>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="type"
                                        checked={filterType === 'all'}
                                        onChange={() => setFilterType('all')}
                                        className="w-4 h-4 text-gray-600 focus:ring-gray-500"
                                    />
                                    <span className="text-sm text-gray-600 group-hover:text-gray-900">All</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="type"
                                        checked={filterType === 'Veg'}
                                        onChange={() => setFilterType('Veg')}
                                        className="w-4 h-4 text-green-600 focus:ring-green-500 accent-green-600"
                                    />
                                    <span className="text-sm text-green-700 font-medium group-hover:text-green-800">Veg</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="type"
                                        checked={filterType === 'Non-veg'}
                                        onChange={() => setFilterType('Non-veg')}
                                        className="w-4 h-4 text-red-600 focus:ring-red-500 accent-red-600"
                                    />
                                    <span className="text-sm text-red-700 font-medium group-hover:text-red-800">Non-veg</span>
                                </label>
                            </div>
                        </div>

                        <div className="h-10 w-px bg-gray-200 hidden md:block"></div>

                        {/* Time Filter */}
                        <div className="flex flex-col gap-2 w-full md:w-64">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Max Duration
                                </h3>
                                <span className="text-xs font-bold text-[#8b5a4b]">{filterTime} mins</span>
                            </div>
                            <input
                                type="range"
                                min="5"
                                max="60"
                                step="5"
                                value={filterTime}
                                onChange={(e) => setFilterTime(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8b5a4b]"
                            />
                            <div className="flex justify-between text-[10px] text-gray-400">
                                <span>5m</span>
                                <span>60m</span>
                            </div>
                        </div>

                        {/* Clear Button */}
                        <button
                            onClick={clearFilters}
                            className="px-4 py-2 text-sm text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1"
                        >
                            <X className="w-4 h-4" /> Clear
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((item) => (
                            <Link
                                key={item.id}
                                to={`/recipe/${item.id}`}
                                className="bg-white aspect-3/4 p-6 flex flex-col justify-between relative hover:-translate-y-1 transition-all duration-300 group cursor-pointer rounded-2xl"
                            >

                                <div className="flex justify-end opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className={`px-5 py-1 rounded-full ${item.type === 'Veg'
                                        ? 'bg-green-300'
                                        : 'bg-red-300'
                                        }`}>
                                        {/* {item.type} */}
                                    </div>
                                </div>


                                <div className="flex-1 flex items-center justify-center p-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain drop-shadow-md group-hover:drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 ease-in-out"
                                    />
                                </div>
                                <div className="pt-4 flex items-end justify-between">
                                    <div className="flex flex-col gap-1 w-full">
                                        <span className="font-serif text-[#3a302a] text-lg font-bold leading-tight group-hover:text-[#8b5a4b] transition-colors line-clamp-2">
                                            {item.name}
                                        </span>
                                        <div className="flex justify-between items-center mt-2">
                                            <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> {item.duration}
                                            </span>
                                            <span className="text-xs text-gray-400 font-semibold">
                                                🔥 {item.calories} kcal
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center text-gray-400 font-serif text-lg">
                            No recipes found matching your criteria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Items