const ProductsCategory = require("../../model/product-category.model");

const systemConfig = require("../../config/system");
const filterStatusHelpers = require("../../helpers/filterstatus");
const searchHelpers       = require("../../helpers/search");




//[GET]/admin/products-category
module.exports.index = async (req, res) => {
    const filterStatus = filterStatusHelpers(req.query);

    let find = {
        deleted : false
         
     };

    const record = await ProductsCategory.find(find);

    res.render("admin/pages/products-category/index",{
        pageTitle: " Danh mục sản phẩm ",
        record : record,
        filterStatus:filterStatus
    });
};

//[GET]/admin/products-category/creat
module.exports.create = async (req, res) => {
    res.render("admin/pages/products-category/create",{
        pageTitle: " Tạo danh mục sản phẩm",
    });
}

//[POST] /admin/products/create
module.exports.createPost = async (req, res) => {
    const record = new ProductsCategory(req.body);
    await record.save();

    res.redirect(`${systemConfig.prefixAdmin}/products-category`);
};