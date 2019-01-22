module.exports = app => {
    var con = require('../connexion');
    return {
        
        getFiles:(user_id,callback) => {
            return con.query('SELECT * FROM files WHERE user_id = ?',[user_id], callback);
        },
        createFile: (file, callback) => {
            return con.query('Insert into files(name, user_id, datefile) values(?,?,?)',[file.name, file.user_id,now()], callback);
        },
        deleteFile: (user_id,name, callback) => {
            return con.query('Delete from files WHERE user_id = ? and name =?',[user_id,name,now()], callback);
        }
    }
}