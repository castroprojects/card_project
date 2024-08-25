import React from "react";



function Card (props) {
    
    
    
    
    return (
        <>
            <div className="mx-auto min-h-screen max-w-screen-sm items-center justify-center">
                <div className="h-[200px] w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                    <div className="flex flex-wrap flex-col h-full w-full items-center justify-center bg-gray-800 ">
                        <div className="text-white w-full pl-10"><img src= {props.userimage} alt="" className="h-[100px] w-[150px]"/></div>
                        <div className="text-white pt-1">{props.username}</div>
                        <div className="text-white">{props.username} is my name.</div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Card;