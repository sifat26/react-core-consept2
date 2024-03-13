import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert("Button Clicked");
  }
 const  handleClick2=()=>{
    alert("Button 2 Cliked");

  }


  return (
    <>

     
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}> Click Me</button>
      <button onClick={handleClick2}>Button Click 2</button>

    
    </>
  )
}

export default App
