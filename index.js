const {volumeKubus, luasPermukaanKubus} = require('./kubus');
const {volumeBalok, luasPermukaanBalok} = require('./balok');
const {volumePrismaSegitiga, luasPermukaanPrismaSegitiga} = require('./prisma');
const {writeUserData, readUserData} = require('./user');

// console.log("Kubus"); 
// console.log(volumeKubus(8)); // 512
// console.log(luasPermukaanKubus(8)); // 384 

// console.log("Balok"); 
// console.log(volumeBalok(8, 3, 4)); // 96
// console.log(luasPermukaanBalok(8, 3, 4)); // 112

// console.log("Prisma"); 
// console.log(volumePrismaSegitiga(8, 3, 4)); // 96
// console.log(luasPermukaanPrismaSegitiga(8, 3, 4)); // 112

// const volumeBalok1 = volumeBalok(8, 3, 4); // 96

// fs.writeFileSync('./result.txt', volumeBalok1.toString(), 'utf-8');

writeUserData()