import './App.css';
import './miCss.css';
import imagen0 from "./images/rey_atanagildo.png";
import imagen1 from "./images/rey_leogivildo.png";
import imagen2 from "./images/rey_sisebuto.png";


function App() {

  let nombres=["Atanagildo","leogivildo","Sisebuto"]
  const cambiarTexto=(e)=>{
    if(e.target.innerHTML=="Visto"){
      e.target.innerHTML="";
    } else {
      e.target.innerHTML="Visto";
    }
  }

  return (
    <div className="contenedor">
      <div className="caja">
        <img src={imagen0} />
        <div onClick={cambiarTexto}className="nombre">{nombres[0]}</div>
      </div>
      <div className="caja">
        <img src={imagen1} />
        <div className="nombre">{nombres[1]}</div>
      </div>
      <div className="caja">
        <img src={imagen2} />
        <div className="nombre">{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
