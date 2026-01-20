

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





/*Explanation:
This example demonstrates **asynchronous, non-blocking behavior** using a callback.
When `checkAvailability` is called, the movie request is sent to the server.
While the server is checking availability (simulated by `setTimeout`), the main program is **not blocked** — other tasks like ads, UI rendering, or user actions can continue.
Once the server responds (after 2 seconds), the callback `playMovie` is executed.

• JavaScript does **not run tasks in parallel threads** here
• It runs asynchronously using the **event loop**
• The waiting task is handled in the background, not blocking execution

“While the movie is getting ready from the server, ads are shown to the user.
The app does not freeze.
Once the movie is ready, it starts playing automatically.”

✅ “It runs asynchronously / non-blocking”

In brief :
“Callbacks allow JavaScript to continue executing other tasks while waiting for a server response, and run the required action once the response arrives.”*/
