type paginationProps = {
  totalPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<paginationProps> = ({
  totalPage,
  currentPage,
  onPageChange,
}) => {
  if (totalPage <= 1) return null;

  return (
    <div className='flex justify-center gap-2 mt-8'>
      {Array.from({ length: totalPage }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer rounded ${
            currentPage === idx + 1
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-200'
          }`}
          onClick={() => onPageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
