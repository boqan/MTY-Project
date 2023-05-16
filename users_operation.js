function usersDistanceListFilter (usersAndTheirDistanceList, usersFinalList, distanceinKmRequired) {
      usersAndTheirDistanceList.forEach((user) => {
        if(user.Distance < distanceinKmRequired)
          usersFinalList.push({Name: user.Name, id: user.id, Distance: user.Distance})
      });
      return usersFinalList;
  }

module.exports.usersDistanceListFilter = usersDistanceListFilter;