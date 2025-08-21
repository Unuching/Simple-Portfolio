const ContactPage = () => {
  return (
    <div className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900'>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        Contact Me
      </h2>
      <form className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-lg font-medium text-gray-300'
          >
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-800'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
