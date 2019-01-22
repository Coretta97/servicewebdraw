module.exports = app => {
    app.listen(app.get("port"), () => {
        console.log(`Express serving - Port ${app.get("port")}`);
    });
};