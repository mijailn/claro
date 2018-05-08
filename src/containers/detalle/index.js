import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPelicula } from 'Modules/home';
import { bindActionCreators } from 'redux';

export class DetallePelicula extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPelicula(id);
  }
  render() {
    const {
      common = {},
      external = { gracenote: { genres: [], cast: [] } }
    } = this.props.pelicula;
    return (
      <div className="detalle-pelicula margin-v-xl">
        <h1>{common.title}</h1>
        <div style={{ display: 'flex' }}>
          <div className="detalle-bloque">
            <img alt={common.title} className="detalle-imagen" src={common.image_large} />
          </div>
          <div className="detalle-bloque padding-h-md">
            <h4 style={{ marginTop: 0 }}>
              {common.title} ({external.gracenote.publishyear}){' '}
              {common.duration} {external.gracenote.rating}
            </h4>
            <p>{common.large_description}</p>
            <p>
              <strong>Género:</strong> {external.gracenote.genres.join(', ')}
            </p>
            {external.gracenote.cast.map(it => {
              return (
                <p>
                  <strong>{it.role_name}: </strong>
                  {it.talents.map(item => (
                    <button className="label margin-xs">
                      {item.last_name}, {item.first_name}
                    </button>
                  ))}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pelicula: state.home.pelicula
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPelicula
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DetallePelicula);
