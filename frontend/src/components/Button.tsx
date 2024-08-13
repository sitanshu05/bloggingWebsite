
export const Button = ({onClick,text}:{onClick:()=>void,text:string}) => {
    return (
        <button onClick={onClick} className="bg-black text-white px-4 py-2 rounded-lg w-full">
            {text}
        </button>
    )
}
