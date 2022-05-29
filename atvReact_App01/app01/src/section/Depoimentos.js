import React, { Component } from 'react';

class Depoimentos extends Component {
    constructor(props){
        super(props)
            this.state = {
                jsonDepoimentos :[],
                foto:"",
                nome:"",
                texto: ""
            }
    }


    render() {
        return (
            <section>
               <div class="linha container">
                   <div class="col-dm-3">Depoimentos 1</div>
                   <div class="col-dm-3">Depoimentos 2</div>
                   <div class="col-dm-3">Depoimentos 3</div>
                   <div class="col-dm-3">Depoimentos 4</div>
               </div>
            </section>
        );
    }
}

export default Depoimentos;
