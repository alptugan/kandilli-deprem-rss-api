const express = require("express");
var parseString = require("xml2js").parseString;
const axios = require("axios").default;
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the Kandilli Earthquake RSS API");
});

const selectCity = (text) => {
    let myCity = text.split(" ");
    myCity.splice(0, 2);
    myCity.splice(myCity.length - 2, 2);
    return myCity.join(" ");
};

const selectDetails = (text) => {
    let myArray = text.split(" ");
    return myArray;
};

app.get("/last/:p", (req, res) => {
    const region = req.query.region;
    axios
        .get("http://www.koeri.boun.edu.tr/rss/")
        .then(function (response) {
            // handle success
            parseString(response.data, function (err, result) {
                let list = result.rss.channel[0].item;
                let earthquakeList = [];
                let filteredEarthquakeList = [];

                //console.table(earthquakeList);
                //console.table(filteredEarthquakeList);
                for (i = 0; i < list.length; i++) {
                    const city = selectCity(list[i].title[0]);
                    const details = selectDetails(list[i].description[0]);

                    const item = {
                        region: city,
                        date: details[0],
                        time: details[1],
                        magnitude: details[2],
                        scale: details[3],
                        lat: details[4],
                        long: details[5],
                        //depth: details[6],
                    };
                    if (!region || city.includes(region)) {
                        filteredEarthquakeList.push(item);
                    }
                }

                earthquakeList = filteredEarthquakeList.slice(0, req.params.p);
                res.header({
                    "Access-Control-Allow-Origin": "*",
                    "Cache-Control": "s-maxage=0, stale-while-revalidate",
                });
                res.format({
                    json: () => {
                        res.send(earthquakeList);
                    },
                });
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
});

app.listen(8080, () => {
    console.log("Server started at port 8080");
});

module.exports = app;
