import ProductsHelper from '../helpers/productsHelper';

const { getAllProducts } = ProductsHelper;
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
}
export default ProductController;
