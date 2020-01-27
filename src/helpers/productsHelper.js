import { Product, Category } from '../db/models';

/**
*
*@description This class contains helper methods for products
* @class ProductsHelper
*/
class ProductsHelper {
	/**
   *@description This method fetches all the products
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {function} next
   * @memberof ProductsHelper
   */
	static async getAllProducts(offset, defaultLimit, currentPage) {
		try {
			let productsData = {};

			const { count, rows: products } = await Product.findAndCountAll({
				offset,
				limit: defaultLimit,
				attributes: {
					exclude: [ 'createdAt', 'updatedAt', 'description', 'color', 'catId' ]
				},
				order: [ [ 'id', 'ASC' ] ]
			});
			const pages = Math.ceil(count / defaultLimit) || 1;
			productsData = {
				products,
				totalProducts: count,
				currentPage,
				limit: defaultLimit,
				totalPages: pages
			};

			return productsData;
		} catch (error) {
			throw error;
		}
	}
}
export default ProductsHelper;
