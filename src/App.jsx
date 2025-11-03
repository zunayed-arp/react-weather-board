import "./App.css";
import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

//7067467032ca1cdebb6937d70a4f9721

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
