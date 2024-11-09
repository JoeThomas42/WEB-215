'use strict';

/*

=     set values
==    test value only  
      (age == '21' IS TRUE)
      ===   (test value and type - almost always use this)
      age === '21' IS FALSE

!     (bang) tests for NOT
      ! REPLACES one = sign
      (age != '21' IS FALSE)
      (age !== '21' IS TRUE)

>=    will never have more than one =
<=

||    or symbol
&&    and symbol

*/

const age = 70;

if (age > 18 || age %2 === 0) {   // if age is greater than 18 OR divisible by 2
  console.log('Adult OR even');
} else {
  console.log('no match');
}

if (age > 20 && age %2 === 0) {   // if age is greater than 20 AND divisible by 2
  console.log('Adult AND even');
} else {
  console.log('no match');
}

if (age < 18 || (age >= 65 && age %2 === 0)) {   // nested conditionals
  console.log('Minor OR even senior');
} else {
  console.log('no match');
}
