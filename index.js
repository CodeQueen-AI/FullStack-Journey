const fs = require('node:fs');

fs.writeFile("hey.txt", 'hey hello kese ho', function(err){
    if(err) console.error(err);
    else console.log("done")
})