module.exports = app => {
    const User = app.models.user;
    
<<<<<<< HEAD
    app.get("/connexion/:email/:pw", (req, res) => {
        var email = req.params.email;
        var pw = req.params.pw;
        User.getUser(email,pw, (err,rows) => {
=======
    app.get("/login", (req, res) => {
        var name = req.body.email;
        var pw = req.body.password;
        User.getUser(name,pw, (err,rows) => {
>>>>>>> da25887820529cdf8dae98e331e4b8e03894f25c
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });
<<<<<<< HEAD
    app.post("/creer-utilisateur", (req, res) => {
=======
    app.post("/register", (req, res) => {
>>>>>>> da25887820529cdf8dae98e331e4b8e03894f25c
        files.createUser(req.body,function(err,count){
            if(err)
            {
                res.status(400).json(err);
            }
            else{
                res.json(req.body);
            }
        });
    });
};