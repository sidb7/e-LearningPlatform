import { useEffect, useState } from "react";
import CourseCards from "./CourseCards";
import "./css/CourseGridContainer.css"


import { Card, Carousel } from "flowbite-react";


const fetchCourseData = async () => {
    const response = await fetch("https://localhost:3001/course/get-all-courses", {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    })
    if (response.ok) {
        const data = await response.json()
        console.log(data.data, "ARRAY DATA")
        return data.data
    } else {
        const errData = response.json();
        console.log(errData.message, "ERRROR")
    }
}



function CourseGridContainer() {

    const [courseData, setCourseData] = useState([])
    useEffect(() => {
        console.log(fetchCourseData(), "FETCCHHC")
        fetchCourseData().then((data) => {
            setCourseData(data)
        })

    }, [])

    const carouselCustomTheme = {
        "control": {
            "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-400 group-hover:bg-neutral-200 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-8 sm:w-8",
            "icon": "h-5 w-5  sm:h-6 sm:w-6"
        },

    };
    const cardCustomTheme = {
        "img": {
            "base": "h-42 w-100 mb-0 pb-0",

        }
    }
    return (
        <>


            <div class="p-2 sm:ml-64 w-full  px-5">
                <div class="p-1 w-full mt-14">



                    <div className="h-56 sm:h-64 mb-4 xl:h-80 2xl:h-96 mt-3">
                        <Carousel theme={carouselCustomTheme} pauseOnHover>
                            {/* <img src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/62fbb642c7807d3f3544f97a_Carousel%20Design%20Thumbnail%2016x9.webp" alt="..." /> */}
                            <img src="https://car-brand-assets-web.s3.us-west-1.amazonaws.com/Open+Graph/Carousel_Training.jpg" alt="..." />
                            <img src="https://stylemixthemes.com/wp/wp-content/uploads/sites/2/2023/04/Blog-6.jpg" alt="..." />
                            {/* <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
                        </Carousel>
                    </div>
                    <h1 className="font-bold font-serif text-3xl my-2 ps-3">All the skills you need in one place.</h1>
                    <p className="font-normal text-gray-500 font-sans text-lg ps-3">From critical skills to technical topics, <span className="text-black font-semibold font-serif text-xl">Grad<span className="text-violet-600 font-serif">e</span>l</span> supports your professional development.</p>


                    <div class="inline-flex rounded-md shadow-sm justify-center w-full my-6 gap-3 overflow-scroll no-scrollbar" role="group">
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Data Science
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500 hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Advance Coding
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Machine Learning
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Deep Learning
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Artificial Inteliigence
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Python
                        </button>
                        <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-b hover:border-violet-500  hover:text-violet-700 focus:z-10 focus:ring-2 focus:ring-violet-700 focus:text-violet-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                            Bussiness
                        </button>
                    </div>


                    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-5 mb-4">

                        {console.log(courseData, "CORRRRddd")}
                        {courseData.map(ele => {
                            return (<div class=" flex items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800">
                                <Card
                                    className=" min-w-md cursor-pointer"
                                    imgSrc={ele.thumbnails[0]}
                                    theme={cardCustomTheme}
                                >
                                    <h5 className="mt-0 pt-0 font-bold font-serif line-clamp-2 h-11  tracking-tight text-gray-900 dark:text-white">
                                        {ele.name}
                                    </h5>
                                    <p className="line-clamp-2 text-sm">
                                        {ele.description}
                                    </p>

                                    <p className="font-bold  text-gray-700 dark:text-gray-400">
                                        RS: {ele.price}
                                    </p>
                                </Card>
                            </div>)
                        })


                        }


                    </div>

                </div>
            </div>



        </>
    )
}

export default CourseGridContainer;