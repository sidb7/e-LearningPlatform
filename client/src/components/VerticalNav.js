import "./css/verticalNav.css";
import { Badge, Button } from "@material-tailwind/react";
import { GiIceCube } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextState } from "../ContextProvider";
import { IoCartOutline } from "react-icons/io5";

function VerticalNav() {
  const { isAuthenticated, logout, shoppingCartData } =
    useContext(ContextState);
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("DFDD");
    logout();
    navigate("/");
  };

  const [Open, setOpen] = useState("");
  return (
    <>
      <nav class="fixed shadow-md top-0  z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 lg:px-5 lg:pl-3 py-0">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end ">
              <Link class="flex ms-2 md:me-24">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" /> */}

                <GiIceCube size={35} className="text-violet-600" />
                <span class="self-center text-3xl font-bold text-black whitespace-nowrap font-serif">
                  &nbsp;Grad<span className="text-violet-600">e</span>l
                </span>
              </Link>
            </div>
            <div
              onMouseOver={() => setOpen("dropdown-user")}
              onMouseOut={() => setOpen("")}
              class="flex items-center py-3 mb-0"
            >
              <>
                {" "}
                {isAuthenticated ? (
                  <div class="relative flex justify-end">
                    <div>
                      <button
                        type="button"
                        class="flex border text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown-user"
                      >
                        <img
                          class="w-8 h-8 rounded-full"
                          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                          alt="user photo"
                        />
                      </button>
                    </div>
                    {
                      <div
                        class={`z-50 absolute mt-12 ${
                          !(Open == "dropdown-user") && "hidden"
                        } text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                        id="dropdown-user"
                        onMouseOver={() => setOpen("dropdown-user")}
                        onMouseOut={() => setOpen("")}
                      >
                        <div class="px-4 py-3" role="none">
                          <p
                            class="text-sm text-gray-900 dark:text-white"
                            role="none"
                          >
                            Neil Sims
                          </p>
                          <p
                            class="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                            role="none"
                          >
                            neil.sims@flowbite.com
                          </p>
                        </div>
                        <ul class="py-1" role="none">
                          <li>
                            <Link
                              to={"/dashboard"}
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Dashboard
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Settings
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Earnings
                            </a>
                          </li>
                          <li>
                            <div
                              onClick={() => handleLogout()}
                              class="block px-4 cursor-pointer py-2 text-sm hover:text-violet-400 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                              role="menuitem"
                            >
                              Sign out
                            </div>
                          </li>
                        </ul>
                      </div>
                    }
                  </div>
                ) : (
                  <div class="flex gap-5 items-center ms-3">
                    <div className="flex gap-7 items-center ">
                      <Link
                        to={"/"}
                        className="text-gray-700 hover:text-violet-700"
                      >
                        Explore
                      </Link>
                      <Link to={"/purchase"} className="flex ">
                        <IoCartOutline size={28} />
                        <span class="bg-gray-200 items-center  rounded-full flex text-gray-800 text-xs font-semibold px-2.5">
                          {shoppingCartData.length}
                        </span>
                      </Link>
                    </div>

                    <div className="flex gap-3 items-center">
                      <Link
                        to={"/login"}
                        className="border border-black px-3 py-1 font-semibold hover:bg-gray-100 flex items-center"
                      >
                        Login
                      </Link>
                      <Link
                        to={"/register"}
                        className="border border-black px-3 py-1 bg-black text-white font-semibold flex items-center hover:bg-gray-900"
                      >
                        Signup
                      </Link>
                    </div>
                  </div>
                )}{" "}
              </>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default VerticalNav;
