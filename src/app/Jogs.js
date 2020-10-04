import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import addIcon from '../../assets/images/addicon.svg';
import { loadJogs } from './jogs.actions';
import NothingPage from './NothingPage';

export default class Jogs extends Component {
  state = {
    jogs: [],
  };

  async componentDidMount() {
    const jogs = await loadJogs();
    this.setState({ jogs });
  }

  render() {
    const { jogs } = this.state;
    if (!jogs.length) {
      return <NothingPage />;
    }
    return (
      <>
        <div className="date_filters">
          <div className="date_filters__wrapper">
            <label>Date from </label>
            <input className="date_filters__input" id="from" />
          </div>

          <div className="date_filters__wrapper">
            <label>Date to</label>
            <input className="date_filters__input" id="to" />
          </div>
        </div>
        <div className="jogs">
          {jogs.map((jog, index) => (
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
        {moment(new Date(date * 1e3)).format('DD.MM.YYYY')}
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
