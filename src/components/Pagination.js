import ReactPaginate from 'react-paginate';

const ButtonClassName = 'button';

function GeneratePagination({ PagesAmount, currentPage }) {
	console.log(PagesAmount, currentPage);
	const contadorDePaginas = (data) => {
		return data;
	};

	const handlePageClick = (event) => {
		const newOffset = event.selected;
	};

	return (
		<>
			{/* <Items currentItems={currentItems} /> */}
			<ReactPaginate
				initialPage={currentPage - 1}
				previousLabel={<i className="fas fa-angle-left">back</i>}
				nextLabel={<i className="fas fa-angle-right">next</i>}
				marginPagesDisplayed={1}
				pageRangeDisplayed={5}
				pageCount={PagesAmount}
				//ClassName
				activeClassName={'active'}
				pageClassName={ButtonClassName}
				breakClassName={ButtonClassName}
				previousClassName={ButtonClassName}
				nextClassName={ButtonClassName}
				containerClassName={'pagination-container'}
			/>
		</>
	);
}

export default GeneratePagination;
