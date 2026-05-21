import Button from "./_component/button";

export default function Sidebarpages() {
    return(
        <main className="h-screen flex">
            <section className="w-96 bg-gray-700 p-4 h-full">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <div className="bg-blue-600 flex items-center justify-center rounded-2xl p-3">
                        <img src={"/file-stack.svg"} />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Acme Inc</h1>
                        <p>Enterprise</p>
                    </div>
                </div>
                <div className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-selector">
	                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
	                    <path d="M8 9l4 -4l4 4" />
	                    <path d="M16 15l-4 4l-4 -4" />
                    </svg>
                 </div>
            </div>
            <div className="mt-8">
                <p className="font-semibold text-gray-300">Platform</p>
            </div>

            <div className="p-2">
                <Button 
                icon= "/terminal-2.svg"
                name= "Playground"
                />
                <Button 
                icon= "/robot-face.svg"
                name= "Models"
                />
                <Button 
                icon= "/book.svg"
                name= "Documentation"
                />
                <Button 
                icon= "/adjustments-horizontal.svg"
                name= "Settings"
                />
            </div>
            </section>
        </main>
        
    )
}