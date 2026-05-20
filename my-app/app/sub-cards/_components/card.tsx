import Badge from "./badge";
import Button from "./button";

export default function Card({
    title,
    description,
    type,
} : {
    title: string;
    description: string;
    type: string;
}) {
    return(
        <div className="bg-white p-2 rounded-2xl">
                <div className="bg-blue-100 flex flex-col gap-3 w-72 h-auto p-4 rounded-2xl">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p>{description}</p>
                    <div className="flex gap-2 flex-wrap">
                        <Badge name="Web Apps" />
                        <Badge name="Web Apps" />
                        <Badge name="Web Apps" />
                        <Badge name="Web Apps" />
                        <Badge name="Web Apps" />
                    </div>
                </div>
                <div className="flex justify-between p-4 items-center">
                    <h2 className="font-bold">{type}</h2>
                    <Button />
                </div>
        </div>
    )
}