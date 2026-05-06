export default function LearnPage() {
    return (
        <div className="bg-white h-screen flex text-blue-950">
            <div className="bg-purple-300 h-72 w-90 p-5 flex flex-col justify-between rounded-4x1">
                <div className="bg-orange-300 flex gap-5">
                    <img src={"/palette.svg"} alt="Icon Palette" />
                    <p>Design</p>
                </div>
                <div className="bg-blue-300">
                    <h1 className="text-4x1 font-bold">Figma</h1>
                    <p>8 Hours</p>
                </div>
            </div>
        </div>
    )
}