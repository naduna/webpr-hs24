
// this works similar to Extension Methods

Number.prototype.times = function(callback) {
    const result = [];
    for(let i=0; i<this; i++) { result.push(callback(i)) }
    return result;
};

Number.prototype.times1 = function(callback) {
    return Array.from({length: this}, (_, idx) => callback(idx));
};

String.prototype.times = function(callback) {
    return Number(this).times1(callback);
};

Function.prototype.then = function(callback) {
    return callback.apply(this);
}