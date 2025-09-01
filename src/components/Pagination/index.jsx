function Pagination({ currentPage, totalPages = 10, onPageChange }) {
  function generateNoOfPages() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }

  return (
    <div className="flex items-center justify-center mt-25">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-btn"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {generateNoOfPages().map((pageNo) => (
        <button
          className={`m-5 ml-22 ${currentPage === pageNo ? 'active' :''}`}
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className="cursor-pointer"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
