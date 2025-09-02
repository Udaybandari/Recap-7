import { useState } from "react";
import Pagination from ".";

function PaginationTest() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentListOfItems = dummyData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">📄 Pagination Demo</h1>

      <ul className="space-y-2 mb-6">
        {currentListOfItems.map((listItem) => (
          <li
            key={listItem.id}
            className="p-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          >
            {listItem.name}
          </li>
        ))}
      </ul>
    
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(dummyData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationTest;
