import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { PostsMeta } from '~/types';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Failed to fetch data');

  const index = await res.json();
  const postMeta = index.find((post: PostsMeta) => post.slug === slug);
  if (!postMeta) throw new Response('Not found', { status: 404 });

  // dynamically importing md

  const markDown = await import(`../../posts/${slug}.md?raw`);

  return { postMeta, markDown: markDown.default };
}

const BlogDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { postMeta, markDown } = loaderData;

  return (
    <div className=' max-w-3xl mx-auto px-6 py-12 bg-gray-900'>
      <h1 className='text-3xl font-bold text-blue-400 mb-2'>
        {postMeta.title}
      </h1>
      <p className='text-sm text-gray-400 mb-6'>
        {' '}
        {new Date(postMeta.date).toLocaleDateString()}
      </p>
      <div className='prose prose-invert max-w-none mb-12'>
        <ReactMarkdown>{markDown}</ReactMarkdown>
      </div>
      <Link
        to='/blog'
        className='inline-flex items-center gap-2  text-blue-300 text-sm hover:underline hover:text-blue-400'
      >
        <FaArrowLeft />
        Back To Posts
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
