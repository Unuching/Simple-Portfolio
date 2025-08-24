type postFilterProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: postFilterProps) => {
  return (
    <div className='mb-6'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder='Serach Posts...'
        className='w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-800
        focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>
  );
};

export default PostFilter;
