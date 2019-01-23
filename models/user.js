module.exports = app => {
    var con = require('../connexion');
    return {
        getUser:(user,callback) => {
            con.query('SELECT * FROM user WHERE email = ? AND password = ?',[user.email,user.password], callback);
        },
        createUser: (user, callback) => {
            con.query('INSERT INTO user(username,last_name,first_name,email,password,tel) VALUES(?,?,?,?,?,?)',[user.username, user.last_name, user.first_name,user.email,user.password,user.tel],function (err, rows) {
                if (err) {
                    callback(err, null);
                }
                else
                {
                    con.query('SELECT * FROM user ORDER BY idUser DESC LIMIT 1',callback)
                }
            });

        }
    }
}