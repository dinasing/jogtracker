import React, { Component } from 'react';
import addIcon from '../../assets/images/addicon.svg';

const jogs = [
  {
    distance: '10',
    time: '60',
    date: '20.12.2017',
    speed: '15',
  },
  {
    distance: '10',
    time: '60',
    date: '20.12.2017',
    speed: '15',
  },
  {
    distance: '10',
    time: '60',
    date: '20.12.2017',
    speed: '15',
  },
  {
    distance: '10',
    time: '60',
    date: '20.12.2017',
    speed: '15',
  },
];

export default class Jogs extends Component {
  render() {
    return (
      <>
        <div className="date_filters">
          <div className="date_filters__wrapper">
            <label forHtml="from">Date from </label>
            <input className="date_filters__input" id="from" />
          </div>

          <div className="date_filters__wrapper">
            <label forHtml="to">Date to</label>
            <input className="date_filters__input" id="to" />
          </div>
        </div>
        <div className="jogs">
          {jogs.map(jog => (
            <Jog jog={jog} />
          ))}
        </div>
        <div className="new_jog">
          {' '}
          <img src={addIcon} alt="add jog" />
        </div>
      </>
    );
  }
}

const Jog = props => {
  const { speed, distance, time, date } = props.jog;
  return (
    <article className="jogs__jog">
      <p className="jogs__date jogs__jog_info_text">{date}</p>
      <p className="jogs__jog_info_text">
        <span className="jogs__important_text ">Speed:</span> {speed}
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
