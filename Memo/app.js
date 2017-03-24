/*jshint esversion: 6 */

function memo() {

  var cache = {};

  function getElement(id) {

    if (cache[id]) {
      console.log('element is in the cache; I will get it to you very fast');
      return cache[id];
    }

    else {
      console.log('element is not in the cache; give me some time');
      cache.id = document.getElementById(id);
    return cache[id];
    }
  }

  function querySelector(id) {

    if (cache[id]) {
      console.log('element is in the cache; I will get it to you very fast');
      return cache[id];
    }

    else {
      console.log('element is not in the cache; give me some time');
      cache.id = document.querySelector(sel);
    return cache[id];
    }
  }

  return {
    getElement,
    querySelector
  };

}
