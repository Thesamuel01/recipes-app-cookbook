import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Recipe from '../components/Recipe';
import StartButton from '../components/StartButton';
import { fetchRecipeThunk } from '../redux/actions';

function DrinkRecipe() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isFetching, recipeReceived } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipeThunk(id, 'drink'));
  }, [dispatch, id]);

  return (
    <section>
      {
        isFetching
          ? (
            <Loading />
          )
          : (
            <>
              <img
                data-testid="recipe-photo"
                src={ recipeReceived.strDrinkThumb }
                alt="Recipe"
              />
              <Recipe />
              <StartButton />
            </>
          )
      }
    </section>
  );
}

export default DrinkRecipe;
