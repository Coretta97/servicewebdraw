
    var mysql      = require('mysql');
    var con = mysql.createPool({
        host            : 'localhost',
        user            : 'root',
        password        : '',
        database        : 'webdraw',
        connectionLimit : 10,               // this is the max number of connections before your pool starts waiting for a release
        multipleStatements : true           // it helps prevent nested sql statements, it can be buggy though, so be careful
    });
    
    module.exports=con;
