var fs = require('fs');

fs.readdir('./test', function(err, data){
    if(err) throw err;
    
    fs.writeFile('./pliki.txt', data, function(err){
        if(err) throw err;

        console.log('wszystko poszło ok');
    })

})

