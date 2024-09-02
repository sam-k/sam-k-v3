import data from '../../content/src/data/personal.json';

export const onRequestGet: PagesFunction = () => Response.json(data);
