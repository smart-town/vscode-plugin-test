import * as vscode from 'vscode';
import { extensionGlobal, commandsName } from '../common/VarDefine';
let varGlobal:extensionGlobal;

export default function(global:extensionGlobal){
    varGlobal = global;
    // let provider = new FlowDataProvider();
    varGlobal.treedatas = new FlowDataProvider();
    vscode.window.createTreeView("<(￣ˇ￣)/",{
        treeDataProvider: varGlobal.treedatas,
    });
    vscode.commands.registerCommand(commandsName.viewRefresh1, ()=>{varGlobal.treedatas.refresh()});
}

export class FlowDataProvider implements vscode.TreeDataProvider<vscode.TreeItem>{
    _onDidChangeTreeData: vscode.EventEmitter<vscode.TreeItem | undefined> = new vscode.EventEmitter<vscode.TreeItem | undefined>();
    onDidChangeTreeData:vscode.Event<vscode.TreeItem | undefined> = this._onDidChangeTreeData.event;
    refresh(): void {
        console.log("Refresh viewData")
        console.log(varGlobal.treedatas);
        // let b = new vscode.TreeItem("O-O");
        this._onDidChangeTreeData.fire();
    } 
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        // console.log("viewDatas.ts ==>", element);
        return element;
    }
    getChildren(element?: vscode.TreeItem): vscode.ProviderResult<vscode.TreeItem[]> {
        console.log("getChildren...",element);
        return generateTreeData(Math.random()*10);
    }
}

function generateTreeData(arg:any):vscode.TreeItem[]{
    let a = new vscode.TreeItem("QaQ"+Math.round(arg));
    let b = new vscode.TreeItem("O-O"+Math.round(arg));
    return [a,b];
}