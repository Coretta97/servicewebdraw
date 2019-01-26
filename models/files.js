module.exports = app => {
    var con = require('../connexion');
    return {

        getFiles: (user_id, callback) => {
            return con.query('SELECT * FROM files WHERE user_id = ?', [user_id], callback);
        },
        createFile: (file, callback) => {
            con.query('Insert into files(name, user_id, datefile, content) values(?,?,now(),?)', [file.name, file.user_id, JSON.stringify({
                "nodes": [],
                "links": []
            })], (err, rows) => {
                if (err) {
                    callback(err, null)
                } else {
                    con.query('SELECT * FROM files ORDER BY idfile  DESC LIMIT 1',callback)
                }
            });
        },
        saveFile: (file, callback) => {
            return con.query('UPDATE files SET name=?, datefile=now(), content=? where idfile = ?', [file.name, file.content, file.idfile], callback);

        },
        deleteFile: (file, callback) => {
            return con.query('DELETE FROM files WHERE idfile = ?', [file.idfile], callback);
        }
    }
}