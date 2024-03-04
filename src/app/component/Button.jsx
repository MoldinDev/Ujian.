export default function Button({title, onClick}) {
    return (
        <div>
            <button style={{fontFamily:"cursive"}} onClick={onClick} className="w-[150px] h-[40px] mt-4 bg-green-300 cursor-default hover:-translate-y-1 transition duration-200 hover:delay-0 hover:scale-105 hover:shadow-black hover:shadow-md border-solid border-black border-[3px] rounded-lg">
                {title}
            </button>
        </div>
    )
}