function getObject(obj) {
    const marksMap = new Map();
  
    for (const key in obj) {
      const entry = obj[key];
      const mark = entry.marks;
  
      if (!marksMap.has(mark) || entry.age < marksMap.get(mark).age) {
        marksMap.set(mark, { key, ...entry });
      }
    }
  
    const result = {};
  
    for (const [mark, entry] of marksMap) {
      result[entry.key] = { age: entry.age, name: entry.name, marks: mark };
    }
  
    return result;
  }
  //Test Case 2
  const obj = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  };
  console.log(getObject(obj));