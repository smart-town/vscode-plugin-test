//根据template.json以及data.json生成package.json
const path = require("path");
const fs = require("fs");
var dataName = "data.json";
var templateName = "template.json";
var datapath = path.resolve(__dirname, dataName);
var templatePath = path.resolve(__dirname, templateName);
var resultName = path.resolve(__dirname, "package.json");

var readObjFromFile = function (filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (error, data) => {
            if (error) return reject(error);
            resolve(JSON.parse(data.toString()));
        })
    })
}
function errorInfo(error) {
    console.error(error);
}

var datasource = readObjFromFile(datapath);
var objsource = readObjFromFile(templatePath);
var dataobj = {};
var objobj = {};
async function getDatas() {
    await datasource.then((data) => {
        dataobj = data;
    }, errorInfo).catch(errorInfo);
    await objsource.then((data) => {
        objobj = data;
    }, errorInfo).catch(errorInfo);
    contributeCommands(dataobj, objobj);
    fs.writeFile(resultName, JSON.stringify(objobj), errorInfo);
    console.log("==Generate file to " + resultName);
}
function contributeCommands(data, obj) {
    let keys = data.commands;
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
        obj.contributes.commands[i] = generateComand(keys[i]);
    }
}
function generateComand(commandsId) {
    return {
        "command": commandsId,
        "title": commandsId,
    }
}
getDatas();