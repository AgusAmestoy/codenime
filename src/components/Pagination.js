import ReactPaginate from 'react-paginate';
import Animelist from "../components/Animelist.js";



const ButtonClassName = "button";

function GeneratePagination(PagesAmount){
    return(
        <>
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