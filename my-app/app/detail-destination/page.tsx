import CardScheduleDestination from "./_components/CardScheduleDestination";
import DatelistPages from "./_components/datelist";

export default function WebPages() {
    return(
        <div className="bg-white min-h-screen">

            <div className="px-20 mt-5 flex items-center justify-center overflow-x-auto"> 
                <DatelistPages 
                date="Rab, 20 Mei 2026"
                price="IDR 4.156.740"
                />
                <DatelistPages 
                date="Kam, 21 Mei 2026"
                price="IDR 3.723.573"
                />
                <DatelistPages 
                date="Jum, 22 Mei 2026"
                price="IDR 3.510.124"
                />
                <DatelistPages 
                date="Sab, 23 Mei 2026"
                price="IDR 3.945.431"
                />
                <DatelistPages 
                date="Min, 24 Mei 2026"
                price="IDR 3.510.124"
                />
                <DatelistPages 
                date="Sen, 25 Mei 2026"
                price="IDR 3.510.124"
                />
                <DatelistPages 
                date="Sel, 26 Mei 2026"
                price="IDR 3.961.423"
                />
            </div>

               <div className="px-20 mt-5 flex items-center gap-4">

                <button className="bg-white flex items-center border border-gray-400 px-6 py-3 rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-filter">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M20 3h-16a1 1 0 0 0 -1 1v2.227l.008 .223a3 3 0 0 0 .772 1.795l4.22 4.641v8.114a1 1 0 0 0 1.316 .949l6 -2l.108 -.043a1 1 0 0 0 .576 -.906v-6.586l4.121 -4.12a3 3 0 0 0 .879 -2.123v-2.171a1 1 0 0 0 -1 -1z" />
                    </svg>
                    Filter
                </button>

                <button className="bg-white flex items-center border border-gray-400 px-6 py-3 rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-filter-2">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M4 6h16" />
	                    <path d="M6 12h12" />
	                    <path d="M9 18h6" />
                    </svg>
                    Urutkan
                </button>

                <button className="bg-white flex items-center border border-gray-400 px-6 py-3 rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plane-departure">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M14.639 10.258l4.83 -1.294a2 2 0 1 1 1.035 3.863l-14.489 3.883l-4.45 -5.02l2.897 -.776l2.45 1.414l2.897 -.776l-3.743 -6.244l2.898 -.777l5.675 5.727" />
	                    <path d="M3 21h18" />
                    </svg>
                    Transit
                </button>

                <button className="bg-white flex items-center border border-gray-400 px-6 py-3 rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-plane-inflight">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M15 11.085h5a2 2 0 1 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3l4 7" />
	                    <path d="M3 21h18" />
                    </svg>
                    Maskapai
                </button>

                <button className="bg-white border flex items-center border-gray-400 px-6 py-3 rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-1">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
	                    <path d="M12 7v5" />
	                    <path d="M12 12l2 -3" />
                    </svg>
                    Waktu
                </button>

            </div>

            <div className="px-20 mt-8 flex flex-col gap-5 pb-10">
                <CardScheduleDestination 
                time1="06:10"
                code1="BPN"
                destinationtime="15j 55m"
                time2="21:05"
                code2="KNO"
                harga="IDR 3.732.537"
                />
                <CardScheduleDestination 
                time1="11:55"
                code1="BPN"
                destinationtime="10j 10m"
                time2="21:05"
                code2="KNO"
                harga="IDR 3.801.503"
                />
                <CardScheduleDestination 
                time1="11:55"
                code1="BPN"
                destinationtime="11j 33m"
                time2="22:30"
                code2="KNO"
                harga="IDR 3.801.503"
                />
            </div>

        </div>
    )
}