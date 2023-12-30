const name = "hashim"
const repoCount = 50
//console.log(name + repoCount +"Value");
console.log(`helo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('bgmi')

console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));

const newString=gameName.substring(0, 4)
console.log(newString);

const anotherString =gameName.slice(-2, 2)

const newStringOne = " hashim "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hashim.com/hashim%20hashim"
console.log();(url.replace('%20','-'))
