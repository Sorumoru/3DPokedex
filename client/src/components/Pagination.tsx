import React from 'react'

function Pagination({
  numberOfPages,
  currentPage,
  setCurrentPage
}: {
  numberOfPages: number
  currentPage: number
  setCurrentPage: Function
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

  const beforeAfterNumber = 3

  return (
    <div className='pagination'>
      <button onClick={prevPage} disabled={!(currentPage !== 1)}>prev</button>

      {currentPage < beforeAfterNumber
        ? Array.from({ length: beforeAfterNumber - currentPage }, (_, index) => (
          <button
            disabled={true}
            className={0 === currentPage ? 'active' : ''}
          >
            0
          </button>
        ))
        : null}

      {pageNumbers.map(number => {
        if (number < currentPage + beforeAfterNumber && number > currentPage - beforeAfterNumber)
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

      {currentPage > numberOfPages - beforeAfterNumber
        ? Array.from({ length: beforeAfterNumber - (numberOfPages - currentPage) }, (_, index) => (
          <button
            disabled={true}
            className={0 === currentPage ? 'active' : ''}
          >
            0
          </button>
        ))
        : null}
      {currentPage !== numberOfPages && (
        <button onClick={nextPage}>next</button>
      )}
    </div>
  )
}

export default Pagination
