import express from "express"
import {getAllCourses} from "../controllers/courseController"

const courseRouter = express.Router()


courseRouter.get("/get-all-courses",getAllCourses)


export {courseRouter}