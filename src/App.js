import './App.css';
import ContactCard from './Components/ContactCard';
import contacts from './contacts.json'
import { useState } from "react"

function App() {
  const restContacts = contacts.slice(5)
  const fiveFirst = contacts.slice(0, 5)

  const [randomContact, setRandomContact] = useState(fiveFirst)
  const [orderAlphabetically, setOrderAlphabetically] = useState(fiveFirst)
  const [popularityOrder, setPopularityOrder] = useState(fiveFirst)           //Started iteration 4 but didn´t finish

  const fiveFirstCopy = [...randomContact]


  const addRandom = () => {
    let randomPos = restContacts[Math.floor(Math.random() * restContacts.length)]
    fiveFirstCopy.unshift(randomPos)

    setRandomContact(fiveFirstCopy)
    console.log(randomContact)
  }




  const fiveBody = randomContact.map(contact => {
    return <tbody>
      <tr className='tCard'>
        <th className='picture'>
          <img
            src={contact.pictureUrl}
            alt={contact.name}
            loading="lazy"
          />
        </th>
        <th>{contact.name}</th>
        <th>{contact.popularity}</th>
        <th>{contact.wonOscar ? '🏆' : ''}</th>
        <th>{contact.wonEmmy ? '🏆' : ''}</th>

      </tr>
    </tbody>

  })

  return (
    <div className="App">
      <button onClick={addRandom} >Sort by name</button>
      <button onClick={addRandom} >Sort by popularity</button>
      <button onClick={addRandom} >Add random contact</button>
      <table>
        <thead>
          {/* <tr>
            <th>IronContacts</th>
          </tr> */}
          <tr className='tTitles'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        {fiveBody}

      </table>
    </div>
  );
}

export default App;
