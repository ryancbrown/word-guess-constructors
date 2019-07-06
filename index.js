var inquirer = require('inquirer');

inquirer.prompt([
    {
    name: 'letter', 
    message: 'Input a letter A-z',
    validate: function(input) { 
        var regex = /[A-z]/

        // Check if the input added is a letter
        if (regex.test(input) && input.length === 1) { 
            return true
        }
        return 'Please input a letter between A and Z. '
      }
    }
  ]).then(function(response){
    // do something
  });
