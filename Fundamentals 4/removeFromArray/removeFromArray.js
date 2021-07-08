const removeFromArray = function(array) {
let arg = arguments;
for(let i =0; i < array.length; i++) {
    for(let k = 1;k < args.length; k++)
    if(array[i] === args[k]) {
        array.splice(i,1);
    }

}
return array;
}

module.exports = removeFromArray
