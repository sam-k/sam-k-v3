import data from '../../content-build/posts/metadata.ts';

export const onRequestGet: PagesFunction = () => Response.json(data);
