import {Link} from "react-router";

const UserNavbar = () => {
    return ( <nav className="bg-transparent  fixed w-full z-20 top-0 inset-s-0  border-default">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="" className="h-7" alt=""/>
                <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">Jantungku</span>
            </a>

            <div className="inline-flex md:order-2 item-center gap-3 ">
                <Link  to='/'
                       className=" px-3 py-2  font-medium  rounded-xl text-white bg-[#1F6B5C] hover:bg-[#195A4D]     " > Log Out
                </Link>


            </div>

            <div className=" hidden w-full md:flex md:w-auto md:order-1"
                 id="navbar-cta">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                    <li>
                        <Link to=""
                           className="block py-2 px-3 hover:bg-white hover:text-black leading rounded-2xl " >Diagnosis</Link>
                    </li>
                    <li>
                        <Link to=""
                              className="block py-2 px-3 hover:bg-white hover:text-black leading rounded-2xl  ">History</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to="" */}
                    {/*          className="block py-2 px-3 hover:bg-white hover:text-black leading rounded-2xl  ">Features</Link>*/}
                    {/*</li>*/}

                </ul>
            </div>
        </div>
    </nav>
    )
}



export default UserNavbar