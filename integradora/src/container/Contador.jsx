import React, {Component} from 'react'

export default class Contador extends Component {
    constructor(){
        super();
        this.state ={
            contador : 60
        }
    }
    

    componentDidMount() {
        this.contadorID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.contadorID);
      }
    
    componentDidUpdate(){
        if(this.state.contador <= 0){
            clearInterval(this.contadorID);
        }
    }


    tick() {
        let novocontador = this.state.contador - 1;
        this.setState({
          contador : novocontador
        });
    }
    
      
    render(){
        return(
        <div>
            <h2>{this.state.contador}</h2>
        </div>
        )
    }
}