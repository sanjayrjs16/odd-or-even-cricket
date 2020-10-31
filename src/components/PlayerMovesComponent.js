import React, {useCallback} from 'react';


 function PlayerMovesComponent(props) {
    const setMoves = useCallback( (number, move, startGame = props.startGame) => {
        if(props.countBalls){
            props.decrementBalls();
        }
        props.setPlayerMove(number, move, startGame);
        const computermove = Math.floor(Math.random() * 7);
        switch(computermove){
            case 0: {
                props.setComputerMove(0,"✊", startGame);
                break;
            }
            case 1: {
                props.setComputerMove(1, "☝", startGame);
                break;
            }
            case 2: {
                props.setComputerMove(2, "✌", startGame);
                break;
            }
            case 3: {
                props.setComputerMove(3, "👌", startGame);
                break;
            }
            case 4: {
                props.setComputerMove(4, "4️⃣", startGame);
                break;
            }
            case 5: {
                props.setComputerMove(5, "🖐", startGame);
                break;
            }
            case 6: {
                props.setComputerMove(6, "6️⃣", startGame);
                break;
            }
            default:
                 props.setComputerMove(0, <span role="img" aria-label="fist">✊</span>, startGame);
                break;
        }
    })
    return (
        <div>
            <h2> Pick a move</h2>
            <div>
                <button className="game-button" onClick={()=> setMoves(0,"✊")}><span role="img" aria-label="fist">✊</span> </button> 
                <button className="game-button" onClick={()=> setMoves(1,"☝")} ><span role="img" aria-label="index-finger-hand">☝</span></button>
                <button className="game-button" onClick={()=> setMoves(2,"✌")} ><span role="img" aria-label="two-finger-hand">✌</span> </button>
                <button className="game-button" onClick={()=> setMoves(3,"👌")} ><span role="img" aria-label="super-hand">👌</span></button>
                <button className="game-button" onClick={()=> setMoves(4,"4️⃣")} ><span role="img" aria-label="four">4️⃣</span> </button>
                <button className="game-button" onClick={()=> setMoves(5,"🖐")} ><span role="img" aria-label="five-fingers">🖐</span> </button>
                <button className="game-button" onClick={()=> {setMoves(6,"6️⃣")}} ><span role="img" aria-label="six">6️⃣</span> </button>
         
            </div>
        </div>
    )
}
// s

export default PlayerMovesComponent