
const Navbar = () => {
    return (
        <nav className="h-16 border-b border-shirocha/50 bg-shiro/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-8 transition-all duration-300">
            <span className="font-serif text-4xl tracking-wide text-sumi font-semibold text-center w-full">Simply, 食パン</span>
            <div className="flex items-center gap-2">
                {/* <div className="size-8 rounded-full bg-kohaku flex items-center justify-center">
                    <span className="text-shiro font-serif text-lg">S</span>
                </div> */}

            </div>

            {/* <div className="flex gap-8 text-sumi/80 font-sans text-sm tracking-wide">
                <a href="#" className="hover:text-kohaku transition-colors">Home</a>
                <a href="#" className="hover:text-kohaku transition-colors">Recipes</a>
                <a href="#" className="hover:text-kohaku transition-colors">About</a>
                <a href="#" className="hover:text-kohaku transition-colors">Contact</a>
            </div> */}
        </nav>
    )
}

export default Navbar