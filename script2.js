function getObject(obj) {
    const uniqueMarks = {};
    const result = {};
  
    for (const key in obj) {
      const entry = obj[key];
      const mark = entry.marks;
  
      if (!uniqueMarks[mark] || entry.age < uniqueMarks[mark].age) {
        uniqueMarks[mark] = entry;
      }
    }
  
    let index = 5;
    for (const mark in uniqueMarks) {
      result[index] = uniqueMarks[mark];
      index--;
    }
  
    return result;
  }
  const input = {
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
      
  };
  
  
  const output = getObject(input);
  console.log(output);
  