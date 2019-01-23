module.exports = app => {
    const User = app.models.user;
    app.post("/login", (req, res) => {
        User.getUser(req.body,function(err,rows){
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(req.body);
            }
        });
    });
    app.post("/create-user", (req, res) => {
        User.createUser(req.body,function(err,rows){
            if(err)
            {
                console.log("Erreur de creation")
                res.status(400).json(err);
            }
            else{
                console.log("Creation d'un user");
                console.log(""+rows[0].iduser)
                res.json(rows[0]);
            }
        });
    });
};