
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.


Rest API:
* Get List of Wellbores:
    https://realtimeviz-ajontved.c9.io/wellborelist
* Get List of Curves:
    https://realtimeviz-ajontved.c9.io/curvelist
* Get Current Value:
    https://realtimeviz-ajontved.c9.io/currentvalue
* 


Usefull links:
http://lepidllama.net/blog/how-to-push-an-existing-cloud9-project-to-github/

http://www.creativebloq.com/design-tools/data-visualization-712402

http://www.zingchart.com/
Pros: 
* innebygd feed både HTML/JSON og WebSocket
Cons:
* JSON format er lite konfigurerbart 

http://dygraphs.com/
Pros:
* Gratis
* enkel å konfigurere/god doc
Cons:
* Statisk, må regenerere objekter for kvar pollet verdi
