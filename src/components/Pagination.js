import ReactPaginate from 'react-paginate';

const ButtonClassName = "button";

function GeneratePagination(PagesAmount){
    return(
        <>
            <ReactPaginate
                initialPage={0}
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

                onPageActive={""}   //funcion
            />
        </>
    );
}

export default GeneratePagination;