import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['warner','smith','Kohli','rohit'];
  const products =[
    {name:'Photoshop', price:"$5.99"},
    {name:'PDF Reader', price:"$2.99"},
    {name:'Illastrator', price:"$5.32"}
  ]


 
  return (
    <div className="App">
      <header className="App-header">
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

export default App;
