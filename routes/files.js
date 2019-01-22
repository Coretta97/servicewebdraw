module.exports = app => {
    const files = app.models.files;
    
    app.get("/fichiers/:id", (req, res) => {
        var id = req.params.id;
        files.getFiles(id, (err,rows) => {
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });
    app.post("/enregistrer-fichier", (req, res) => {
        files.createFile(req.body,function(err,count){
            if(err)
            {
                res.status(400).json(err);
            }
            else{
                res.json(req.body);
            }
        });
    });
    app.get("/supprimer-fichier/:id/:name", (req, res) => {
        var id = req.params.id;
        var name = req.params.name;
        files.deleteFile(id,name, (err,rows) => {
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(rows);
            }
        });
    });
};