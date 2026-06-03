import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <section className="flex h-screen w-full bg-gray-100">
      
      <div className="w-64 border-r-1 border-r-gray-400">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Dashboard />
      </div>

    </section>
  );
}

export default App;