module.exports = app => {
    const User = app.models.user;
    
    app.get("/login/:email/:pw", (req, res) => {
        var email = req.params.email;
        var pw = req.params.pw;
        User.getUser(email,pw, (err,rows) => {
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });
    app.post("/create-user", (req, res) => {
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