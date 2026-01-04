import React, { useState } from 'react';

const SingleFaq = ({item, isOpen, onToggle}) => {
  const {title, desc, id} = item || {};

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
        <button
          className={`accordion-button ${!isOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls={`collapse${id}`}
        >
          {title}
          <span className="accordion-btn"></span>
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
        aria-labelledby={`heading${id}`}
      >
        <div className="accordion-body">
          {typeof desc === 'string' ? <p>{desc}</p> : desc}
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;