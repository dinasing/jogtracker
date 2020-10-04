import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cancelIcon from '../../assets/images/cancel.svg';
import { postJog } from './jogs.actions';

export default class JogForm extends Component {
  state = {
    date: '',
    time: '',
    distance: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { date, time, distance } = this.state;
    const jog = { date, time, distance };
    postJog(jog);
  };

  render() {
    return (
      <div className="modal">
        <div className="modal__cancel">
          <Link to="jogs">
            <img src={cancelIcon} alt="cancel" />
          </Link>
        </div>

        <form className="form">
          <p className="input_group">
            <label className="input_group__label">Distance</label>
            <input
              className="input_group__input"
              type="text"
              id="distance"
              onChange={this.handleChange}
            />
          </p>
          <p className="input_group">
            <label className="input_group__label">Time</label>
            <input
              className="input_group__input"
              type="number"
              id="time"
              onChange={this.handleChange}
            />
          </p>
          <p className="input_group">
            <label className="input_group__label">Date</label>
            <input
              className="input_group__input"
              type="date"
              id="date"
              onChange={this.handleChange}
            />
          </p>
          <button className="form__submit" type="submit" onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </div>
    );
  }
}
