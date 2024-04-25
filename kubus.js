const volumeKubus = (sisi) => {
    return sisi * sisi * sisi;
}

const luasPermukaanKubus = (sisi) => {
    return 6 * sisi * sisi;
}

module.exports = {
    volumeKubus,
    luasPermukaanKubus
}