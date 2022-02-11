module.exports = function reverse (n) {
    const reversed = n.toString().split('').reverse().join('')
    if(n>=0){
    return parseInt(reversed) * Math.sign(n)}
    else return (parseInt(reversed)*Math.sign(n))* (-1)
}
