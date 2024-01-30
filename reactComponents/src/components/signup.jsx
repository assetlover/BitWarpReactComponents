import React from 'react';
const imagePath = ('/media/aditya/Data/learning coding/pbl6/BitWarpReactComponents/reactComponents/src/images/pexels-markus-spiske-1089438.jpg');
const headingonecss="mt-5 p-2 text-white font-bold text-4xl"
const cardcss="rounded-md shadow-md min-h-96 max-h-full min-w-96 max-w-96 bg-[#1F2229] flex flex-col justify-center p-5 shadow-[0px_0px_20px_5px_#000000]"
const inputcss="rounded mt-2 p-1 min-w-screen border-2"
const headingtwocss=" mt-3 text-lg text-white"
export default function Signup(){
    return <div className="bg-cover bg-center h-screen bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] min-h-screen min-w-screen flex flex-row items-center justify-center h-screen" >
            <div className={cardcss} >
                <div className=" mb-3 flex flex-col justify-center items-center">
                <p className={headingonecss}>Sign Up</p>
                <p className="p-2 text-white text-xl ">Create Your Account in 5 Simple Steps</p>
                </div>

            <p className={headingtwocss}>Name</p>
            <input className={inputcss} type="text" placeholder="jhon"/>
            <p className={headingtwocss}>Username</p>
            <input className={inputcss} type="text" placeholder="jhondoe"/>
            <p className={headingtwocss}>Email</p>
            <input className={inputcss} type="text" placeholder="jhondoe@example.com"/>
            <p className={headingtwocss}>Password</p>
            <input className={inputcss} type="text" />
            <button className="mt-10 p-2 bg-zinc-500 text-white text-2xl font-semibold  mt-5 rounded   w-full hover:bg-white hover:text-black ">Sign Up</button>
            <div className=" mt-2 flex flex-row items-center justify-center text-lg text-white">
                <p>Already a user?&nbsp;</p>
                <a className="underline underline-offset-1 hover:text-[#0ADD08]" href="linkhere"> login</a>
            </div>
            
            </div>
    </div>
}