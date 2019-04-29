import * as vscode from 'vscode';

export default function(){
    
    vscode.window.createTreeView("<(￣ˇ￣)/",{
        treeDataProvider: new FlowDataProvider(),
    });
}

export class FlowDataProvider implements vscode.TreeDataProvider<vscode.TreeItem>{
    getTreeItem(element: vscode.TreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        console.log("viewDatas.ts ==>", element);
        return element;
    }
    getChildren(element?: vscode.TreeItem): vscode.ProviderResult<vscode.TreeItem[]> {
        return generateTreeData();
    }
}

function generateTreeData():vscode.TreeItem[]{
    let a = new vscode.TreeItem("QaQ");
    let b = new vscode.TreeItem("O-O");
    return [a,b];
}