import logo from './logo.svg';
import './App.css';

const nombre =  'carlitos';
const suma = (a,b)=>a+b;
const Caja = () => {
  return (<div><h1>soy {nombre} </h1><p>la suma es {suma(5,5)}</p></div>)
}

function App() {
  return (
    <Caja/>
  );
}

export default App;
