export const matrixToolkit = {
  makeRow(v = 0) {
    const arr = new Array(9)
    arr.fill(v)
    return arr
  },
  makeMatrix(v = 0) {
    let arr = Array.from({ length: 9 }, (v) => this.makeRow(v))
    console.log(arr)
    return arr
  },
  /**
   * Fisher-Yates 洗牌算法
   */
  shuffle(arr: number[]) {
    const endIndex = arr.length - 2
    for (let i = 0; i < endIndex; i++) {
      const j = i + Math.floor(Math.random() * (arr.length - i))
      let t = arr[i]
      arr[i] = arr[j]
      arr[j] = t
      // [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr
  }
}
