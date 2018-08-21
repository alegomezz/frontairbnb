import React, {Component} from 'react';
import './jumbotron.scss';

class Jumbotron extends Component {
    render(){
        return(
            <section className="jumbotron">
                <h1 className= "display-3"> Bienvenido al clon de airbnb</h1>
                <hr className="my-4"/>
                <p> Busca propiedades en cualquier parte del mundo </p>
                <form action="" className="form-inline justify-content-center">
                    <label className="sr-only" htmlFor="search"> Busqueda:</label>
                    <div className="row">
                    </div>
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                        <input type="search" name="search" id="search"
                        className="form-control py-2" placeholder="casa en miami"/>
                    </div>
                    <button type="button" className="btn btn-search my-2">Buscar</button>
                </form>
            </section>
        )
    }


}

export default Jumbotron;