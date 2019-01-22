module.exports = app => {
    const User = app.models.user;
    
    app.get("/Connexion/:name/:pw", (req, res) => {
        var name = req.params.name;
        var pw = req.params.pw;
        User.getUser(name,pw, (err,rows) => {
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });
    app.post("/Creerutilisateur", (req, res) => {
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