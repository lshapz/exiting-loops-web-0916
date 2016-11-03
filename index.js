const array = ["dog", 1, "cat"]
 
for (let i = 0, l = array.length; i < l; i++) {
  if (typeof array[i] !== 'string') {
    break
  }
 
  doSomethingToString(array[i])
}