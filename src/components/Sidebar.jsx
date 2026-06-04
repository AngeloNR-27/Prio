import { useState } from "react";
import { 
    SquareCheckBig,
     LayoutDashboard, 
     ListChecks, 
     CircleCheck, 
     Settings, 
     LogOut 
    } from "lucide-react";

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="h-screen flex flex-col">

      <div className="flex items-center gap-2 border-b border-gray-300 pl-8 py-4 mb-10">
        <SquareCheckBig className="bg-[#666dfc] p-2 w-8 h-8 rounded-xl text-white" />
        <span className="font-bold text-[16px] text-gray-950">Prio</span>
      </div>

      <nav className="flex flex-col gap-2 text-gray-600">

        <a
          href="#"
          onClick={() => setActive("dashboard")}
          className={`flex gap-2 pl-4 py-2 rounded-2xl mx-4 ${
            active === "dashboard" ? "bg-[#e9eff9]" : ""
          }`}
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </a>

        <a
          href="#"
          onClick={() => setActive("active")}
          className={`flex gap-2 pl-4 py-2 rounded-2xl mx-4 ${
            active === "active" ? "bg-[#e9eff9]" : ""
          }`}
        >
          <ListChecks />
          <span>Active tasks</span>
        </a>

        <a
          href="#"
          onClick={() => setActive("completed")}
          className={`flex gap-2 pl-4 py-2 rounded-2xl mx-4 ${
            active === "completed" ? "bg-[#e9eff9]" : ""
          }`}
        >
          <CircleCheck />
          <span>Completed</span>
        </a>

        <a
          href="#"
          onClick={() => setActive("settings")}
          className={`flex gap-2 pl-4 py-2 rounded-2xl mx-4 ${
            active === "settings" ? "bg-[#e9eff9]" : ""
          }`}
        >
          <Settings />
          <span>Settings</span>
        </a>

      </nav>
      
      <div className="flex gap-2 items-center justify-around p-4 border-t-1 border-t-gray-400 mt-auto">
        <div className="bg-[#666dfc] w-10 h-10 flex items-center text-white justify-center rounded-full">
            AR
        </div>
        <div className="text-sm text-gray-400">
            <div className="text-gray-600">Angelo Rabetsimba</div>
            <div>angelo@prio.app</div>
        </div>
        <div>
            <LogOut className="text-gray-600"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;