"use strict";

function Person(firstName_, lastName_, id_) {
    this.firstName = firstName_;
    this.lastName = lastName_;
    this.id = id_;
}

Person.prototype.changeName = function (newName_) {
    this.lastName = newName_;
};

module.exports = Person;
