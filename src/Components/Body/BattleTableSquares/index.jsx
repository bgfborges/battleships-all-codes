import { BattleTableSquareItem  } from "./styles";

export function BattleTableSquare(){
    const numKeys = Array.from({length: 10}, (_, i) => String(i + 1));
    const letterKeys = ['A','B','C','D','E','F','G','H','I','J'];
    
    const keys = [];

    for( var i = 0; 10 > keys.length; i++ ){
        keys.push({
            key: letterKeys[i],
            value: numKeys,
        });
    }

    const position = (letter, number) => {
        return keys[letter].key + keys[0].value[number];
    }

    let rows = [];

    keys.forEach((e, i) => {
        keys[i].value.forEach((ee, ii) => {
            
            //console.log(i, ii);
            //console.log(position(i, ii));
            rows.push(<BattleTableSquareItem key={position(i, ii)}><span>{position(i, ii)}</span></BattleTableSquareItem>);
        });
    });

    return rows;
}