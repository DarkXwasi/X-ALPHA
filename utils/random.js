// utils/random.js
module.exports = {
    pick: function(arr) {
        if (!Array.isArray(arr)) throw new Error("Input must be an array!");
        return arr[Math.floor(Math.random() * arr.length)];
    },
    number: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};