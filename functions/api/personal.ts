import data from '../../content/src/data/personal.json' with {type: 'json'};

export const onRequestGet: PagesFunction = () => Response.json(data);
