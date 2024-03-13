import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const teamDesign={
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'

    }

    const handleAdd=()=>{
        
        setTeam(team+1);
    }
    const handleRemove=()=>{
        setTeam(team-1)
    }
    return(
        <div style={teamDesign}>
            <h1>Team</h1>
            <p>Player: {team}</p>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>

        </div>
    )
}