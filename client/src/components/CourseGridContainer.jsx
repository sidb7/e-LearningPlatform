import CourseCards from "./CourseCards";
import "./css/CourseGridContainer.css"

let ar = [1, 2, 3, 4]

function CourseGridContainer() {
    return (
        <div className="CourseGridContainer">
            <p>Top courses you may like . . .</p>
            <div className="CourseGridWrapper">
                {
                    ar.map(() => {
                        return (
                            <div><CourseCards /></div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CourseGridContainer;