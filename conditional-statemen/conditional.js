/**
|--------------------------------------------------
| if
|--------------------------------------------------
*/

if(true){
    // code run 
}

/**
|--------------------------------------------------
| if else
|--------------------------------------------------
*/

if(false){
    console.log(`====>> hello1`,)
    if(true){
        console.log(`====>> hello2`,)
        if(true){
            console.log(`====>> hello3`,)
        }
    }
}else{
    if(false){
        console.log(`====>> hello4`,)
    }
}


/**
|--------------------------------------------------
| Ladder if else
|--------------------------------------------------
*/


if(false){
    console.log(`====>> Hello1`,)
}else if(true){
    console.log(`====>> Hello2`,)
}else if(true){
    console.log(`====>> Hello3`,)
}
else if(true){
    console.log(`====>> Hello4`,)
}else{
    console.log(`====>> Hello5`,)
}