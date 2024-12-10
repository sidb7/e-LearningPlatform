import CourseCards from "./CourseCards";
import "./css/CourseGridContainer.css"


import { Card, Carousel } from "flowbite-react";
let ar = [1, 2, 3, 4]

function CourseGridContainer() {
    const array = [{ img: "https://img.freepik.com/free-psd/e-learning-template-design_23-2151081798.jpg" },
    { img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg" },
    { img: "https://i.ytimg.com/vi/QAz2_3ceCvw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDlUcEXuef_gq3iZNC-gwVKchz3iQ" },
    { img: "https://img-c.udemycdn.com/course/750x422/3468752_3eb1.jpg" },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGEviftUo6xjhcts-P__LV3IbqXZhtMvl5A&s" },
    { img: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/323404125/original/9243f54d235e979db24dafc4080c51a1c63825c3/design-online-course-thumbnail-udemy-course-cover-image.png" },

    ]

    const carouselCustomTheme = {
        "control": {
            "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-400 group-hover:bg-neutral-200 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-8 sm:w-8",
            "icon": "h-5 w-5  sm:h-6 sm:w-6"
        },

    };
    const cardCustomTheme = {
        "img": {
            "base": "h-42 w-100",
           
        }
    }
    return (
        <>


            <div class="p-2 sm:ml-64 w-full ">
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


                    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-5 mb-4">


                        {array.map(ele => {
                            return (<div class=" flex items-center justify-center h-fit rounded bg-gray-50 dark:bg-gray-800">
                                <Card
                                    className=" min-w-md"
                                    imgSrc={ele.img}
                                    theme={cardCustomTheme}
                                >
                                    <h5 className=" font-bold h-10 xl:overflow-visible lg:overflow-visible  md:overflow-clip   sm:overflow-clip  tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                  
                                    <p className="font-normal  text-gray-700 dark:text-gray-400">
                                       RS: 400
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