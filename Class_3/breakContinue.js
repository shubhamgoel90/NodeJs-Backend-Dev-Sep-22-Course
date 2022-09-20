for(let j = 0; j < 15; j++){
    
    if(j % 2 === 0){
        continue;
    }
    console.log(j);
}


console.log("Now BREAK ----->");

for(let j = 1; j < 5; j++){
    
    if(j % 4 === 0){
        break;
    }
    console.log(j);
}