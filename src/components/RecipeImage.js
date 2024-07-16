import React from "react";
import recipeImage from "@/assets/image-omelette.jpeg";
import Image from "next/image";
const RecipeImage = () => {
  return (
    <div className="w-full flex flex-col">
      <Image
        src={recipeImage}
        width={500}
        height={500}
        alt="recipeImage"
        className="w-full"
      />
      <h1 className="text-[1.7rem] font-semibold my-4">
        Simple Omelette Recipe
      </h1>
      <p className="text-[1rem]">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="bg-red-50 my-8 p-[20px] rounded-lg">
        <h3 className="text-rose-900 font-semibold text-[20px] mb-4">
          Preparation time
        </h3>
        <ul className="list-disc ml-12">
          <li>
            <strong>Total:</strong> Approximately 10 minutes
          </li>
          <li>
            <strong>Preparation:</strong> 5 minutes
          </li>
          <li>
            <strong>Cooking:</strong> 5 minutes
          </li>
        </ul>
      </div>

      <div>
        <h3>Ingredients</h3>
        <ul className="list-disc">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
        <hr />
      </div>

      <div>
        <h3>Instructions</h3>
        <ol>
          <li>
            <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
            pinch of salt and pepper until they are well mixed. You can add a
            tablespoon of water or milk for a fluffier texture.
          </li>
          <li>
            <strong>Heat the pan:</strong> Place a non-stick frying pan over
            medium heat and add butter or oil.
          </li>
          <li>
            <strong>Cook the omelette:</strong> Once the butter is melted and
            bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
            coat the surface.
          </li>
          <li>
            <strong>Fold and serve:</strong> As the omelette continues to cook,
            carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li>
            <strong>Enjoy:</strong> Serve hot, with additional salt and pepper
            if needed.
          </li>
        </ol>
        <hr />
      </div>

      <div>
        <h3>Nutrition</h3>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table>
          <tr>
            <td>Calories</td>
            <td>277kcal</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>0g</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>20g</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>22g</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default RecipeImage;
