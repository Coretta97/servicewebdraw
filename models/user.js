module.exports = app => {
    var con = require('../connexion');
    return {
        getUser:(email,pw,callback) => {
            return con.query('SELECT * FROM user WHERE email = ? and password = ?',[email,pw], callback);
        },
        createUser: (user, callback) => {
            return con.query('INSERT INTO user(username,last_name,first_name,email,password,tel) values(?,?,?,?,?,?)',[user.username, user.last_name, user.first_name,user.email,user.password,user.tel], callback);
        }
    }
}