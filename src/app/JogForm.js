import React, { Component } from 'react';

export default class JogForm extends Component {
  render() {
    return (
      <div className="modal">
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
