'use strict';

const reviews = [
  {comment: 'Thin and easy to hang on walls', stars: 4},
  {comment: 'All the colors were excellent', stars: 5},
  {comment: 'Color was a little wonky in bright daylight', stars: 3},
  {comment: 'Lousy colors', stars: 1},
  {comment: 'Remote has too many buttons', stars: 3},
]

/* 
callback methods - take a function as an argument
  forEach(function(){})
  map(itm => itm.trim())
*/

/* 
searching reviews
find() - iterates and returns FIRST match
  returns member, an object in this case
includes() - returns FIRST TRUE, not perfect match, case sensitive
filter() - returns an array with ALL matches
some() - returns t/f, t if AT LEAST ONE matches
every() -  returns t/f, t if ALL match
 */

const search1 = reviews.find(itm => itm.comment.toLowerCase().includes('ColOr'.toLowerCase())); // case INTENSIVE
console.log(search1);
const search2 = reviews.find(itm => itm.stars === 3);
console.log(search2);


/* 
making code reusable
itm = the object
*/

function findFeature(feature) {
  return arrayMember => arrayMember.comment.toLowerCase().includes(feature.toLowerCase()); // using arrayMember for clarity
}

function findRatings(rating) {
  return itm => itm.stars >= rating;
}

function removeBadRatings(rating, idx) {
  if (rating.stars < 3) {
    return reviews.splice(idx, 1)
  }
}

console.log('------------ FIND -----------');

let review1 = reviews.find(findFeature('color'));
console.log(review1);
let rating1 = reviews.find(findRatings(3));
console.log(rating1);

console.log('-------------- FILTER WORD --------------');
let review2 = reviews.filter(findFeature('Color'));
console.log(review2);   // an array
review2.forEach(itm => console.log(itm));   // prints each review separately

console.log('-------------- FILTER RATING --------------');
let rating2 = reviews.filter(findRatings(3));
console.group('Ratings 3+');
console.table(rating2);
console.groupEnd();

console.log('-------------- FILTER DELETE --------------');

// console.table(reviews);
// const badReviews = reviews.filter(removeBadRatings);
// console.table(reviews);


console.log('------------ SOME -----------');
console.log(reviews.some(findRatings(2)));  // true - some have minimum of 2
console.log(reviews.some(findRatings(6)));  // false - none have minimum of 6

console.log(reviews.every(findRatings(1)));  // true - all have minimum of 1


console.log('------------ OBJECT VALUES -----------');

const anyGreatReviews = Object.values(reviews).some(rating => rating.stars === 5); // true
console.log(anyGreatReviews);
