import React, { Component } from 'react';
import Depoimento from './box/Depoimento';
import Dados from "../dados.json";


class Depoimentos extends Component {
    constructor(props){
        super(props)
            this.state = 
                Dados
            
    }


    render() {
        return (
            <section>
               <div class="linha container">
                   <div class="col-dm-3">
                       <Depoimento 
                        name={this.state.nomeVetJson[0].name}
                        picture={this.state.nomeVetJson[0].picture}
                        text={this.state.nomeVetJson[0].text}
                       />
                   </div>

                   <div class="col-dm-3">
                       <Depoimento
                        name={this.state.nomeVetJson[1].name}
                        picture={this.state.nomeVetJson[1].picture}
                        text={this.state.nomeVetJson[1].text}
                       />
                   </div>

                   <div class="col-dm-3">
                       <Depoimento
                        name={this.state.nomeVetJson[2].name}
                        picture={this.state.nomeVetJson[2].picture}
                        text={this.state.nomeVetJson[2].text}
                       />
                   </div>

                   <div class="col-dm-3">
                       <Depoimento
                        name={this.state.nomeVetJson[3].name}
                        picture={this.state.nomeVetJson[3].picture}
                        text={this.state.nomeVetJson[3].text}
                       />
                   </div>

               </div>
            </section>
        );
    }
}

export default Depoimentos;
