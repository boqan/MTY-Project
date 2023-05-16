function convertDegreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

const earthRadiusInKm = 6371;
const officeCordsLat = 42.6665921;
const officeCordsLon = 23.351723;
const distanceinKmRequiredForInvitation = 100.0;

module.exports.convertDegreesToRadians = convertDegreesToRadians;
module.exports.earthRadiusInKm = earthRadiusInKm;
module.exports.officeCordsLat = officeCordsLat;
module.exports.officeCordsLon = officeCordsLon;
module.exports.distanceinKmRequiredForInvitation = distanceinKmRequiredForInvitation;
