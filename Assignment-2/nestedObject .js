const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
              something: 'foo2'
                }
            }
          }
      }
  }
}

const contains = (value, object) => {
  for (const key in object) {
    if (typeof object[key] === 'object') {
      return contains(value, object[key]);
    }
    if(object[key] === value){
      return true
    }
  }
  return false
}

console.log(contains(44, nestedObject))