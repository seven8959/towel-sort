module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return []
  }  
  let result = [];
  matrix.map((el, i) => {
    i % 2 === 0 ? result.push(el) : result.push(el.reverse());
  })
  return result.flat();
}
