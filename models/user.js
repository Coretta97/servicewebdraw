module.exports = app => {
    var con = require('../connexion');
    return {
        getUser:(user,callback) => {
            return con.query('SELECT * FROM user WHERE email = ? and password = ?',[user.email,user.password], callback);
        },
        createUser: (user, callback) => {
            return con.query('Insert into user(last_name,first_name,email,password,tel) values(?,?,?,?,?)',[user.last_name, user.first_name,user.email,user.password,user.tel], callback);
        }
    }
}