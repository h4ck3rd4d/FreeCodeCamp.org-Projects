import Navbar from "./navbar";
import Hero from "./hero";
import History from "./history";
import Members from "./members";
import Albums from "./albums";

function App() {
  return (
    <div className='App'>
      <Hero />
      <Navbar />
      <History />
      <h2 id='members' style={{ textAlign: "center" }}>
        Members
      </h2>
      <Members />

      <Albums />
    </div>
  );
}

export default App;
