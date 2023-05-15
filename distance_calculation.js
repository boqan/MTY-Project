const methods = {

      calculateGreatCircleDistance : 
      function (latitude1, longitude1, latitude2, longitude2) {

      function convertDegreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
      }
    
      const earthRadiusInKm = 6371;
      const differenceInLatRadians = convertDegreesToRadians(latitude2 - latitude1);
      const differenceInLonRadians = convertDegreesToRadians(longitude2 - longitude1);
    
      const latitude1InRadians = convertDegreesToRadians(latitude1);
      const latitude2InRadians = convertDegreesToRadians(latitude2);
    
      let haversineFormulaComponent =
        Math.sin(differenceInLatRadians / 2) * Math.sin(differenceInLatRadians / 2) + Math.sin(differenceInLonRadians / 2) 
        * Math.sin(differenceInLonRadians / 2) * Math.cos(latitude1InRadians) * Math.cos(latitude2InRadians);
    
      let angularDistance = 2 * Math.atan2(Math.sqrt(haversineFormulaComponent), Math.sqrt(1 - haversineFormulaComponent));
    
      let greatCircleDistance = earthRadiusInKm * angularDistance;
    
      return greatCircleDistance;
    },

    

    

}

module.exports = methods;