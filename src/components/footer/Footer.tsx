
const Footer = () => {
    return (
        <footer className="border-t border-shirocha/50 bg-white py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-nezumi tracking-wide">
                &copy; {new Date().getFullYear()} Shokupan. All rights reserved.
            </p>
            <div className="flex gap-6">
                {['Privacy', 'Terms', 'Cookies'].map((item) => (
                    <a href="#" key={item} className="text-xs text-nezumi hover:text-sumi transition-colors font-sans uppercase tracking-wider">
                        {item}
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer