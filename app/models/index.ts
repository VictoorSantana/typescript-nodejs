

import { Category } from './category.model'; 
import { Movie } from './movie.model'; 

Movie.belongsTo(Category, { as: 'category', foreignKey: 'id_category' });


export default { Category, Movie };