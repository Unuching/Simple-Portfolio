import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { PostsMeta, StrapiResponse, StrapiPost } from '~/types';
import { Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`
  );

  if (!res.ok) throw new Error('Failed to fetch data');

  const json: StrapiResponse<StrapiPost> = await res.json();

  if (!json.data.length) throw new Response('Not found', { status: 404 });

  const item = json.data[0];

  const post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image.url
      ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}`
      : '/images/no-image.png',
  };

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
        {new Date(postMeta.date).toDateString()}
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
