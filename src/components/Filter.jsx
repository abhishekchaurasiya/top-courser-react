import React from 'react';

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title)
  }

  return (
    <div className=' w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map((data, id) => {
          return <button key={id}
            className={`bg-[#0C102A] text-white rounded-md px-2 py-1 font-medium hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ?
                "bg-opacity-60 border-white" :
                "bg-opacity-40 border-transparent"}
            `}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        })
      }
    </div>
  )
}

export default Filter
