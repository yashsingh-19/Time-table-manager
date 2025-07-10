const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const parser = require('body-parser')
const fs = require('fs')
const path = require('path');
const { url } = require('inspector');
const app = express()
app.use(express.json());
app.use(express.static(__dirname));
app.use(parser.urlencoded({ extended: true }));
// Middleware for CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates/pug'))
// Mongoose
// mongoose.connect('mongodb://127.0.0.1:27017/test-db', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://aneesahu4:sanidhya.09@cluster0.afmgcmf.mongodb.net/TTDB', { useNewUrlParser: true, useUnifiedTopology: true });
// Schema
const Schema = mongoose.Schema;
const dayschema = new Schema({
    "08:30-10:00": Array,
    "10:05-11:35": Array,
    "11:40-13:10": Array,
    "13:15-14:45": Array,
    "14:50-16:20": Array,
    "16:25-17:55": Array,
    "18:00-19:30": Array,
});
const members = new Schema({
    name: String,
    number: Number
});
// Model
const monday = mongoose.model('monday', dayschema);
const tuesday = mongoose.model('tuesday', dayschema);
const wednesday = mongoose.model('wednesday', dayschema);
const thursday = mongoose.model('thursday', dayschema);
const friday = mongoose.model('friday', dayschema);
const saturday = mongoose.model('saturday', dayschema);
const sunday = mongoose.model('sunday', dayschema);
const member = mongoose.model('member', members);

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + "/templates/html/index.html")
})
app.post(`/`, (req, res) => {
    // console.log(req.body.day)
    // console.log(req.body.slots)
    var namearray = []
    var numberarray = []
    member.find({})
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                namearray.push(data[index].name)
            }
            // console.log(namearray)

            // if (req.body.day === "Monday") {
            //     var slotData = []
            //     monday.find({})
            //         .then(found => {
            //             // console.log(found);
            //             var inislotData = found[0][req.body.slots]
            //             const namesToDeleteSet = new Set(inislotData);
            //             slotData = namearray.filter((name) => {
            //                 // return those elements not in the namesToDeleteSet
            //                 return !namesToDeleteSet.has(name);
            //             });
            //             for (let index = 0; index < slotData.length; index++) {
            //                 const element = slotData[index];
            //                 member.find({name:element})
            //                     .then(foundnumer=>{
            //                         // console.log(foundnumer[0].number)
            //                         numberarray.push(foundnumer[0].number)
            //                         // console.log(numberarray)
            //                     })
            //             }

            //         })
            //         .then(dat=>{
            //             finaldata = [slotData,numberarray]
            //             console.log(finaldata[1])
            //             res.render('data', { finaldata })   
            //         })
            // }
            if (req.body.day === "Monday") {
                var slotData = [];
                monday.find({})
                    .then((found) => {
                        // console.log(found);
                        // console.log(req.body.slots);
                        var inislotData = found[0][req.body.slots];
                        // console.log(inislotData)
                        const namesToDeleteSet = new Set(inislotData);
                        slotData = namearray.filter((name) => {
                            // return those elements not in the namesToDeleteSet
                            return !namesToDeleteSet.has(name);
                        });
                        const promises = [];
                        for (let index = 0; index < slotData.length; index++) {
                            const element = slotData[index];
                            promises.push(
                                member
                                    .find({ name: element })
                                    .then((foundnumer) => foundnumer[0].number),
                            );
                        }
                        return Promise.all(promises);
                    })
                    .then((dat) => {
                        finaldata = [slotData, dat];
                        // console.log(finaldata[1]);
                        res.render("data", { finaldata });
                    });
            }
            else if (req.body.day === "Tuesday") {
                tuesday.find({})
                .then((found) => {
                    // console.log(found);
                    // console.log(req.body.slots);
                    var inislotData = found[0][req.body.slots];
                    // console.log(inislotData)
                    const namesToDeleteSet = new Set(inislotData);
                    slotData = namearray.filter((name) => {
                        // return those elements not in the namesToDeleteSet
                        return !namesToDeleteSet.has(name);
                    });
                    const promises = [];
                    for (let index = 0; index < slotData.length; index++) {
                        const element = slotData[index];
                        promises.push(
                            member
                                .find({ name: element })
                                .then((foundnumer) => foundnumer[0].number),
                        );
                    }
                    return Promise.all(promises);
                })
                .then((dat) => {
                    finaldata = [slotData, dat];
                    // console.log(finaldata[1]);
                    res.render("data", { finaldata });
                });
            } else if (req.body.day === "Wednesday") {
                wednesday.find({})
                .then((found) => {
                    // console.log(found);
                    // console.log(req.body.slots);
                    var inislotData = found[0][req.body.slots];
                    // console.log(inislotData)
                    const namesToDeleteSet = new Set(inislotData);
                    slotData = namearray.filter((name) => {
                        // return those elements not in the namesToDeleteSet
                        return !namesToDeleteSet.has(name);
                    });
                    const promises = [];
                    for (let index = 0; index < slotData.length; index++) {
                        const element = slotData[index];
                        promises.push(
                            member
                                .find({ name: element })
                                .then((foundnumer) => foundnumer[0].number),
                        );
                    }
                    return Promise.all(promises);
                })
                .then((dat) => {
                    finaldata = [slotData, dat];
                    // console.log(finaldata);
                    res.render("data", { finaldata });
                });
            } else if (req.body.day === "Thursday") {
                thursday.find({})
                .then((found) => {
                    // console.log(found);
                    // console.log(req.body.slots);
                    var inislotData = found[0][req.body.slots];
                    // console.log(inislotData)
                    const namesToDeleteSet = new Set(inislotData);
                    slotData = namearray.filter((name) => {
                        // return those elements not in the namesToDeleteSet
                        return !namesToDeleteSet.has(name);
                    });
                    const promises = [];
                    for (let index = 0; index < slotData.length; index++) {
                        const element = slotData[index];
                        promises.push(
                            member
                                .find({ name: element })
                                .then((foundnumer) => foundnumer[0].number),
                        );
                    }
                    return Promise.all(promises);
                })
                .then((dat) => {
                    finaldata = [slotData, dat];
                    // console.log(finaldata[1]);
                    res.render("data", { finaldata });
                });
            } else if (req.body.day === "Friday") {
                friday.find({})
                .then((found) => {
                    // console.log(found);
                    // console.log(req.body.slots);
                    var inislotData = found[0][req.body.slots];
                    // console.log(inislotData)
                    const namesToDeleteSet = new Set(inislotData);
                    slotData = namearray.filter((name) => {
                        // return those elements not in the namesToDeleteSet
                        return !namesToDeleteSet.has(name);
                    });
                    const promises = [];
                    for (let index = 0; index < slotData.length; index++) {
                        const element = slotData[index];
                        promises.push(
                            member
                                .find({ name: element })
                                .then((foundnumer) => foundnumer[0].number),
                        );
                    }
                    return Promise.all(promises);
                })
                .then((dat) => {
                    finaldata = [slotData, dat];
                    // console.log(finaldata[1]);
                    res.render("data", { finaldata });
                });
            } else if (req.body.day === "Saturday") {
                saturday.find({})
                .then((found) => {
                    // console.log(found);
                    // console.log(req.body.slots);
                    var inislotData = found[0][req.body.slots];
                    // console.log(inislotData)
                    const namesToDeleteSet = new Set(inislotData);
                    slotData = namearray.filter((name) => {
                        // return those elements not in the namesToDeleteSet
                        return !namesToDeleteSet.has(name);
                    });
                    const promises = [];
                    for (let index = 0; index < slotData.length; index++) {
                        const element = slotData[index];
                        promises.push(
                            member
                                .find({ name: element })
                                .then((foundnumer) => foundnumer[0].number),
                        );
                    }
                    return Promise.all(promises);
                })
                .then((dat) => {
                    finaldata = [slotData, dat];
                    // console.log(finaldata[1]);
                    res.render("data", { finaldata });
                });
            } else if (req.body.day === "Sunday") {
                sunday.find({})
                .then((found) => {
                    // console.log(found);
                    // console.log(req.body.slots);
                    var inislotData = found[0][req.body.slots];
                    // console.log(inislotData)
                    const namesToDeleteSet = new Set(inislotData);
                    slotData = namearray.filter((name) => {
                        // return those elements not in the namesToDeleteSet
                        return !namesToDeleteSet.has(name);
                    });
                    const promises = [];
                    for (let index = 0; index < slotData.length; index++) {
                        const element = slotData[index];
                        promises.push(
                            member
                                .find({ name: element })
                                .then((foundnumer) => foundnumer[0].number),
                        );
                    }
                    return Promise.all(promises);
                })
                .then((dat) => {
                    finaldata = [slotData, dat];
                    // console.log(finaldata[1]);
                    res.render("data", { finaldata });
                });
            } else {
                // Handle the default case here
                res.send("Some Error Found")
            }
        })

})
app.listen(80, () => {
    console.log(`Server Started at port : http://127.0.0.1`);
});
