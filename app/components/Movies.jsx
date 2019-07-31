const React = require('react');
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList');
const About = require('./About');

const moviesArray = [
  'Star Wars',
  'The Empire Strikes Back',
  'Return of the Jedi'
]


/* the main page for the index route of this app */
const Movies = function() {
  return (
    <div>
      <h1>Movies!</h1>

      <Link to='/about'>Read about and Rate this app!</Link>

      <UnorderedList items={moviesArray} />

    </div>
  );
};

module.exports = Movies;