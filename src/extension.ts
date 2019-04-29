import * as vscode from 'vscode';
import commandName from './comman/commandName';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("_(:з」∠)_ Welcome!");
    entryEventReg();
}

function entryEventReg(){
    vscode.commands.registerCommand(commandName.entryCommand,()=>{
        console.log("Info...");
    })
}