import * as factory from '../../utils/handlerFactory';
import Category from './category.model';

export const createCategory = factory.createOne(Category);
export const getCategory = factory.getOne(Category);
export const getAllCategories = factory.getAll(Category);
export const updateCategory = factory.updateOne(Category);
export const deleteCategory = factory.deleteOne(Category);
