import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'



ReactDOM.createRoot(document.getElementById('root')).render(<App />)



 axios.get('http://localhost:3001/notes').then(rest => { const notes = rest.data; console.log(notes)})


const promise2 = axios.get('http://localhost:3001/foobar')

promise2.then(response => {console.log(response)})


