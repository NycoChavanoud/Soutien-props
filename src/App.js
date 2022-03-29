import "./App.css";
import Cube from "./Cube";

function App() {
  return (
    <div className="App">
      <Cube name="ItemA" color="blue" width={150} height={150} />
      <Cube name="ItemB" color="red" width="150px" height="150px" rounded />
      <Cube name="ItemC" color="green" width="100px" height="100px" />
      <Cube name="ItemD" color="Yellow" width="200px" height="200px" rounded />
    </div>
  );
}

export default App;
