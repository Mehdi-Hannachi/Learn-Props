import "./App.css";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { team } from "./data";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <NavigationBar />
      <Dashboard team={team} />
      <Footer />
    </div>
  );
}

export default App;
