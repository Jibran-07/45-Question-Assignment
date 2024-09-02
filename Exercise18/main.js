var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fav_place = ["Maldives", "Istanbul", "Rome", "Paris", "Venice"];
console.log(fav_place);
console.log(__spreadArray([], fav_place, true).sort());
console.log(fav_place);
console.log(__spreadArray([], fav_place, true).reverse());
console.log(fav_place);
console.log(fav_place.reverse());
console.log(fav_place.reverse());
console.log(fav_place.sort());
console.log(fav_place.reverse());
