import * as vscode from 'vscode';
import * as mysql from 'mysql';
import * as viewDatas from "../mysql/viewDatas"
export interface extensionGlobal {
    currentWebViewPanel: vscode.WebviewPanel|undefined,
    context: vscode.ExtensionContext,
    dbconnection: mysql.Connection | undefined,
    treedatas?: viewDatas.FlowDataProvider,
}
export var webviewFilePath = {
    webview1: ['src','dist','index.html'],
}
export var dbconfig: mysql.ConnectionConfig ={
    'host': 'localhost',
    'user': 'root',
    'password': 'root123',
    'database': 'test',
    'port': 3306,
}
export const commandsName = {
    "dbCommand1" : "myextension.dbtest1",
    "dbCommand2" : "myextension.dbtest2",
    "virtualDoc1": "myextension.virtual3",
    "entryCommand": "myplugin.entryCommand",
    "database1":"myextension.database1",
    "viewRefresh1":"myextension.viewsRefresh1"
}
