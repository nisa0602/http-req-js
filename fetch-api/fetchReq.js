//fetch

fetch('https://pie.dev/get')
    .then(function(res){
        if(res.ok === false){
            return console.log('request failed');
        }
        return res.json();
    })
    .then(function(res){
        console.log(res);
    })