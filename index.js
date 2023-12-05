// index.js

// Function to describe activities on Saturday
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function to describe activities on Monday
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function to wrap an adjective with a given string
  function wrapAdjective(wrapper = '*') {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  // Export the functions if needed
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  