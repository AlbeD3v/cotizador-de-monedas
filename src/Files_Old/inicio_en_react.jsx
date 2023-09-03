import './App.css';
import './miCss.css';
import imagen from "./git.png";


function App() {
  let nombre=[{nombre:"jab",edad:18},{name:"Pedrin",edad:128}];
  let caja=<div>Nombre</div>;
  return (
    <div className="fondo">
    <h1> {nombre[1].name} </h1>
    <img src={imagen} className="im"/>
    <input value={nombre} />
    <div>{caja}</div>
    <br />
    </div>
  );
}

export default App;
