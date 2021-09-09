const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pdf = require('html-pdf');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const pdfTemplate = require("./templates/template1");

const options = {

        height: "40cm",
        width: "29cm",
        timeout:"60000"

}

app.post('/generate', (req, res) => {

        pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {

                        if(err) {

                                console.log(err);
                                res.send(Promise.reject());

                        } else {

                                res.send(Promise.resolve());

                        }
        })
        

})

app.get('/download', (req, res) => {

        console.log('get request');
        const file = `${__dirname}/Resume.pdf`;
        res.download(file);

})

app.listen(8800, () => console.log('Server started and tuned at port 8800'))