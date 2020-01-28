import * as Yup from 'yup';
import { Product } from '../db/models';
import ProductsHelper from '../helpers/productsHelper';
import { uploader } from '../helpers/cloudinaryConfig';
import { multerUploads, dataUri } from '../helpers/multerConfig';


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

	/**
   * @description - adds a new product to the database
   * @static
   * @async
   * @param {object} req - add product request object
   * @param {object} res - create product response object
   * @returns {object} newly added product
   *
   */
	static async addNewProduct(req, res) {
		const { name, description, price, catId, color } = req.body;
		
		const bodySchema = Yup.object().shape({
			name: Yup.string().required(),
			description: Yup.string().required(),
			price: Yup.number().required().positive(),
			catId: Yup.number().required().integer(),
			color: Yup.string().required()
		});
		try {
			await bodySchema.validate({
				name,
				description,
				price,
				catId,
				color
			});

			let imageUrl;
			if (req.file) {
				const file = dataUri(req).content;
				await uploader
					.upload(file)
					.then((result) => {
						return (imageUrl = result.url);
					})
					.catch((err) =>
						res.status(400).json({
							error: err.message,
							messge: 'someting went wrong while processing your request'
						})
					);
				const newProductData = {
					name,
					description,
					price,
					catId,
					imageUrl,
					color
				};
				const newProduct = await Product.create(newProductData);
				
				return res.status(201).json({
					status: 201,
					message: 'Product added successfully',
					data: [ newProduct ]
				});
			}
		} catch (error) {
			return res.status(500).json({
				status: 500,
				message: error.message
			});
		}
	}
}
export default ProductController;
