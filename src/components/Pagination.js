import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../Redux/action/movieAction';

const PaginationComponent = () => {


    const [   ,  setpageCount] = useState(0)

    const dispatch = useDispatch();
    const pages = useSelector ( (state)=> state.pageCount);


    useEffect (()=>{
        setpageCount(pages)
        
    },[])

    const handlePageClick = (data) => {
        dispatch(getPage(data.selected + 1));
    }

    const pageCount = 500;
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="Previos"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
