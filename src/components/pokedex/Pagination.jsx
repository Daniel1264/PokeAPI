import React from 'react'
import './styles/pagination.css'

const Pagination = ({page, pagesLength, setPage}) => {

  // the pagination 

  // this code calc the number of arrays that return the request get

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)  
    const blockLength = Math.ceil(pagesLength / pagesPerBlock)


    const arrPages = []

    const initialPage = (currentBlock -1 ) * pagesPerBlock +1
    const limitPage = blockLength ===  currentBlock ? pagesLength : currentBlock * pagesPerBlock

    for (let i = initialPage; i <= limitPage; i++) {
        arrPages.push(i)
        
    }

    // These functions take care of events on the buttons

    const handlePrev = () => {
      setPage(page - 1)
    }
    const handleNext = () => {
      setPage(page + 1)
    }

    const handlePage = (currentPage) => {
      setPage(currentPage)
    }


  return (
    <div className='pagination'>
    {
      page > 1 &&
      <div onClick={handlePrev} className='pagination_prev pagination_active'>&#60;</div>
    }
      <ul className='pagination_container'>
        {
            arrPages.map(e => (
                <li 
                onClick={() => handlePage(e)} 
                className={`pagination_page ${page === e && 'pagination_active' }`}
                key={e}>
                {e}
                </li>
            ))
        }
      </ul>
      <div onClick={handleNext} className='pagination_next pagination_active'>&#62;</div>
    </div>
  )
}

export default Pagination
