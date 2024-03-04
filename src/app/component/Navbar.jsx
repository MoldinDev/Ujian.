import Button from "@/app/component/NavButton";

export default function Navbar() {
    return (
        <>
        <div className="fixed left-0 top-0 bottom-0 lg:w-[300px] md:w-[250px] w-[150px] bg-[#F8F8F8]">
            <div>
                <h1 className="hover:animate-bounce select-none text-4xl p-8 font-bold flex items-center justify-center mb-4 cursor-default">Uji<span className="text-green-500">an.</span></h1>
            </div>
            <div>
            <Button label={'Home'} href={'/'}/>
            </div>
        </div>
        </>
    )
}