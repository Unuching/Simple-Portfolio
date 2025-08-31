import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { Post, StrapiResponse, StrapiPost } from '~/types';
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
    image: item.image.url ? `${item.image.url}` : '/images/no-image.png',
  };

  return { post };
}
type blogpostDetailsProps = {
  loaderData: {
    post: Post;
  };
};
const BlogDetailsPage = ({ loaderData }: blogpostDetailsProps) => {
  const { post } = loaderData;

  return (
    <div className=' max-w-3xl mx-auto px-6 py-12 bg-gray-900'>
      <h1 className='text-3xl font-bold text-blue-400 mb-2'>{post.title}</h1>
      <p className='text-sm text-gray-400 mb-6'>
        {' '}
        {new Date(post.date).toDateString()}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className='w-full h-64 object-cover mb-4'
      />
      <div className='prose prose-invert max-w-none mb-12'>
        <ReactMarkdown>{post.body}</ReactMarkdown>
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
