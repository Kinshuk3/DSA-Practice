//--naive string search-----

function naiveSearch(str, pattern){
    var count = 0
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j<pattern.length; j++){
            if(pattern[j] !== str[i+j]){
                break;
            }
            if(j === pattern.length - 1){
                count++;
            }
        }
    }
    return count
}

console.log(naiveSearch("Taken bold", "bo"))