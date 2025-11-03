import "./App.css";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";
import { WeatherProvider } from "./provider";

//7067467032ca1cdebb6937d70a4f9721

function App() {
  return (
    <WeatherProvider>
      <div className="grid place-items-center h-screen">
        <Header />
        <main>
          <section>
            <WeatherBoard />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;
