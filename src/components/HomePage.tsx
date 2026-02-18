
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Items from './Items'

const HomePage = () => {
    return (
        <div className="min-h-screen bg-shiro flex flex-col font-sans">
            <Navbar />

            {/* Main Content Area (No Sidebar) */}
            <main className="flex-1 overflow-y-auto w-full">
                <div className="max-w-[1600px] mx-auto p-4 md:p-8 space-y-12">

                    {/* Top Section: Hero Banner Only */}
                    {/* <div className="h-auto lg:h-[400px]">
                        <section className="relative h-full w-full rounded-3xl overflow-hidden flex items-center justify-center isolate group shadow-md hover:shadow-xl transition-all duration-500">
                            <img
                                src="/heroimg.webp"
                                alt="Hero Background"
                                className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-1000"
                            />
                            
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-0"></div>

                            <div className="relative z-10 text-center space-y-6 max-w-2xl px-6">
                                <h1 className="font-serif text-5xl md:text-7xl text-white drop-shadow-lg leading-tight">
                                    The Art of Shokupan
                                </h1>
                                <p className="text-white/90 text-sm md:text-lg font-light tracking-wide drop-shadow-md">
                                    Discover the fluffy, milky Japanese milk bread that melts in your mouth.
                                </p>
                                <button className="mt-6 px-10 py-3.5 bg-kohaku text-white rounded-full hover:bg-white hover:text-sumi transition-all duration-300 shadow-lg shadow-kohaku/30 text-sm font-bold tracking-wide uppercase">
                                    Start Baking
                                </button>
                            </div>
                        </section>
                    </div> */}
                    <section>
                        {/* <div className="flex items-end justify-between mb-8 px-2 border-b border-kinari/50 pb-4">
                            <div>
                                <h2 className="font-serif text-3xl text-sumi">Latest Recipes</h2>
                                <p className="text-nezumi text-sm mt-1">Fresh from the oven</p>
                            </div>
                            <a href="#" className="text-kohaku text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1">
                                View all
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div> */}
                        <Items />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default HomePage