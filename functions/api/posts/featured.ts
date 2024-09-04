import data from '../../../content-build/posts/metadata.ts';

export const onRequestGet: PagesFunction = () =>
  Response.json({
    metadata: data.metadata.filter(post => post.featured),
  } satisfies typeof data);
