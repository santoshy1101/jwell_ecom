import React from 'react'

const SortPrice = ({ sortHandler }) => {
  const handleSort = (event) => {
    const selectedValue = event.target.value
    if (selectedValue !== '') {
      sortHandler(selectedValue)
    }
  }

  return (
    <div>
      <select
        className="w-full max-w-xs bg-white select select-accent"
        onChange={handleSort}
      >
        <option value="">Sort By Price</option>
        <option value="ascending">Low To High</option>
        <option value="descending">High To Low</option>
      </select>
    </div>
  )
}

export default SortPrice
