import "./App.css";

const welcomeText = <h1>Bienvenido a este sitio en desarrollo</h1>;
const elementTest = <h1>Hola</h1>;

function App() {
  const dateTest = "04-12-2023";
  const test = {
    id: "qwerty",
    event: "testeo",
  };
  return (
    <div className="App">
      <header>
        <h1>Hola desde React-App</h1>
        <h2>{test.id}</h2>
        <h2>{test.event}</h2>
        {elementTest}
        {welcomeText}
        <h3>{dateTest}</h3>
      </header>
    </div>
  );
}

export default App;
