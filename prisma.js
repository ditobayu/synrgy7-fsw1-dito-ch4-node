const volumePrismaSegitiga = (alas, tinggi) => {
    return 0.5 * alas * tinggi;
}

const luasPermukaanPrismaSegitiga = (alas, tinggi, sisi) => {
    return (2 * 0.5 * alas * tinggi) + (3 * alas * sisi);
}

module.exports = {
    volumePrismaSegitiga,
    luasPermukaanPrismaSegitiga
}