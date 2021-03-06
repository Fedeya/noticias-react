import React, { Component } from "react";
import PropTypes from "prop-types"

class Formulario extends Component{

  state = {
    category: "general"
  }

  changeCategory = e => {
    this.setState({
      category: e.target.value
    }, () => {
      this.props.consultarNoticias(this.state.category);
    });

  }

  render(){
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra Noticias por Categoria</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.changeCategory}>
                <option value="general">General</option>
                <option value="sports">Deportes</option>
                <option value="science">Ciencia</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
}

export default Formulario;