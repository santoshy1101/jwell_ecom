import React, { useState } from 'react'

const Filter = ({ filterHandler }) => {
  const chooseHandler = (event) => {
    const selectedValue = event.target.value
    if (selectedValue !== '') {
      filterHandler(selectedValue)
    }
  }

  return (
    <div className="p-5">
      <select
        name="metal"
        className="w-full max-w-xs bg-white select select-info"
        onChange={chooseHandler}
      >
        <option value="">Select Metal</option>
        <option value="all">All</option>
        <option value="white gold">White Gold</option>
        <option value="yellow gold">Yellow Gold</option>
        <option value="rose gold">Rose Gold</option>
      </select>
    </div>
  )
}

export default Filter
