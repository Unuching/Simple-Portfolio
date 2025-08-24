import type { Route } from './+types/index';
import { useState } from 'react';
import type { PostsMeta } from '~/types';
import PostCardPage from '~/components/postcard';
import Pagination from '~/components/pagination';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostsMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  data.sort((a: PostsMeta, b: PostsMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;

  const { posts } = loaderData;

  const totalPage = Math.ceil(posts.length / postPerPage);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900'>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        My blog
      </h2>
      {currentPosts.map((post) => (
        <PostCardPage key={post.slug} post={post} />
      ))}
      {totalPage > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BlogPage;
