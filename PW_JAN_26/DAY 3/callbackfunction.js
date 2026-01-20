

function checkavailability(movieName,callback) {
    

    console.log("Check the Movie Name ");
    setTimeout(() => {
        console.log("Movie "+movieName+"is available");
        
    }, 2000);
    callback()
}
function playmovie() {
    console.log("Now Playing the Movie");
    
}
checkavailability("SpiderMan",playmovie)