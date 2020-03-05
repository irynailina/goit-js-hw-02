'use strict'


const checkForSpam = function(message) {
    const firstWord = 'spam';
    const secondWord = 'sale';
    let message = message.toLowerCase();

    if (message.includes(firstWord) || message.includes(secondWord)) {
        return true;
    } else {
        return false;
    }
  };

  console.log(checkForSpam('Latest technology news')); 
  console.log(checkForSpam('JavaScript weekly newsletter')); 
  console.log(checkForSpam('Get best sale offers now!')); 
  console.log(checkForSpam('[SPAM] How to earn fast money?')); 