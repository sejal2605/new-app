import logo from './logo.svg';
import './App.css';
import User from './class';
function App() {
  let data = "Sejal Singh"
  function Apple()
  {
    data = "Riya Singh"
    alert(data)
    alert("Function Called")
    // return(<div> Apple component </div>)
}
  return (
    <>
    <div className="App">
      <h1>HELLO, GOOD MORNING</h1>
      <h2>{data}</h2>
      <button onClick={Apple}>CLICK ME</button><br></br>
      <button onClick={Apple()}>CLICK ME</button><br></br>
      <button onClick={()=>Apple()}>Click</button><br></br>
      <button onClick={()=>alert("HELLO")}>Click</button>
      {/* <User/> */}
      {/* {Apple()}     */}
      {/* <Apple/> */}
    </div>
    </>
  );
}

export default App;
