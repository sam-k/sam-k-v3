import data from '../../content-build/posts/metadata.json';

export const onRequestGet: PagesFunction = () => Response.json(data);
