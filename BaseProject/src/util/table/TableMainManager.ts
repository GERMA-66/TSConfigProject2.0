/**
 * 数据表管理
 * Created By WZH
 */
class TableMainManager {

	private static _instance: TableMainManager;
	public static get instance(): TableMainManager {
		if (!this._instance) {
			this._instance = new TableMainManager();
		}
		return this._instance;
	}

	private _txtTables: Object = {};

	public get txtTabels(): Object {
		return this._txtTables;
	}

	/**解析数据表 */
	public parseTable(): void {
		var zip: JSZip = new JSZip(RES.getRes("table_byte"));
		var zipFiles: any = zip["files"];
		for (var key in zipFiles) {
			var name: string = key.substr(0, key.indexOf("."));
			var data: string = zipFiles[key].asText();
			this.registerTxtTables(name, data);
		}
		RES.destroyRes("table_byte");
	}

	/**
	 * 注册表数据
	 */
	public registerTxtTables(name: string, text: string): void {
		if (!name || name == "") return egret.error("name is null");

		var clazz: any = egret.getDefinitionByName(name);
		if (clazz == null) {
			return;
		}

		var dict: Object = this._txtTables[name];
		if (!dict || dict == null) {
			dict = this._txtTables[name] = {};
		}

		var tableLines: Array<string> = text.split("\r\n");
		var length: number = tableLines.length;
		for (var i = 0; i < length; i++) {
			var line: string = tableLines[i];
			if (line == "") {
				egret.error("TableManager.registerTxtTables Error:Table " + name + " line " + (i + 1) + " is empty!");
				continue;
			}
			var table: ITxtTable = new clazz();
			var id: any = table.fillData(line.split("\t"));
			dict[id] = table;
		}
	}

	public unregisterTxtTables(name: string, id: any): void {
		var dict: Object = this._txtTables[name];
		if (dict != null) {
			delete dict[id];
		}
	}

	public getTxtTables(name: string): Object {
		return this._txtTables[name];
	}


    /**
     * 获取Txt数据表
     */
	public getTxtTable(name: string, id: any): ITxtTable {
		var dict: Object = this.getTxtTables(name);
		if (dict != null) {
			return dict[id];
		}
		return null;
	}
}