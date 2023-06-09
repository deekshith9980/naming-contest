import express from 'express';
import config from './config';
import apiRouter from './api-router'
import serverRender from './render';

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/api", apiRouter);

server.use("/", async(req, res) => {
    const {initialMarkup,initialData} = await serverRender();

    res.render("index",{
       initialMarkup,
       initialData,
    });
})

server.listen(config.PORT,config.HOST, () => {
    console.info(
        "Server listening on port " + config.SERVER_URL     
    );

})