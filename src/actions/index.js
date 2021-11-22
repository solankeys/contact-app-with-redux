import { ADD_ITEMS, REMOVE_ITEMS } from '../action-types/action-type'

export const addContacts = (data) => {
  return {
    type: ADD_ITEMS,
    payLoad: {
      id: new Date().getTime().toString(),
      data: data,
    },
  }
}

export const removeItems = (id) => {
  return {
    type: REMOVE_ITEMS,
    id,
  }
}
