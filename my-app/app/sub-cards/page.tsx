import Card from "./_components/card";

export default function CardsPage() {
    return(
         <div className="flex gap-2 justify-center items-center text-gray-800 h-screen">
            <Card
                title="Web Design"
                description="Web design Friendly"
                type="Explore"
            />
            <Card
                title="Web Design"
                description="Web design Friendly"
                type="Explore"
            />
            <Card
                title="Web Design"
                description="Web design Friendly"
                type="Explore"
            />
         </div>
    )
}