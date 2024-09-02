let personName:string = "muhammad Jibran"

console.log(personName.toLowerCase())
console.log(personName.toUpperCase())
console.log(personName.replace(/\b\w/g,(match)=>match.toUpperCase()))