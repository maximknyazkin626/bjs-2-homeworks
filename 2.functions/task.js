function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, arr[0]);

  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }
  // return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);

  // let min = arr[0];
  // let max = arr[0];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   }
  // }
  // return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
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
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  let total = sumEvenElement / countEvenElement;
  return total;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
  //Почему-то здесь у меня счётчик i был равен 10 ещё до начала выполнения цикла
  //Долго не мог понять, потом оказалось что ошибка в этом и пришлось использовать j
  //Почему так? Был бы благодарен за комментарий
}
