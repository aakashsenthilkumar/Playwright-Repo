
// //IF condition statement
// function getBrowser(browserName){
//     if(browserName=="chrome"){
//         console.log('Chrome browser');
        
//     } 
//     else{
//       console.log("Not a Chrome Browser");

//     }
// }

// getBrowser("firefox")


//Switch conditional STatement


function getVersion(){
    switch(browser){

    
    case "chrome" :
        console.log("131");
        break;

        case "firefox":
            console.log('132');
                    break;


            case "OPera" :
                console.log("135");
                        break;

           default :
           console.log("Unsupported");
                
    }    
}

let browser ="OPera"
getVersion()