import React from 'react'

function Pagination ({
  numberOfPages,
  currentPage,
  setCurrentPage
}: {
  numberOfPages: number
  currentPage: number
  setCurrentPage: any
}) {
  const pageNumbers: number[] = []
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i)
  }
  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div>
      {currentPage !== 1 && <button onClick={prevPage}>prev </button>}

      {pageNumbers.map(number => {
        if (number < currentPage + 6 && number > currentPage - 6)
          return (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={number == currentPage ? 'active' : ''}
            >
              {number}
            </button>
          )
      })}

      {currentPage !== numberOfPages && (
        <button onClick={nextPage}>next</button>
      )}
    </div>
  )
}

export default Pagination
