// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const players = ['warner','smith','Kohli','rohit'];
  const products =[
    {name:'Photoshop', price:"$5.99"},
    {name:'PDF Reader', price:"$2.99"},
    {name:'Illastrator', price:"$5.32"}
  ]

  const friends =[
    { name: 'james anderson' , address :'california'},
    { name: 'adam smith', address:'washington dc'},
    { name :'jemse carby', address:'weales'}

  ]


 
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <ul>
        {
          players.map(player => <li>{player}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          products.map(product => <Products product ={product}></Products>)
        }
      </ul>
        
        <ul>
          {
            friends.map(friend =><Friends friend={friend}></Friends>)
          }
        </ul>
        <Users></Users>
        
        <Crickter name="Rohit Sharma" country ="India"></Crickter>
        <Crickter name = "Gallen Maxwell" country = "Australia"></Crickter>
        <Crickter name = "jos Buttler" country ="England"></Crickter>
        

        
      </header>
    </div>
  );
}

function Crickter(props){
  const styles = {
    border: '1px solid green',
    margin: '10px'
  }
  return (
    <div style={styles}>
      <h1>Name :{props.name} </h1>
      <p>country: {props.country} </p>
    </div>
  );
}

function Products(props){
  const productstyle ={
    backgroundColor:"lightgray",
    border: '1px solid gray',
    borderRadius:'5px',
    height:'200px',
    width:'200px',
    


  }
  const {name, price} =props.product
  return(
    <div style={productstyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>

    </div>
  )
}

function Friends(props){
 
  const{name, address} = props.friend;
  return(
    <div>
        <h1>{name}</h1>
        <h3>{address}</h3>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrese = ()=>{
    // const newCount = count +1;
    setCount(count + 1);
  }
  
  return(
    <div>
      <h1> Count :{count}</h1>
      <button onClick={handleIncrese}>Increse</button>

      <button onClick={()=>setCount(count-1)}>Decrese</button>
    </div>
  )
}
function Users(){

  const [users,setUser] = useState([]) 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUser(data))
  })
  return(
    <div>
      <h3>Dynamic users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
