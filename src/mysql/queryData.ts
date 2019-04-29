import * as vscode from 'vscode';
import { extensionGlobal,commandsName } from '../common/VarDefine';

let varGlobal:extensionGlobal;
export default function(globalVar:extensionGlobal){
    varGlobal=globalVar;
    queryTestFunc();
}

function queryTestFunc(){
    vscode.commands.registerCommand(commandsName.dbCommand2, ()=>{
        if(varGlobal.dbconnection===undefined){
            vscode.window.showInformationMessage("请先打开数据库连接");
            return;
        }
        let query = vscode.window.showInputBox({placeHolder:"请输入查询语句"}) ;
        query.then(data=>{
            if(data){
                dealQueryInput(data);
            }
        });
    })
}

function dealQueryInput(query:string){
    if(varGlobal.dbconnection){
        varGlobal.dbconnection.query(query,(err,data)=>{
            if(err){
                console.log("query error!");
                console.log(err);
                return;
            }
            console.log("BEGIN=======查询结果");
            
            dealData(data);
            
            console.log("END=======查询结果");
        })
    }
}
function dealData(data){
    console.log(data);
    if(Array.isArray(data)){
        for(let x=0; x<data.length; x++){
            console.log(JSON.stringify(data[x]));
        }
    }
}