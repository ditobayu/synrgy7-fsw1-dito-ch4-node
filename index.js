const {volumeKubus, luasPermukaanKubus} = require('./kubus');
const {volumeBalok, luasPermukaanBalok} = require('./balok');
const {volumePrismaSegitiga, luasPermukaanPrismaSegitiga} = require('./prisma');

console.log("Kubus"); 
console.log(volumeKubus(8)); // 512
console.log(luasPermukaanKubus(8)); // 384 

console.log("Balok"); 
console.log(volumeBalok(8, 3, 4)); // 96
console.log(luasPermukaanBalok(8, 3, 4)); // 112

console.log("Prisma"); 
console.log(volumePrismaSegitiga(8, 3, 4)); // 96
console.log(luasPermukaanPrismaSegitiga(8, 3, 4)); // 112