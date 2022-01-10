import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className=" flex relative h-full min-h-screen">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
