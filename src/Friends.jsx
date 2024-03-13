import { useEffect, useState } from "react";
import './box.css'
import Friend from "./Friend";

export default function Friends(){
    const [friends,setFriends]=useState([])
useEffect(()=>{
  const loadData= async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await res.json();
    setFriends(data);

  }
  loadData();

}
,[])

    return(
        <div className="box">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friond=><Friend friind={friond}></Friend>)
            }
        </div>
    )
}