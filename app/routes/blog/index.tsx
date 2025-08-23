import { div } from 'framer-motion/client';
import type { Route } from './+types/index';
import { Link } from 'react-router';
import type { PostsMeta } from '~/types';

import PostCardPage from '~/components/postcard';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostsMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;

  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900'>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        My blog
      </h2>
      {posts.map((post) => (
        <PostCardPage key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
