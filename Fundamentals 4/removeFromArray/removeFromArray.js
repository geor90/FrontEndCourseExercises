const removeFromArray = function(array,...toRemove) {
    let modArray = [...array];
    for (let i=0; i<array.length; i++){
      if (modArray.includes(toRemove[i])) {
        modArray.splice(modArray.indexOf(toRemove[i]),1)
      }
    }
     return modArray;
}

module.exports = removeFromArray
