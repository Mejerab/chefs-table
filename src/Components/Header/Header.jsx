import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-2xl">Chefs Table</a>
                </div>
                <div className='mr-64 lg:block hidden'>
                    <ul className="mt-2">
                        <li className='inline-block px-4 text-[#150B2BB3] font-normal'><a style={{ cursor: 'pointer' }} className="text-sm">Home</a></li>
                        <li className='inline-block px-4 text-[#150B2BB3] font-normal'><a style={{ cursor: 'pointer' }} className="text-sm">Recipes</a></li>
                        <li className='inline-block px-4 text-[#150B2BB3] font-normal'><a style={{ cursor: 'pointer' }} className="text-sm">About</a></li>
                        <li className='inline-block px-4 text-[#150B2BB3] font-normal'><a style={{ cursor: 'pointer' }} className="text-sm">Search</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <CgProfile className="text-3xl ml-1 mt-1"></CgProfile>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;