import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPeliculas, filter } from 'Modules/home';
import Pelicula from 'Components/pelicula';

export class Home extends Component {
  state = {
    filterText: ''
  };

  componentDidMount() {
    this.props.getPeliculas();
  }
  filter = e => {
    const { value } = e.target;

    this.setState(
      {
        filterText: value
      },
      () => {
        this.props.filter(this.state.filterText);
      }
    );
  };
  render() {
    const { peliculas } = this.props;
    return (
      <Fragment>
        <div className="buscador">
          <input
            onChange={this.filter}
            value={this.state.value}
            className="padding-h-md"
            placeholder="Buscar"
          />
        </div>
        <div className="container">
          {peliculas.map((it, idx) => {
            return <Pelicula key={idx} pelicula={it} />;
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  peliculas: state.home.peliculas.filter(
    ({ title }) =>
      title.toLowerCase().indexOf(state.home.filter.toLowerCase()) !== -1
  )
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPeliculas,
      filter
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
