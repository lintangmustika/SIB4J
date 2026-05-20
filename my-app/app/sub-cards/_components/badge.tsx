export default function Badge({name} : {name: string}) {
    return(
        <div className="rounded-full bg-blue-300 p-1 text-xs">
            <p>{name}</p>
        </div>
    )
}