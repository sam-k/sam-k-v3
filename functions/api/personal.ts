import data from '../../content-build/data/personal.json';

export const onRequestGet: PagesFunction = () => Response.json(data);
