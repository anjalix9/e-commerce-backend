const buyServices = require('../services/buyProductServices');

const buyProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        buyServices(productId);
    }
    catch (error) {
        console.error("Error in buyProduct controller:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = buyProduct;