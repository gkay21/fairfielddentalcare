import { dots } from "../components/Pagination";

const getPages = (length, inc = 1) => Array.from({ length }, (_, i) => i + inc);

export default function usePagination(totalItems, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return getPages(totalPages);
  }
  // -> 1 2 3 4 ... 10
  if (currentPage <= 3) {
    return [1, 2, 3, 4, dots, totalPages];
  }
  // -> 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return [
      1,
      dots,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      dots,
      totalPages,
    ];
  }
  // -> 1 ... 7 8 9 10
  return [1, dots, ...getPages(4, totalPages - 3)];
}
