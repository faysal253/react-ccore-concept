import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const teams = ['Faysal', 'Anik', 'Rakib', 'Jaka', 'foreain', 'Siraj']
  const products = [
    { name: 'Photshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$7.99' },
    { name: 'Primere pro', price: '$80.99' }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react parson.</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            teams.map(team => <li>{team}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(pd => <Product product={pd} ></Product>)
        }

        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Person name='f4y542H' jobs='Hacker'></Person>
        <Person name='Jaka' jobs='master-mind'></Person>
        <Person name='Mahedi' jobs='idea'></Person>
        <Person name='Rakib' jobs='cracker'></Person>
        <Person name='Anik' jobs='master-mind-hacker'></Person>

        {/* todos */}
        <Todos></Todos>
        {/* todos */}
      </header>
    </div >
  );
}

function Product(props) {
  const productStyle = {
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
    height: '400px',
    width: '400px',
    float: 'left',
    marginBottom: '20px'
  }
  const { name, price } = props.product
  return (
    <div style={productStyle}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{ border: '1px solid yellow', weight: 'bold', width: '700px', display: 'inline-block' }}>
      <h1>Name:{props.name}</h1>
      <h3 style={{ color: 'red' }}>Profession:{props.jobs}</h3>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(11)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

// ============================ useState =====================================================
function Users() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])

  return (
    <div>
      <h2>Dynamic users{users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
// ============================ End useState ===========================================

// ===================================Start todo=======================================
function Todos() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])
  return (
    <div div >
      <h3>Toods:{todos.length}</h3>
      <ul>
        {
          todos.map(todo => <li>{todo.title}</li>)
        }
      </ul>
      {
        console.log(todos)
      }
    </div >
  )
}
// ===================================End todo========================================
export default App;
