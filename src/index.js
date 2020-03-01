
exports.min = function min (array) {  
  var res = array && array.length ? Math.min.apply(null, array) : 0;
  //console.log(res)
  return res
}

exports.max = function max (array) {
  var res = array && array.length ? Math.max.apply(null, array) : 0;
  //console.log(res)
  return res
}

exports.avg = function avg (array) {
  if(!array || !array.length)
    return 0;

  var sum = 0;
  for( var i = 0; i < array.length; i++ ){
      sum += parseInt( array[i]);
  }

  return sum/array.length;
}
