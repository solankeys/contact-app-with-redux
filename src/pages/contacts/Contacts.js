import React, { useState } from 'react'
import './Contacts.css'
import { useDispatch, useSelector } from 'react-redux'
import { addContacts, removeItems } from '../../actions'

const Contacts = () => {
  const [inputData, setInputData] = useState('')
  const list = useSelector((state) => state.todoReducers.list)

  const dispatch = useDispatch()

  //remove items
  // const removalFromListHandler = (item) => {
  //   const deletedItem = list.filter(({ id }) => id !== item.id)
  //   dispatch(removeItems(deletedItem))
  // }

  return (
    <div className='contacts-page'>
      <h1>Clientside Contacts Application</h1>
      <hr />
      <div className='add-items'>
        <h3>Add Contact Form</h3>
        <input
          className='input-add'
          type='text'
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <br />
        <button
          className='add-btn'
          onClick={() => dispatch(addContacts(inputData), setInputData(''))}
        >
          Add
        </button>
      </div>
      <div className='contact-list'>
        {list.map((elem) => {
          return (
            <div key={elem.id} className='items-list'>
              <h3>{elem.data}</h3>
              <button
                className='remove-btn'
                onClick={() => dispatch(removeItems(inputData))}
              >
                Remove{' '}
              </button>
            </div>
          )
        })}
      </div>
      {/* <div className='check-list'>
        <button onClick={() => dispatch(clearItems())}>Check list</button>
      </div> */}
    </div>
  )
}

export default Contacts
