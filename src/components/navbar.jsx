const Navbar = () => {
    return (


        <nav className="bg-[#F8DBD5]  fixed w-full z-20 top-0 inset-s-0 border-b border-default">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="" className="h-7" alt=""/>
                    <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Jantungku</span>
                </a>
                <div className="inline-flex md:order-2 item-center gap-3 ">
                    <button type="button"
                            className=" px-3 py-2 border rounded-lg bg-amber-800 hover:bg-white hover:text-black leading rounded-2xl   ">Sign In
                    </button>
                    <button type="button"
                            className=" px-3 py-2 border rounded-lg bg-amber-800 hover:bg-white hover:text-black leading rounded-2xl   ">Sign Up
                    </button>

                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                     id="navbar-cta">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                        <li>
                            <a href="#hero"
                               className="block py-2 px-3 hover:bg-white hover:text-black leading rounded-2xl " >Home</a>
                        </li>
                        <li>
                            <a href="#about"
                               className="block py-2 px-3 hover:bg-white hover:text-black leading rounded-2xl  ">About</a>
                        </li>
                        <li>
                            <a href="#features"
                               className="block py-2 px-3 hover:bg-white hover:text-black leading rounded-2xl  ">Features</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;