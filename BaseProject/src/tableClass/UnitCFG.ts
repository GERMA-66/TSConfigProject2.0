
/**
 * 单位表
 */
class UnitCFG extends game_config.$UnitCFG implements ITxtTable {

    /**
     * 下一个表
     */
    public get nextCFG(): UnitCFG {
        return getTable(Tables.UnitCFG, this.ID + 1);
    }

    /**
     * 是否是怪物
     */
    public get isMonster(): boolean {
        return this.Type1 == 10010;
    }
}
