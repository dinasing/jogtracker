import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cancelIcon from '../../assets/images/cancel.svg';

export default class JogForm extends Component {
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
            <input className="input_group__input" type="text" />
          </p>
          <p className="input_group">
            <label className="input_group__label">Time</label>
            <input className="input_group__input" type="time" />
          </p>
          <p className="input_group">
            <label className="input_group__label">Date</label>
            <input className="input_group__input" type="date" />
          </p>
          <button className="form__submit" type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}