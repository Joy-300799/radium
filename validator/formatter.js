function trim(tr){
    const exName = "     Joy Bhattacharya      "
    console.log("The trimmed string of '     Joy Bhattacharya      ' will look like this => "+exName.trim());
}

function toLowerCase(){
    const lowerName = "JOy bhattaChaRYa"
    console.log("The Lowercase will look like this => "+lowerName.toLowerCase());
}

function toUpperCase(){
   const upperName = "joy BhatTaCHArya"
   console.log("The Uppercase will look like this => " +upperName.toUpperCase());
}


module.exports.trim = trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase
