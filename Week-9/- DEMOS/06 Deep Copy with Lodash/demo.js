'use strict';

const auto1 = {
  mfg: 'Honda',
  models: {
    top: 'Civic',
    bottom: 'Prelude',
  },
}


/*
LODASH LIBRARY HOTLINK
https://www.unpkg.com/lodash
add ABOVE other js links in head\
uses: _.cloneDeep(originalObject)
*/

const auto2 = _.cloneDeep(auto1);
console.log(auto1, auto2);

auto2.mfg = "Ford";
auto2.models.top = "F-series";
console.log(auto1, auto2);
