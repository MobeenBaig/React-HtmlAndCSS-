import React from "react"


const Netflix = () => {




    return (




        <div className="h-screen w-full bg-black">
            <div className=" bg-netflix-bg h-screen w-full ">
                <div className="bg-black h-screen w-full  bg-opacity-60">

                    <div className=" h-20 bg-black w-full flex bg-opacity-10 border-none ">
                        <p className="text-red-500 font-medium  justify-start smm: pl-8 sm:pl-8 md:pl-8 lg:pl-40 smm:pt-6 sm:pt-6 md:pt-5 lg:pt-4 smm:text-3xl sm:text-3xl md:text-5xl lg:text-5xl contrast-125 ">NETFLIX</p>
                        <span className="justify-end h-8  w-full flex mt-7 "> <button className=" smm:mr-8 sm:mr-8 md:mr-8 lg:mr-40 text-white smm:text-sm sm:text-xl md:text-xl lg:text-xl font-sans font-semibold contrast-125 bg-red-600 hover:bg-red-500  px-4 rounded">Sign In</button> </span>

                    </div>
                    <div className="h-5/6 w-full text-white justify-center content-center items-center grid">

                        <div className=" smm:text-3xl sm:text-3xl justify-center items-center text-center  grid md:text-5xl lg:text-5xl font-bold ">Unlimited movies, TV shows, and more</div>
                        <span className="justify-center items-center text-center grid mt-5 smm:font-medium sm:font-medium md:font-normal lg:font-normal  smm:text-2xl  sm:text-2xl md:text-2xl lg:text-2xl ">Watch anywhere. Cancel anytime.</span>
                        <span className="justify-center items-center text-center grid mt-5 smm:font-medium sm:font-medium md:font-normal lg:font-normal smm:text-2xl sm:text-2xl md:text-2xl lg:text-2xl  ">Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className=" justify-center items-center text-center smm:grid sm:grid md:flex lg:flex sm:text-sm md:text-2xl lg:text-2xl text-white mt-4 ">

                            <input type="text" placeholder="Email Address" className="p-2 bg-transparent border-2 border-red-600 text-center grid rounded smm:px-0 sm:px-0 md:px-8 lg:px-8 " />

                            <button className="font-semibold contrast-125 p-3 justify-center items-center grid smm:mt-2 sm:mt-2 md:mt-0 lg:mt-0  mt-2 rounded smm:ml-0 sm:ml-0 md:ml-2 lg:ml-2 smm:px-0 sm:px-0 md:px-8 lg:px-8 bg-red-600 text-white hover:bg-red-500">Get Started &gt;</button>

                        </div>

                    </div>




                </div>

            </div>
            <div className="h-2 w-full bg-green-400 flex "></div>

            <div className=" bg-black smm:grid sm:grid md:flex lg:flex smm:h-screen sm:h-screen md:h-4/5 lg:h-4/5 w-full space-x-8 justify-center content-center items-center ">

                <div className=" h-4/5 w-auto grid  text-white px-2  content-center">
                    <div className=" text-5xl font-bold">Enjoy on your TV</div>

                    <div className=" text-2xl pt-5 ">Watch on Smart TVs, Playstation, Xbox,</div>

                    <div className=" text-2xl  ">Chromecast, Apple TV, Blu-ray players, and more.</div>
                </div>

                <div className="relative grid justify-center">
                    <img
                        // height={500}
                        // width={500}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        className="relative h-96 w-96"
                        alt="TV Image"

                    />
                    {/* <div className="absolute top-0 left-0 w-60  h-60 ml-12 mt-9  flex justify-center  items-center">
        <video
            src="https://static.vecteezy.com/system/resources/previews/046/576/138/mp4/model-of-new-smartphone-on-isolated-background-design-3d-model-of-new-smartphone-rotates-on-isolated-background-stylish-smartphone-with-beautiful-reflection-free-video.mp4"
            className="h-fit w-fit "
            autoplay
            loop
            muted
        ></video>
    </div> */}
                </div>
            </div>

            <div className="h-2 w-full bg-green-400 flex "></div>



            <div className=" bg-black smm:grid sm:grid md:flex lg:flex h-4/5 w-full space-x-8 justify-center content-center items-center ">





                <div className=" smm:hidden sm:hidden md:block lg:block">
                    <img
                        // height={300}
                        // width={350}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        className=" smm:h-56 sm:h-56 md:h-96 lg:h-96 smm:w-96 sm:w-96 md:w-full lg:w-full"
                        alt="TV Image"

                    />
                </div>


                <div className=" h-4/5 w-auto grid  text-white px-2  content-center">
                    <div className=" smm:text-2xl sm:text-5xl md:text-5xl lg:text-5xl font-bold">Download your shows</div>

                    <div className="smm:text-2xl sm:text-5xl md:text-5xl lg:text-5xl font-bold ">to watch offline</div>

                    <div className=" smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl pt-4 ">Save your favorites easily and always have</div>
                    <div className=" smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl  ">something to watch.</div>
                </div>


                <div className=" smm:grid sm:grid md:hidden lg:hidden justify-center items-center content-center">
                    <img
                        height={500}
                        width={300}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        // className=" smm:h-32 sm:h-56 md:h-96 lg:h-96 smm:w-3 sm:w-96 md:w-full lg:w-full"
                        alt="TV Image"

                    />
                </div>

            </div>
            <div className="h-2 w-full bg-green-400 flex "></div>


            <div className="h-full w-full  bg-black grid  justify-center    ">



                <div className=" h-full smm:w-60  sm:w-96 md:w-full lg:w-full ">

                    <p className="text-white smm:text-2xl sm:text-4xl md:text-5xl lg:text-5xl sm:px- md:px-28 lg:px-48 font-bold mt-5 ml-2  "> Frequently Asked Questions </p>
                    <div className="text-white smm:py-5 sm:py-6 md:py-6 lg:py-6 smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl   font-medium    bg-zinc-700 hover:bg-zinc-600  bg-opacity-75 cursor-pointer  pl-6  mt-7 font-sans">What is Netflix ? </div>
                    <div className="text-white smm:py-5 sm:py-6 md:py-6 lg:py-6  smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl   font-medium    bg-zinc-700 bg-opacity-75 hover:bg-zinc-600  cursor-pointer   mt-2  pl-6 "> How Much Does Netflix Cost? </div>
                    <div className="text-white smm:py-5 sm:py-6 md:py-6 lg:py-6  smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl   font-medium    bg-zinc-700 bg-opacity-75 hover:bg-zinc-600  cursor-pointer  mt-2 pl-6">Where Can i Watch?</div>
                    <div className="text-white smm:py-5 sm:py-6 md:py-6 lg:py-6  smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl   font-medium    bg-zinc-700 bg-opacity-75 hover:bg-zinc-600  cursor-pointer  mt-2  pl-6"> How Do i Cancel? </div>
                    <div className="text-white smm:py-5 sm:py-6 md:py-6 lg:py-6 smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl   font-medium    bg-zinc-700 bg-opacity-75 hover:bg-zinc-600  cursor-pointer  mt-2 pl-6">What Can i Watch On Netflix?</div>
                    <div className="text-white smm:py-5 sm:py-6 md:py-6 lg:py-6  smm:text-xl sm:text-2xl md:text-2xl lg:text-2xl   font-medium    bg-zinc-700 bg-opacity-75 hover:bg-zinc-600 cursor-pointer mt-2 pl-6">Is Netflix Good For Kids?</div>
                </div>




            </div>


        </div>






    )
}

export default Netflix
