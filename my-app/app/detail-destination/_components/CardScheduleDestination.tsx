import Button from "./button"

export default function CardScheduleDestination({
    time1,
    code1,
    destinationtime,
    time2,
    code2,
    harga
} : {
    time1: string
    code1: string
    destinationtime: string
    time2: string
    code2: string
    harga: string
}) {
    return(
        <div className="bg-white rounded-3xl border border-gray-200">
            <div className="p-6 flex items-center justify-between">
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center">
                            <img src={"/citilink-logo.jpg"} alt="Logo Citilink" />
                        </div>
                        <div className="flex items-center gap-2 text-black">
                            <h1 className="text-2xl font-bold">
                                Citilink
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase">
	                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                            <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
                            </svg>
                        </div>
                    </div>

                    <div className="bg-green-100 text-green-600 px-3 py-1 rounded-md w-fit text-sm">
                        Bisa reschedule & refund
                    </div>
                </div>

                <div className="flex items-center gap-10">
                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-black">
                            {time1}
                        </h1>
                        <p className="text-gray-400 text-sm">
                            {code1}
                        </p>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-400">
                            {destinationtime}
                        </p>
                        <div className="w-28 h-2 bg-gray-400 my-2"></div>
                        <p className="text-gray-400">
                            1 transit
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-3xl font-bold text-black">
                            {time2}
                        </h1>
                        <p className="text-gray-400 text-sm">
                            {code2}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <p className="text-gray-400 text-sm">
                        Setelah cashback
                    </p>
                    <div className="flex items-end">
                        <h1 className="text-5xl font-bold text-red-500">
                            {harga}
                        </h1>
                        <p className="text-gray-400 text-xl mb-1">
                            /pax
                        </p>
                    </div>
                </div>

            </div>

             <div className="border-t border-gray-200 px-6 py-5 flex items-center justify-between">
                <p className="text-black">
                    Info Transit di sini
                </p>
                <Button />
            </div>

        </div>
    )
}