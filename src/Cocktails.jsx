import React from 'react';
import CardGrid from './CardGrid';

const cocktailColumns = [
  ['Mojito'], ['Martini'], ['Margarita'],
  ['Negroni'], ['Daiquiri'], ['Old Fashioned'],
  ['Whiskey Sour'], ['Bloody Mary'], ['Mai Tai'],
];

export default function Cocktails() {
  return <CardGrid data={cocktailColumns} />;
}
