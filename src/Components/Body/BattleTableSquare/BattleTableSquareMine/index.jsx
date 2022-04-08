import { useState } from 'react';
import { BattleTableSquareItem, BattleTableSquareItemTarget, BattleTableSquareItemPosition  } from "../styles";

export function BattleTableSquareMine(){

    const [target, setTarget] = useState(['A5', 'A6', 'A4']);

    const numKeys = Array.from({length: 10}, (_, i) => String(i + 1));
    const letterKeys = ['A','B','C','D','E','F','G','H','I','J'];
    
    const keys = [];

    for( var i = 0; 10 > keys.length; i++ ){
        keys.push({
            key: letterKeys[i],
            value: numKeys,
        });
    }

    // Return the Letter Position to make it standard called by number
    const lp = (l) => {
        var letters = ['A','B','C','D','E','F','G','H','I','J'];
        var i = letters.indexOf(l);
        return keys[i].key;
    }

    const position = (letter, num) => {
        return lp(letter) + keys[0].value[num];
    }

    const checkTarget = (key, num) => {
        return target.find(p => p === String(key+(Number(num+1))) );
    }

    let rows = [];

    keys.forEach(({ key }, i) => {
        keys[i].value.map((e, num) => {
            return rows.push(<BattleTableSquareItem key={position(key, num)}>{
                checkTarget(key, num) === position(key, num) ? 
                <BattleTableSquareItemTarget>x</BattleTableSquareItemTarget> : 
                <BattleTableSquareItemPosition onClick={() => setTarget(prev => [...prev, String(key+(num+1))])}>{position(key, num)}</BattleTableSquareItemPosition>
            }</BattleTableSquareItem>);
        });
    });

    return rows;
}