module.exports = app => {
    const files = app.models.files;
    
    app.get("/files/:id", (req, res) => {
        var id = req.params.id;
        files.getFiles(id, (err,rows) => {
            if(err) {
                res.json({
                    'error':  1
                })
            }
            else
            {
                res.json({
                    'files': rows
                })

            }
        });
    });
    app.post("/create-file", (req, res) => {
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
    app.post("/save-file", (req, res) => {
        files.saveFile(req.body,function(err,count){
            if(err)
            {
                res.status(400).json(err);
            }
            else{
                res.json(req.body);
            }
        });
    });
    app.post("/delete-file", (req, res) => {
        files.deleteFile(req.body, (err,rows) => {
            if(err) {
                res.status(400).json(err);
            }
            else
            {
                res.json(req.body);
            }
        });
    });
};