import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function CardDoneFav(props) {
  const [clickedBtn, setClickedBtn] = useState(false);

  const {
    recipeID,
    recipeImg,
    recipeTitle,
    recipeType,
    recipeNationality,
    recipeCategory,
    recipeAlcohol,
    recipeDate,
    recipeTags,
    index } = props;

  const copyToClipBoard = (id, type) => () => {
    navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);

    const SECONDS = 1500;

    setClickedBtn(true);
    setTimeout(() => setClickedBtn(false), SECONDS);
  };

  return (
    <div>
      <Link to={ `/${recipeType}s/${recipeID}` }>
        <img
          src={ recipeImg }
          alt={ recipeID }
          data-testid={ `${index}-horizontal-image` }
          style={ { width: '200px' } }
        />
        <p data-testid={ `${index}-horizontal-top-text` }>
          {
            recipeType === 'food'
              ? (`${recipeNationality} - ${recipeCategory}`) : (`${recipeAlcohol}`)
          }
        </p>
        <p data-testid={ `${index}-horizontal-name` }>
          { recipeTitle }
        </p>
        <p data-testid={ `${index}-horizontal-done-date` }>
          { recipeDate }
        </p>
        {
          clickedBtn && <span>Link copied!</span>
        }
        { recipeTags.map((tag, tagIndex) => (
          <p
            key={ tagIndex }
            data-testid={ `0-${tag}-horizontal-tag` }
          >
            { tag }
          </p>
        )) }
      </Link>
      <button
        type="button"
        onClick={ copyToClipBoard(recipeID, recipeType) }
      >
        <img
          src={ shareIcon }
          alt={ recipeTitle }
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
    </div>
  );
}

CardDoneFav.propTypes = {
  recipeID: PropTypes.string.isRequired,
  recipeImg: PropTypes.string.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipeNationality: PropTypes.string,
  recipeCategory: PropTypes.string,
  recipeAlcohol: PropTypes.string,
  recipeDate: PropTypes.string,
  recipeTags: PropTypes.arrayOf(PropTypes.string),

};

CardDoneFav.defaultProps = {
  recipeNationality: '',
  recipeCategory: '',
  recipeAlcohol: '',
  recipeDate: '',
  recipeTags: [],
};

export default CardDoneFav;
