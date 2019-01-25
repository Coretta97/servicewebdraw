module.exports = app => {
    var con = require('../connexion');
    return {

        getFiles:(user_id,callback) => {
            return con.query('SELECT * FROM files WHERE user_id = ?',[user_id], callback);
        },
        createFile: (file, callback) => {
            return con.query('Insert into files(name, user_id, datefile, content) values(?,?,?,?)',[file.name, file.user_id,now(), JSON.stringify({"nodes":[],"links":[]})], callback);
        },
        saveFile: (file, callback) => {
            return con.query('UPDATE files SET name=?, datefile=?, content=? where idfile = ?',[file.name, String(new Date()) ,file.content, file.idfile], callback);
        },
        deleteFile: (file, callback) => {
            return con.query('Delete from files WHERE idfile = ?',[file.idfile], callback);
        }
    }
}