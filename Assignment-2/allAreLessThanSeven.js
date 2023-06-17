const all = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      if (!callback(arr[i])) {
        return false;
      }
    }
    return true;
  }
  
  const allAreLessThanSeven = all([1, 2, 9], (num) =>  num < 7);
  
  console.log(allAreLessThanSeven);
  