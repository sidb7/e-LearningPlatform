import CourseGridContainer from "./CourseGridContainer"
import VerticalNav from "./VerticalNav"


const Dashboard =()=>{
    return (

        <>

            <div className="flex">
                <VerticalNav/>
                <CourseGridContainer/>

            </div>
        
        </>
    )
}

export default Dashboard