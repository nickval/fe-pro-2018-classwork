var data = require('./data.js');
let url = 'https://api.github.com/orgs/hillel-front-end/repos',
    reposList;

data.doAjax('GET', url)
            .then(reposList => Promise.apply(list => map(list.forks_url)))
            // .then(function (values) {
            //     // console.log('app', values);
            //     var reposList = values.map(function(name) {
            //         console.log(name.forks_url);
            //         return name.forks_url;
            //     });
            //     return executeRequest(reposList);
            // })
            .then(list => Promise.all(list))
            .then(res => console.log(res));

function executeRequest(list) {
    var res = [];
    list.forEach(element => {
        console.log(element);
        res.push(data.doAjax('GET', element));
    
    });
    return res;
}