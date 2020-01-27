import { Product } from '../db/models';
import ProductsHelper from '../helpers/productsHelper';

const { getAllProducts, getProduct } = ProductsHelper;
/**
 * @description Product controller
 * @class ProductController
 */
class ProductController {
	/**
     * @description get All Products with pagination
     * @static
     * @param {object} req the request body
     * @param {object} res the response body
     * @returns {object} All Products with Pagination
     * @memberof ProductController
     */
	static async getAllProducts(req, res) {
		let offset = 0;

		const { currentPage, limit } = req.query; // page number
		const defaultLimit = limit || 3; // number of records per page

		offset = currentPage ? defaultLimit * (currentPage - 1) : 0;

		const productsData = await getAllProducts(offset, defaultLimit, currentPage);

		if (productsData) {
			return res.status(200).json({
				status: 200,
				message: 'All products fetched successfully',
				data: [ { ...productsData } ]
			});
		}

		return res.status(500).json({
			status: 500,
			message: error.message
		});
	}

	/**
   * @description - Get a single product
   * @static
   * @async
   * @param {object} req - request
   * @param {object} res - response
   * @returns {object} product
   *
   */
	static async getProduct(req, res) {
		const { id } = req.params;

		const product = await getProduct(id);

		if (product) {
			return res.status(200).json({
				status: 200,
				message: `Product fetched successfully`,
				data: [ product ]
			});
		}

		return res.status(500).json({
			status: 500,
			message: error.message
		});
	}
}
export default ProductController;
