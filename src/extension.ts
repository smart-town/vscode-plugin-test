import * as vscode from 'vscode';
import { extensionGlobal, commandsName } from './common/VarDefine';
import databaseInitial from "./mysql/mysqlInitial";

let varGlobal:extensionGlobal= {
    dbconnection:undefined,
    context:undefined,
    currentWebViewPanel:undefined,
};
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("_(:з」∠)_ Welcome!");
    varGlobal.context = context;
    entryEventReg();
    databaseInitial(varGlobal);
}

function entryEventReg(){
    vscode.commands.registerCommand(commandsName.entryCommand,()=>{
        console.log("Info...");
    })
}