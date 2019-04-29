import * as mysql from 'mysql';
import * as vscode from 'vscode';
import { extensionGlobal,dbconfig,commandsName} from '../common/VarDefine';
import queryTest from "./queryData";
import viewDatas from "./viewDatas";

let varGlobal :extensionGlobal;
export default function(globalVar:extensionGlobal){
    varGlobal = globalVar;
    //注册命令
    dbTestFuncRegister();
    queryTest(globalVar);
    viewDatas();
}


function createConnect():undefined|mysql.Connection{
    try {
        let connection = mysql.createConnection(dbconfig);
        vscode.window.showInformationMessage("数据库连接成功"+JSON.stringify(dbconfig));
        return connection;
    } catch(e){
        console.log(e);
        console.error("====数据库连接失败====");
        vscode.window.showInformationMessage("数据库连接失败"+JSON.stringify(dbconfig));
        return undefined;
    }
}
function dbTestFuncRegister() {
    vscode.commands.registerCommand(commandsName.database1,()=>{
        let content=['是否打开数据库连接','是否关闭数据库连接'];
        let flag = 0;//默认未打开
        if(varGlobal.dbconnection !== undefined) {
            flag = 1;
        }
        let choose = vscode.window.showQuickPick(["确定", "取消"], { placeHolder: content[flag] });
        choose.then((data) => {
            if (data) {
                if (data === "确定") { //ts校验。。。
                    if(flag === 0){
                        varGlobal.dbconnection = createConnect();
                    } else {
                        if(varGlobal.dbconnection!=undefined)//ts校验
                            varGlobal.dbconnection.end();
                        varGlobal.dbconnection = undefined;
                        vscode.window.showInformationMessage("数据库连接已关闭");
                    }
                }
            }
        })
    });
}
