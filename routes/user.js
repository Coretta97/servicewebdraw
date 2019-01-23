module.exports = app => {
    const User = app.models.user;
    app.post("/login", (req, res) => {
        User.getUser(req.body,function(err,rows){
            if(err) {
                console.log("Erreur d'authentification")
                res.json({
                    'error': 1
                })
            }
            else
            {
                if (rows.length) {
                    let row = rows[0]
                    res.json({
                        'iduser':  row.iduser,
                        'username':  row.username,
                        'email':  row.email,
                        'last_name': row.last_name,
                        'first_name': row.first_name,
                        'tel' : row.tel,
                        'password' : row.password
                    })
                }
                else
                    res.json({'auth-error' : 1});
            }
        });
    });
    app.post("/create-user", (req, res) => {
        User.createUser(req.body,function(err,rows){
            if(err)
            {
                console.log("Erreur de creation")
                res.json({
                    'error' : 1
                })
            }
            else{
                console.log("Creation d'un user");
                res.json(rows[0]);
            }
        });
    });
    app.get('/emails-usernames', (req, res) => {
        User.getEmailsUsernames(function (err, rows) {
            if (err) {
                res.json({
                    'error' : 1
                })
            }
            else {
                var emails = []
                var usernames = []
                for (var row in rows) {
                    row = rows[row];
                    emails.push(row.email)
                    usernames.push(row.username)
                }
                res.json({
                    'emails' : emails,
                    'usernames' : usernames
                })
            }
        })
    });
};