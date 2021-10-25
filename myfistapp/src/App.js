import './App.css';
import React from 'react';

class HelloWorld extends React.Component
{

  state ={
    show:true  
  }
  
  cambiarMostrar = () => this.setState({show: !this.state.show})
  

  render(){ 
    if(this.state.show){  
      return(
      
      <div  id = "hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.mytext}
        <button onClick={this.cambiarMostrar }>Cambiar mostrar</button>
      </div>
      );
    }else{
      return(
        <h1> No hay componente
          <button onClick={this.cambiarMostrar}> a </button>
        </h1>
      );
    }
  }

}



function App() {
  return (
    <div >This is my component: 
      <HelloWorld mytext="Hello World" subtitle="lorem ipsum"/> 
      <HelloWorld mytext="HOLA MUNDO" subtitle="shalala shalala"/> 
      <HelloWorld mytext="Ohaio Sekai" subtitle="darken zoutto"/> 
      </div>
  );
}

export default App;
