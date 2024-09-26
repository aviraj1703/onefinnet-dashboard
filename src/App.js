import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="Home">
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
