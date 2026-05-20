export default function CardsPage() {
    return (
        <div className="bg-gray-200 min-h-screen p-12 flex flex-wrap items-center justify-center gap-4 text-black">

            <div className="bg-white p-2 rounded-2xl">
                <div className="bg-blue-100 flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl">
                    <h1 className="text-2xl font-bold">Web Design</h1>
                    <p>Crafts engaging, user-friendly websites.</p>
                    <div className="flex gap-2 flex-wrap">
                        <div className="rounded-full bg-blue-300 p-1 text-xs">
                            Landing page
                        </div>
                        <div className="rounded-full bg-blue-300 p-1 text-xs">
                            Website
                        </div>
                        <div className="rounded-full bg-blue-300 p-1 text-xs">
                            One Page
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-4 items-center">
                    <h2 className="font-bold">Explore</h2>
                    <button>
                        <img src={"/arrow-right.svg"} alt="Icon Arrow"/>
                    </button>
                </div>
            </div>

            <div className="bg-white p-2 rounded-2xl">
                <div className="bg-orange-100 flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl">
                    <h1 className="text-2xl font-bold">Graphic Design</h1>
                    <p>Creates impactful visuals and branding.</p>
                    <div className="flex gap-2 flex-wrap">
                        <div className="rounded-full bg-orange-200 p-1 text-xs">
                            Packaging
                        </div>
                        <div className="rounded-full bg-orange-200 p-1 text-xs">
                            Brand Identity
                        </div>
                        <div className="rounded-full bg-orange-200 p-1 text-xs">
                            Illustrations
                        </div>
                        <div className="rounded-full bg-orange-200 p-1 text-xs">
                            Logo
                        </div>
                        <div className="rounded-full bg-orange-200 p-1 text-xs">
                            Signage
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-4 items-center">
                    <h2 className="font-bold">Explore</h2>
                    <button>
                        <img src={"/arrow-right.svg"} alt="Icon Arrow"/>
                    </button>
                </div>
            </div>

            <div className="bg-white p-2 rounded-2xl">
                <div className="bg-purple-100 flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl">
                    <h1 className="text-2xl font-bold">Developers</h1>
                    <p>Builds functional and scalable solutions.</p>
                    <div className="flex gap-2 flex-wrap">
                        <div className="rounded-full bg-purple-300 p-1 text-xs">
                            Web Applications
                        </div>
                        <div className="rounded-full bg-purple-300 p-1 text-xs">
                            Mobile Apps
                        </div>
                        <div className="rounded-full bg-purple-300 p-1 text-xs">
                            Database
                        </div>
                        <div className="rounded-full bg-purple-300 p-1 text-xs">
                            Add-ons
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-4 items-center">
                    <h2 className="font-bold">Explore</h2>
                    <button>
                        <img src={"/arrow-right.svg"} alt="Icon Arrow"/>
                    </button>
                </div>
            </div>

            <div className="bg-white p-2 rounded-2xl">
                <div className="bg-green-100 flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl">
                    <h1 className="text-2xl font-bold">Copywriting</h1>
                    <p>Delivers persuasive and creative content.</p>
                    <div className="flex gap-2 flex-wrap">
                        <div className="rounded-full bg-green-300 p-1 text-xs">
                            Blog Posts
                        </div>
                        <div className="rounded-full bg-green-300 p-1 text-xs">
                            Video Scripts
                        </div>
                        <div className="rounded-full bg-green-300 p-1 text-xs">
                            Sales Pages
                        </div>
                        <div className="rounded-full bg-green-300 p-1 text-xs">
                            Slogans
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-4 items-center">
                    <h2 className="font-bold">Explore</h2>
                    <button>
                        <img src={"/arrow-right.svg"} alt="Icon Arrow"/>
                    </button>
                </div>
            </div>

        
        </div>
    )
}