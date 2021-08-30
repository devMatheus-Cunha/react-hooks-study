import React, { createContext } from 'react'

export const data = {
  number: 123,
  text: "Context api...",
}

const DataContext = createContext(data)

export default DataContext
