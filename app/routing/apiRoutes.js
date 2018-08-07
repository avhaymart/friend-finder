
module.exports = function (app, path, data) {
    app.get("/api/friends", function (req, res) {
        console.log("friends")
        res.sendFile(path.join(__dirname, "../data/friends.js"));
    });

    app.post("/api/friends", function (req, res) {
        var userScore = [];
        var opponent = [];
        for (i=0;i<12;i++) {
            if (isNaN(parseInt(req.body[i]))) {
                console.log("NaN, " + req.body[i]);
            } else {
                console.log("Is a number, " + req.body[i])
                userScore.push(req.body[i]);
            }
        }
        for (i=0;i<10;i++) {
            var difference = 0;
            for (j=0;j<10;j++){
                difference += (Math.abs(userScore[i] - data[i].scores[j]));
            }
            console.log(difference);
            opponent.push(difference);
        }

        var lowest = 100;
        console.log(userScore)
        console.log(opponent);
        
        opponent.forEach(element => {
            if (parseInt(element) < lowest) {
                lowest = parseInt(element);
            }
        });

        console.log("Lowest: " + lowest);

        console.log("Index:" +  opponent.indexOf(lowest));

        console.log("Best match is " + data[opponent.indexOf(lowest)].name);

        // I wasn't able to figure out how to send the information back to the current webpage and have it display :(
        res.send("<h1>Best match is " + data[opponent.indexOf(lowest)].name + "</h1><br><img src='"+data[opponent.indexOf(lowest)].photo+"'>");
        
    });
    
}