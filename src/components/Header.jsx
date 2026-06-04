import { Plus } from "lucide-react"

function Header(){
    return(
        <>
        <div className="flex justify-between px-6 items-center">

            <h1 className="text-gray-950  text-lg">
                Task Dashboard
            </h1>
            <div className="flex gap-2 text-sm">
                <input type="text" placeholder="Filter tasks..." className="bg-white shadow-md px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#666dfc]"/>
                <button className="bg-[#666dfc] flex gap-2 items-center px-2 py-1 rounded-xl text-white text-[12px]">
                    <Plus className="w-4 h-4"/>
                    <span>New Task</span>
                </button>
            </div>

        </div>
        </>
    )
}
export default Header