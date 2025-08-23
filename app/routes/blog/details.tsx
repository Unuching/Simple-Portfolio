import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { PostsMeta } from '~/types';
import { error } from 'console';

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
  

  return <div>Blog</div>;
};

export default BlogDetailsPage;
