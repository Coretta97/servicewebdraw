module.exports = app => {
    app.get("/", (req, res) => {
        res.json({status: "Express server for webdraw"});
    });
};