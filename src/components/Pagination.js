import ReactPaginate from 'react-paginate';


const ButtonClassName = "button";

function GeneratePagination(PagesAmount){
    const contadorDePaginas = (data) =>{
        return data;
    }

    const handlePageClick = (event) => {
        const newOffset = (event.selected); 
        
    }

    return(
        <>
            {/* <Items currentItems={currentItems} /> */}
            <ReactPaginate
                previousLabel={<i className="fas fa-angle-left"></i>}
                nextLabel={<i className="fas fa-angle-right"></i>}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                pageCount={PagesAmount}

                //ClassName
                activeClassName={"active"}
                pageClassName={ButtonClassName}
                breakClassName={ButtonClassName}
                previousClassName={ButtonClassName}
                nextClassName={ButtonClassName}
                containerClassName={"pagination-container"}
                
            />
        </>
    );  
}

export default GeneratePagination;