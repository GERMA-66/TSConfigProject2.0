var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 单位表
 */
var UnitCFG = (function (_super) {
    __extends(UnitCFG, _super);
    function UnitCFG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UnitCFG.prototype, "nextCFG", {
        /**
         * 下一个表
         */
        get: function () {
            return getTable(Tables.UnitCFG, this.ID + 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnitCFG.prototype, "isMonster", {
        /**
         * 是否是怪物
         */
        get: function () {
            return this.Type1 == 10010;
        },
        enumerable: true,
        configurable: true
    });
    return UnitCFG;
}(game_config.$UnitCFG));
__reflect(UnitCFG.prototype, "UnitCFG", ["ITxtTable"]);
//# sourceMappingURL=UnitCFG.js.map