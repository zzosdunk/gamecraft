import styles from "./Pagination.module.css";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (number: number) => void;
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <ul className={styles.paginationList}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.paginationPage}>
            <div onClick={() => paginate(number)}>{number}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
