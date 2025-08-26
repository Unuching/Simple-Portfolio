import { Link } from 'react-router';
import type { PostsMeta } from '~/types';

type latestPostProps = {
  posts: PostsMeta[];
  limit?: number;
};

const LatestPost = ({ posts, limit = 3 }: latestPostProps) => {
  return (
    <section className='max-w-6xl mx-auto px-6 py-12'>
      <h2 className='text-2xl font-bold mb-6 text-white'>Latests Posts</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={'`/blog/${post.slug}`'}
            className='block p-4 border border-gray-700 rounded-lg bg-gray-800 hover:shadow-md transition'
          >
            <h3 className='text-lg font-semibold text-blue-400 mb-1'>
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPost;
