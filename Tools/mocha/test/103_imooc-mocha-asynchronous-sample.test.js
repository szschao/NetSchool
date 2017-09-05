/**
 * Created by sunchao on 2017/09/04.
 */

var expect = require('chai').expect;
var request = require('request');

describe.only('异步请求', function () {
    it('异步请求应该返回一个对象1', function (done) {
        request
            .get('https://api.github.com', function (err, res, body) {
                expect(res).to.be.an('object');
                done();
            });
    });

    // fetch 的定义?
    // it('异步请求应该返回一个对象2', function () {
    //     return fetch('https://api.github.com').then(function (res) {
    //         return res.json();
    //     }).then(function (json) {
    //         expect(json).to.be.an('object');
    //     });
    // });

});
