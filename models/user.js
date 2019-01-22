module.exports = app => {
    var con = require('../connexion');
    return {
        getUser:(name,pw,callback) => {
            return con.query('SELECT * FROM user WHERE last_name = ? and password = ?',[name,pw], callback);
        },
        createUser: (user, callback) => {
            return con.query('Insert into user(last_name,first_name,email,password,tel) values(?,?,?,?,?)',[user.last_name, user.first_name,user.email,user.password,user.tel], callback);
        }
    }
}