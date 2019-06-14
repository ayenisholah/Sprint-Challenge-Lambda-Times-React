import React from 'react';
import uuid from 'uuid';
import Card from './Card';
import PropTypes from 'prop-types'


const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {
        // Using the cards prop, map over the list creating a 
        // Card component for each passing the card as the only prop
      cards.map(card => (
        <Card
          key={uuid()}
          card={card}
        />
      ))
      }
    </div>
  )
}
// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;