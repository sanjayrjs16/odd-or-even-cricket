import React , {useEffect} from 'react'
import GameScreenComponent from './GameScreenComponent'
import PlayerMovesComponent from './PlayerMovesComponent'

export default function TossComponent(props) {
   
       useEffect( () => {
           
        if(props.playerMove !== undefined && props.computerMove !== undefined){
            console.log("inside useeffect", props.playerMove.number)
            if((props.playerMove.number + props.computerMove.number)%2 === 0 && props.tossCall==="EVEN"){
                props.setTossWinner(props.tossCaller);
                props.setTossCompleted();
            }
            else if((props.playerMove.number + props.computerMove.number)%2 !== 0 && props.tossCall==="ODD"){
                props.setTossWinner(props.tossCaller);
                props.setTossCompleted();
            }
            else{
                    if(props.tossCaller === "You"){
                        props.setTossWinner("Computer");
                        props.setTossCompleted();
                    }
                    else{
                        props.setTossWinner("You");
                        props.setTossCompleted();
                    }
            }
        
    }
       }, [props]);
    
    return (
        <div>
            <GameScreenComponent playerMove={props.playerTossMove} computerMove={props.computerTossMove}/>
            <PlayerMovesComponent setPlayerMove={props.setPlayerMove} setComputerMove={props.setComputerMove} countBalls={false} startGame={false}/>
            {console.log("You chose", props.playerTossMove, "and computer chose", props.computerTossMove)}
           
        </div>
    )
}
