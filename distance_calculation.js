const constantsFunctions = require('./constants.js')

function calculateGreatCircleDistanceFromHereToThere(hereLatitude, hereLongitude, latitudeOfOtherPlace, longitudeOfOtherPlace) {

      const differenceInLatRadians = constantsFunctions.convertDegreesToRadians(latitudeOfOtherPlace - hereLatitude);
      const differenceInLonRadians = constantsFunctions.convertDegreesToRadians(longitudeOfOtherPlace - hereLongitude);
    
      const hereLatitudeInRadians = constantsFunctions.convertDegreesToRadians(hereLatitude);
      const latitudeOfOtherPlaceInRadians = constantsFunctions.convertDegreesToRadians(latitudeOfOtherPlace);
    
      const haversineFormulaComponent =
        Math.sin(differenceInLatRadians / 2) * Math.sin(differenceInLatRadians / 2) + Math.sin(differenceInLonRadians / 2) 
        * Math.sin(differenceInLonRadians / 2) * Math.cos(hereLatitudeInRadians) * Math.cos(latitudeOfOtherPlaceInRadians);
    
      const angularDistance = 2 * Math.atan2(Math.sqrt(haversineFormulaComponent), Math.sqrt(1 - haversineFormulaComponent));
    
      return constantsFunctions.earthRadiusInKm * angularDistance;
}

module.exports.calculateGreatCircleDistanceFromHereToThere = calculateGreatCircleDistanceFromHereToThere;

