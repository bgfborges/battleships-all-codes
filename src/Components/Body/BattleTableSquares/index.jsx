import { BattleTableSquareItem  } from "./styles";

export function BattleTableSquare(){
    const rowLimit = 100;
    let rows = [];
    for (let i = 0; i < rowLimit; i++) {
        rows.push(<BattleTableSquareItem key={Math.floor(Date.now() + i)}><span>&#10005;</span></BattleTableSquareItem>);
    }
    return rows;
}