import React from "react";
import Footer from "../components/Footer";
import image from "../assets/ar2.jpeg"


const Product = () => {
    return (
        <div className="relative  bg-richblack-900">
            <div className="flex flex-row gap-[120px] mt-10 mr-[135px]">
                <div className="flex flex-col h-[1200px]">
                    <h1 className="text-white ml-[135px] text-4xl mb-[700px] ">Smart Locks</h1>
                    <button className="border-2 bg-white text-md w-[140px] py-[7px] px-[9px] ml-[135px] mt-[80px] rounded-lg absolute">View Service</button>
                </div>
                <img src={image} className="w-[850px] h-[550px] rounded-lg" />
            </div>
            <div className=" text-white rounded-lg">
                <h1 className="text-white">Full Home Painting</h1>
            </div>

            <Footer/>
        </div>

    )
}

export default Product