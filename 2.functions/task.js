function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = sum / arr.length;
  avg = +avg.toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  // let sum = arr.reduce(function (accumulator, currentValue){
  //   return accumulator + currentValue;
  // })
  //При использовании reduce пишет ошибку arr is empty

  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; 
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  // let max = Math.max(arr);
  // let min = Math.min(arr);
  // return max - min;
  ///при arr[] с какими-то числами Math.max возвращает Nan
  ///Если подставлю Math.max(...arr) всё возвращается правильно
  ///Не пойму почему

  let min = arr[0];
  let max = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1; 
    }
  }
  let total = sumEvenElement / countEvenElement;
  return total;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
}
