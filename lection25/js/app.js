var data = require('./data.js');
var render = require('./render.js');
var dataFile = '/data.json';

data.doAjax('GET', dataFile)
            .then(function (values) {
                console.log('app', values);
                render.renderList(values);
            })
            .catch(function (values) {
                console.error(values);
            });


    


