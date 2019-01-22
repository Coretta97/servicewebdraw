module.exports = app => {
    const User = app.models.user;
    app.post("/login", (req, res) => {
        User.getUser(req.body,function(err,count){
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
        User.createUser(req.body,function(err,count){
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