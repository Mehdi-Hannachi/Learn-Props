import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { team } from "./data";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Dashboard team={team} >
        {/* children props */}

        {"Title Image"}
        <img
          src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"
          alt=""
          width="20px"
          height="20px"
        />

        
      </Dashboard>
      <Footer />
    </div>
  );
}

export default App;
