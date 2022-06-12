function sum(initNum: number, ...nums: number[]) {
  let total = initNum;
  for (const num of nums) {
    total += num
  }
  return total;
}

console.log(sum(20, 30))
console.log(sum(20, 30, 40, 50))

export {}