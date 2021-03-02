import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// var nombre = 'Rosa';
// var nombre = 'Eliana';

// variables
let nombre = 'Rosa';
nombre = 'Elinaa';
console.log(nombre);

// constantes
const colegio= 'don bosco';
console.log(colegio);

//Arrow functions(funciones flecha)

// setTimeout(() => {
//   console.log('2 segundos');
// }, 2000)

var miFuncion = function (){
  console.log('mi funcion');
};

const miFuncionFlecha = ()=>{
  console.log('mi funcion flecha');
};

miFuncion();
miFuncionFlecha();

const suma = (a,b) => a+b;

const numeros = [2,4,1,5];
const menor = numeros.find( (e) => e == 1);
console.log('el numero es:' + menor);

//Desestructuracion en es6 (destructuring)

const persona1 = {
  nombre: 'Ricardo',
  apellido: "Lopez",
  cursos: {
    backend: 'laravel',
    front: 'react',
    devops: {
      entornos:['docker', 'vagrant', 'etc']
    }
  },

}
//ejemplo
const {cursos:{devops:{entornos}}} = persona1;

// console.log(persona1.cursos.devops.entornos[0]);
console.log(entornos[0]);

//spread operators(operadores de propagacion)
const numeros1 = [2,4,1,5];
const numeros2 = [3,6,7,8];
// for( let i=0; i<numeros2.length; i++){
//   numeros1[numeros1.length + i] = numeros2[i];
// }
// ejemplo
const numeros3 = [...numeros1, ...numeros2];

console.log(numeros3);
const auto1 ={
  marca: 'bmw',
  modelo: 1995,
}

const bicicleta = {
  anio: 1990,
  pasajeros: 2
}

const auto1YBicicleta = {...auto1, ...bicicleta}
console.log(auto1YBicicleta);

const sumaNumeros = [4,5];
const suma2= (a,b)=> a+b;

console.log("suma2: "+suma2(...sumaNumeros));

// Template literal(literales template)

// console.log("suma2 : ${suma2(...sumaNumeros)}");


// clases POO
class Auto {
  constructor(marca){
    this.marca = marca;
  }
  mostrarMarca(){
    console.log('la marca es:',this.marca);
  }
}

const auto = new Auto('BMW');
auto.mostrarMarca();

class Auto2 extends Auto {
  constructor(marca, modelo){
    super(marca);
    this.modelo = modelo;
  }

  mostrarMarcaModelo(){
    console.log('la marca es: '+ this.marca + ' el modelo es: ', this.modelo)
  }
}


const auto2 = new Auto2('TOYOTA', 2013);
auto2.mostrarMarcaModelo();





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
