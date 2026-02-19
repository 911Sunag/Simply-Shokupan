import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer
            className="border-t border-shirocha/50 bg-cover bg-center py-16 px-8 flex flex-col items-center gap-10"
            style={{ backgroundImage: "url('/Images/footerImg.webp')" }}
        >
            {/* Contact & Social Media Section */}
            <div className="flex flex-col items-center gap-4 bg-white/80 p-8 rounded-2xl backdrop-blur-sm shadow-sm max-w-lg w-full">
                <h3 className="font-serif text-2xl text-gray-800">Contact Us</h3>
                <p className="text-sm text-gray-600 mb-2">Follow our daily baking journey</p>
                <div className="flex gap-4">
                    <a href="#" className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-pink-400 hover:text-white hover:border-pink-400 transition-all duration-300 transform hover:-translate-y-1">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="p-2.5 bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-[#8b5a4b] hover:text-white hover:border-[#8b5a4b] transition-all duration-300 transform hover:-translate-y-1">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 border-t border-gray-200/50 bg-white/60 backdrop-blur-sm px-6 py-4 rounded-xl">
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-xs font-medium text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Simply Shokupan. All rights reserved.</p>
                    <span className="hidden md:block w-1 h-1 bg-gray-400 rounded-full"></span>
                    <p>Designed & Developed by <span className="font-bold text-gray-600">Sunag</span></p>
                </div>

                {/* <div className="flex gap-6">
                    {['Privacy', 'Terms', 'Cookies'].map((item) => (
                        <a href="#" key={item} className="text-xs text-gray-600 hover:text-[#8b5a4b] transition-colors font-sans uppercase tracking-wider font-bold">
                            {item}
                        </a>
                    ))}
                </div> */}
            </div>
        </footer>
    )
}

export default Footer