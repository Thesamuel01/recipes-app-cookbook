import React from 'react';
import { useSelector } from 'react-redux';

function Recommended() {
  const { isFetching, recommendations } = useSelector((state) => state.recipe);

  return (
    <div>
      {
        !isFetching
          && (
            recommendations.map(({ category, title, image, id }) => (
              <div
                key={ id }
                data-testid={ `${id}-recomendation-card` }
              >
                <img src={ image } alt={ title } />
                <h4>{ title }</h4>
                <p>{ category }</p>
              </div>
            ))
          )
      }
    </div>
  );
}

export default Recommended;
