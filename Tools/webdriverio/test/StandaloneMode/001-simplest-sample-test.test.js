/**
 * Created by sunchao on 2017/09/07.
 */
var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('https://www.baidu.com')
    .getTitle().then(function (title) {
        console.log('Title was: ' + title);
    })
    .end();