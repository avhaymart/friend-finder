module.exports = function (app, path) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    
    app.get("/node_modules/bootstrap/dist/css/bootstrap.css", function(req, res){
        res.sendFile(path.join(__dirname, "../../node_modules/bootstrap/dist/css/bootstrap.css"));
    })
    
    app.get("/js/bootstrap.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/js/bootstrap.js"));
    })

    app.get("/js/script.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/js/script.js"));
    })

    app.get("/js/survey.js", function(req, res){
        res.sendFile(path.join(__dirname, "../public/js/survey.js"));
    })

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}