function generateRandomId(length) {
    let characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
    let randomId = "";
  
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters[randomIndex];
    }
    
    return randomId;
  }
  
  let randomId = generateRandomId(8);
  console.log("ID:", randomId);



  
  function bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let elem1 of arr) {
        let index = arr.indexOf(elem1);
        let elem2 = arr[index + 1];
  
        if (elem2 !== undefined && elem1 > elem2) {
          arr[index] = elem2;
          arr[index + 1] = elem1;
          swapped = true;
        }
      }
    }
  
    return arr;
  }
  
  const unsortedArray = [5, 3, 8, 2, 1, 4, 28, 45, 98, 12, 76, 29, 0];
  const sortedArray = bubbleSort(unsortedArray);
  console.log("Отсортированный массив:", sortedArray);

