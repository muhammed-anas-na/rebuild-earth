import HeaderMenu from "./HeaderMenu";

export default function Header() {
    return (
        <header className="flex justify-between text-white items-center my-10 md:mx-20">
            <div>
                <img src="logo.jpg" alt="Logo" className="w-14 rounded-full" />
            </div>

            <HeaderMenu />

            <div>
                <a href="#_" class="relative inline-block text-lg group">
                    <span class="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-1 border-gray-900 rounded-lg group-hover:text-white">
                        <span class="absolute inset-0 w-full h-full px-3 py-2 rounded-lg bg-gray-50"></span>
                        <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#1E4D37] group-hover:-rotate-180 ease"></span>
                        <span class="relative">Contact Us</span>
                    </span>
                    <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#1E4D37] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
            </div>
        </header>
    )
}