var personName = "muhammad Jibran";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (match) { return match.toUpperCase(); }));
