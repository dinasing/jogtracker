import React from 'react';
import { Link } from 'react-router-dom';

export default function NothingPage() {
  return (
    <div className="nothing_page">
      <p className="nothing_page__text"> Nothing is there</p>{' '}
      <Link to="/new-jog">
        <button className="nothing_page__button" type="button">
          Create your jog first
        </button>
      </Link>
    </div>
  );
}
