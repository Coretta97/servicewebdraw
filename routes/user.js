module.exports = app => {
    const User = app.models.user;
    
    app.get("/login", (req, res) => {
        var name = req.body.email;
        var pw = req.body.password;
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
    app.post("/register", (req, res) => {
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