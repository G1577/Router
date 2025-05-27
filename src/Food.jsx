import React from 'react';
import CardGrid from './CardGrid';

const foodColumns = [
  ['Pizza'], ['Burger'], ['Falafel'],
  ['Sushi'], ['Ramen'], ['Tempura'],
  ['Tacos'], ['Burrito'], ['Enchilada'],
  ['Pasta'], ['Lasagna'], ['Gnocchi'],
  ['Croissant'], ['Baguette'], ['Quiche']
];

export default function Food() {
  return <CardGrid data={foodColumns} />;
}
