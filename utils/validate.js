// utils/validate.js
module.exports = {
    isNumber: function(value) {
        return !isNaN(value);
    },
    isString: function(value) {
        return typeof value === "string";
    },
    isArray: function(value) {
        return Array.isArray(value);
    }
};