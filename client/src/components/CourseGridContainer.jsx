import { useEffect, useState } from "react";
import CourseCards from "./CourseCards";
import "./css/CourseGridContainer.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { Card, Carousel } from "flowbite-react";

const fetchCourseData = async () => {
  const response = await fetch(
    "https://localhost:3001/course/get-all-courses",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (response.ok) {
    const data = await response.json();
    console.log(data.data, "ARRAY DATA");
    return data.data;
  } else {
    const errData = response.json();
    console.log(errData.message, "ERRROR");
  }
};

function CourseGridContainer() {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    console.log(fetchCourseData(), "FETCCHHC");
    fetchCourseData().then((data) => {
      setCourseData(data);
    });
  }, []);

  const carouselCustomTheme = {
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-400 group-hover:bg-neutral-200 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-8 sm:w-8",
      icon: "h-5 w-5  sm:h-6 sm:w-6",
    },
  };
  const cardCustomTheme = {
    img: {
      base: "h-42 w-100 mb-0 pb-0",
    },
  };

  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover("open1"),
    onMouseLeave: () => setOpenPopover(false),
  };
  return (
    <>
      <div class="p-2 w-full  xl:px-28 lg:px-20 md:px-16 sm:px-16">
        <div class="p-1 w-full mt-14">
          <div className="h-56 sm:h-64 mb-4 xl:h-80 2xl:h-96 mt-3">
            <Carousel theme={carouselCustomTheme} pauseOnHover>
              {/* <img src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/62fbb642c7807d3f3544f97a_Carousel%20Design%20Thumbnail%2016x9.webp" alt="..." /> */}
              <img
                src="https://car-brand-assets-web.s3.us-west-1.amazonaws.com/Open+Graph/Carousel_Training.jpg"
                alt="..."
              />
              <img
                src="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2023/04/Blog-6.jpg"
                alt="..."
              />
              {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
            </Carousel>
          </div>
          <h1 className="font-bold font-serif text-3xl my-2 ps-3">
            All the skills you need in one place.
          </h1>
          <p className="font-normal text-gray-500 font-sans text-lg ps-3">
            From critical skills to technical topics,{" "}
            <span className="text-black font-semibold font-serif text-xl">
              Grad<span className="text-violet-600 font-serif">e</span>l
            </span>{" "}
            supports your professional development.
          </p>

          <div className="flex justify-center w-full ">
            <div
              class="inline-flex whitespace-nowrap rounded-md shadow-sm my-6 gap-3 overflow-scroll no-scrollbar"
              role="group"
            >
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Data Science
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500 hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Advance Coding
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Machine Learning
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Deep Learning
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Artificial Inteliigence
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Python
              </button>
              <button
                type="button"
                class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
              >
                Bussiness
              </button>
            </div>
          </div>

          <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-4 mb-4">
            {/* {console.log(courseData, "CORRRRddd")} */}
            {courseData.map((ele, index) => {
              return (
                <div class=" flex items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800">
                  <Popover
                    open={openPopover == ele.name}
                    handler={setOpenPopover}
                    placement="right"
                  >
                    <Card
                      onMouseOver={() => {
                        setOpenPopover(ele.name);
                      }}
                      onMouseOut={() => setOpenPopover(false)}
                      className=" min-w-md cursor-pointer"
                      imgSrc={ele.thumbnails[0]}
                      theme={cardCustomTheme}
                      key={index || ele.name}
                    >
                      <div>
                        <div>
                          <h5 className="font-bold leading-5 h-10 font-serif line-clamp-2  tracking-tight text-gray-900 dark:text-white">
                            {ele.name}
                          </h5>
                          <p className="text-xs mt-2 text-gray-600 line-clamp-1">
                            {ele.author}
                          </p>
                        </div>

                        <div className="leading-10 mt-0">
                          <div class="flex items-center  text-2xs leading-6">
                            <MdOutlineStarPurple500
                              className="text-yellow-400"
                              size={14}
                            />
                            <p class=" font-bold text-gray-900 dark:text-white">
                              4.95
                            </p>
                            <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                            <a
                              href="#"
                              class="font-medium text-gray-900 underline hover:no-underline dark:text-white"
                            >
                              73 reviews
                            </a>
                          </div>

                          <p className="line-clamp-2 text-sm">
                            {ele.description}
                          </p>
                          <PopoverHandler {...triggers}>
                            <div>
                              <p className="font-bold  text-gray-700 dark:text-gray-400">
                                RS: {ele.price}
                              </p>
                            </div>
                          </PopoverHandler>
                        </div>
                      </div>
                    </Card>

                    <PopoverContent
                      {...triggers}
                      className="z-50 "
                      onMouseOver={() => {
                        setOpenPopover(ele.name);
                      }}
                      onMouseOut={() => setOpenPopover(false)}
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <Typography className="font-semibold">
                          {ele.name}
                        </Typography>
                      </div>
                      <div>
                        <Button>Add to cart</Button>
                      </div>

                      <div className="mt-4 flex items-center gap-5">
                        <div className="flex items-center gap-1">
                          <span>Rs: </span>
                          <Typography
                            color="gray"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            {ele.price}
                          </Typography>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-0.5 h-4 w-4 text-yellow-700"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <Typography
                            color="gray"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            1,480
                          </Typography>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="-mt-px h-4 w-4 text-green-500"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <Typography
                            color="gray"
                            className="text-xs font-medium text-blue-gray-500"
                          >
                            Veritied
                          </Typography>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseGridContainer;
