// import React from 'react'
import data from '../Files/sample.json'
import { useEffect, useState } from 'react'

const Data = () => {
  const [Data, setData] = useState(null)

  const handleDataimport= () => {
    setData(data)
  }

  useEffect(() => {
    handleDataimport()
  }, [])
  
  return (
    Data
  )
}

export default Data

