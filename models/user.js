module.exports = app => {
    var con = require('../connexion');
    var crytojs = require("crypto-js/sha256")
    return {
        getUser:(user,callback) => {
            con.query('SELECT * FROM user WHERE (email = ? OR username = ? ) AND password = ? LIMIT 1',[user.email, user.email,crytojs(user.password).toString()], callback);
        },
        createUser: (user, callback) => {
            con.query('INSERT INTO user(username,last_name,first_name,email,password,tel) VALUES(?,?,?,?,?,?)',[user.username, user.last_name, user.first_name,user.email,crytojs(user.password).toString(),user.tel],function (err, rows) {
                if (err) {
                    callback(err, null);
                }
                else
                {
                    con.query('SELECT * FROM user ORDER BY idUser DESC LIMIT 1',callback)
                }
            });

        },

        getEmailsUsernames: (callback) => {
            con.query('SELECT email, username FROM user',callback)
        }
    }
}