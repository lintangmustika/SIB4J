export default function Task2Page() {
    return (
        <div className="bg-white min-h-screen p-12 flex flex-wrap items-center justify-center relative">

            <div className="absolute top-10 left-10 text-gray-400">
                <svg width="40" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 15l4-12 4 12" />
                    <path d="M4 15l4 10 4-10 4 10 4-10" />
                </svg>
            </div>

            <div className="grid grid-cols-6 gap-6 w-full max-w-5xl">

            <div className="bg-blue-100 col-span-3 h-72 p-7 flex flex-col justify-between rounded-4xl text-blue-950 relative">
                <div className="flex gap-3 items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
	                    <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	                    <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	                    <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">Adobe Photoshop</h1>
                    <p className="text-sm font-medium">In 3 days</p>
                    <div className="flex -space-x-3 absolute bottom-4 right-8">
                        <img src={"/avatar1.jpg"} alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                        <img src={"/avatar2.jpg"} alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <img src={"/avatar3.jpg"} alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-[10px] font-extrabold">
                            9+
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green-100 col-span-3 h-72 p-7 flex flex-col justify-between rounded-4xl text-green-950 relative">
                <div className="flex gap-3 items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-star absolute right-8">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-terminal-2">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M8 9l3 3l-3 3" />
	                    <path d="M13 15l3 0" />
	                    <path d="M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -12" />
                    </svg>
                    <p>AI</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">DALL·E 2, Midjourney, Stable Diffusion</h1>
                    <p className="text-sm font-medium">In 5 days</p>
                    <div className="flex -space-x-3 absolute bottom-4 right-8">
                        <img src={"/avatar1.jpg"} alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>
                        <img src={"/avatar2.jpg"} alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <img src={"/avatar3.jpg"} alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                        <div className="w-8 h-8 rounded-full border-2 border-white bg-green-200 flex items-center justify-center text-[10px] font-extrabold">
                            3+
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-purple-200 col-span-2 h-72 p-7 flex flex-col justify-between rounded-4xl text-purple-950">
                <div className="flex gap-3 items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
	                    <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	                    <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	                    <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">Figma</h1>
                    <p className="text-sm font-medium">8 hours ago</p>
                </div>
            </div>

            <div className="bg-orange-100 col-span-2 h-72 p-7 flex flex-col justify-between rounded-4xl text-orange-800">
                <div className="flex gap-3 items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M7 8l-4 4l4 4" />
	                    <path d="M17 8l4 4l-4 4" />
	                    <path d="M14 4l-4 16" />
                    </svg>
                    <p>Codding</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">Python</h1>
                    <p className="text-sm font-medium">2 days ago</p>
                </div>
            </div>

            <div className="bg-pink-100 col-span-2 h-72 p-7 flex flex-col justify-between rounded-4xl text-pink-950">
                <div className="flex gap-3 items-center font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
	                    <path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	                    <path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
	                    <path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    </svg>
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">Sketch</h1>
                    <p className="text-sm font-medium">4 days ago</p>
                </div>
            </div>
            </div>

            <div className="absolute bottom-10 right-10 text-gray-400 text-sm font-medium">
                Day 020 / 365
            </div>
        </div>
    )
}