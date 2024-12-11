import { Request, Response } from "express";
import { Course } from "../database/models/courseModel";
import catchAsync from "../utlis/catchAsync";



const getAllCourses = catchAsync( async(req:Request,res:Response)=>{

    const allCourses = await Course.find()
    // console.log(allCourses,"ALL COURSES")
    res.json({data:allCourses})


})

export {getAllCourses}