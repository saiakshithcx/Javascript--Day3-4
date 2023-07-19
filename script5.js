function isSimilar(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
  
    if (Array.isArray(obj1)) {
      if (obj1.length !== obj2.length) {
        return false;
      }
  
      for (let i = 0; i < obj1.length; i++) {
        if (!isSimilar(obj1[i], obj2[i])) {
          return false;
        }
      }
    } else if (obj1 instanceof Map) {
      if (obj1.size !== obj2.size) {
        return false;
      }
  
      for (let [key, value] of obj1.entries()) {
        if (!obj2.has(key) || !isSimilar(value, obj2.get(key))) {
          return false;
        }
      }
    } else if (typeof obj1 === 'object' && obj1 !== null) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || !isSimilar(obj1[key], obj2[key])) {
          return false;
        }
      }
    } else {
      if (obj1 !== obj2) {
        return false;
      }
    }
  
    return true;
  }
  //example3
  const obj1 =[{"D": [0, 3]}, {"X": [1, 3]}, {"D": [3, 7]}];
  const obj2 =[{"D": [0, 3]}, {"X": [1, 3]},{"D": [3, 7]}];
  console.log(isSimilar(obj1, obj2));
  