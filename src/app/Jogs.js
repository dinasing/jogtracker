import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import addIcon from '../../assets/images/addicon.svg';
import { loadJogs } from './jogs.actions';
import NothingPage from './NothingPage';

export default class Jogs extends Component {
  state = {
    jogs: [],
    fromDate: 0,
    toDate: new Date().getTime() / 1000,
  };

  async componentDidMount() {
    const jogs = await loadJogs();
    this.setState({ jogs });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: new Date(e.target.value).getTime() / 1000,
    });
  };

  render() {
    const { jogs, fromDate, toDate } = this.state;
    const { areFiltersOpen } = this.props;

    if (!jogs.length) {
      return <NothingPage />;
    }

    const filteredJogs = jogs.filter(jog => {
      const date = jog.date;
      return date >= fromDate && date <= toDate;
    });

    return (
      <>
        <div className={areFiltersOpen ? 'date_filters' : 'date_filters-hidden'}>
          <div className="date_filters__wrapper">
            <label>Date from </label>
            <input className="date_filters__input" id="fromDate" onChange={this.handleChange} />
          </div>

          <div className="date_filters__wrapper">
            <label>Date to</label>
            <input className="date_filters__input" id="toDate" onChange={this.handleChange} />
          </div>
        </div>
        <div className="jogs">
          {filteredJogs.map((jog, index) => (
            <Jog jog={jog} key={`jog ${index} ${jog.date} ${jog.time}`} />
          ))}
        </div>
        <div className="new_jog">
          <Link to="/new-jog">
            <img src={addIcon} alt="add jog" />
          </Link>
        </div>
      </>
    );
  }
}

const Jog = props => {
  const { distance, time, date } = props.jog;
  const speed = time ? distance / time : 0;
  return (
    <article className="jogs__jog">
      <p className="jogs__date jogs__jog_info_text">
        {moment(new Date(date * 1e3)).format('MM.DD.YYYY')}
      </p>
      <p className="jogs__jog_info_text">
        <span className="jogs__important_text ">Speed:</span> {speed.toPrecision(2)}
      </p>
      <p className="jogs__jog_info_text">
        <span className="jogs__important_text">Distance:</span> {distance} km
      </p>
      <p className="jogs__jog_info_text">
        <span className="jogs__important_text">Time:</span> {time} min
      </p>
    </article>
  );
};
