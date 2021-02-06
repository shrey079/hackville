const express = require('express')
const app = express(); 
const port = 3000; 
app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/



// Replies to get request for the root dir on localhost::3000
app.get('/', (req, res) => { 
    // ***************  Send the index(home) page ********************
     res.sendFile('index.html');
})

// Replies to get requests for "/about" on localhost::3000
app.get('/about', (req, res) => { 
    // *************** Send the about page *********************
     res.sendFile('about.html');
})

// just in case someone tries to go to a page that doesn't exist we can send them back to the root page
app.get('/:trash', (req, res) => { 
    // ***************  Send the home page ********************
     res.sendFile('index.html');
})


// This ensures that our app listens for req's on the correct port aka port 3000
app.listen(port, () => { 
    console.log("Listening on Port 3000!")
})