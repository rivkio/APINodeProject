import { Router } from "express";
import { analyticsService } from "../services/analytics-service";
import { isAdmin } from "../middleware/is-admin";


const router = Router();

router.get("/inventory", isAdmin, async (req, res, next) => {
    try {
        const inventory = await analyticsService.getInventory();
        res.json(inventory);
    } catch (e) {
        next(e);
    }
});


router.get("/total-sold", isAdmin, async (req, res, next) => {
    try {
        const totalSold = await analyticsService.getTotalSold();
        res.json(totalSold);
    } catch (e) {
        next(e);
    }
});

router.get("/product-sales/:id", isAdmin, async (req, res, next) => {
    try {
        const productId = req.params.id;
        const productSales = await analyticsService.getProductSales(productId);
        res.json(productSales);
    } catch (e) {
        next(e);
    }
});


router.get("/sales-by-date", isAdmin, async (req, res, next) => {
    const date = req.body.createdAt;
    try {
        const salesByDate = await analyticsService.getSalesByDate(date);
        res.json(salesByDate);
    } catch (e) {
        next(e);
    }
});


router.get("/unsold-products", isAdmin, async (req, res, next) => {
    try {
        const unsoldProducts = await analyticsService.getUnsoldProducts();
        res.json(unsoldProducts);
    } catch (e) {
        next(e);
    }
});


////להחזיר את המוצרים שנמצאים במלאי יותר ממחיר מסוים
router.get("/products-above-price/:price", isAdmin, async (req, res, next) => {
    try {
        const price = parseInt(req.params.price);
        const productsByPrice = await analyticsService.getProductsInventoryAbovePrice(price);
        res.json(productsByPrice);
    } catch (e) {
        next(e);
    }
});


//להחזיר את המוצרים שנמצאים במלאי פחות ממחיר מסוים
router.get("/products-below-price/:price", isAdmin, async (req, res, next) => {
    try {
        const price = parseInt(req.params.price);
        const productsByPrice = await analyticsService.getProductsInventoryBelowPrice(price);
        res.json(productsByPrice);
    } catch (e) {
        next(e);
    }
});


router.get("/sales-by-category/:category", isAdmin, async (req, res, next) => {
    try {
        const category = req.params.category;
        const salesByCategory = await analyticsService.getProductsByCategory(category);
        res.json(salesByCategory);
    } catch (e) {
        next(e);
    }
});



router.get("/created-at", ...isAdmin, async (req, res, next) => {
    try {
        const orders = await analyticsService.getOrderByCreationDate();
        res.json(orders);
    } catch (e) {
        next(e);
    }
});



router.get("/status", ...isAdmin, async (req, res, next) => {
    try {
        const statuses = await analyticsService.getOrderStatus();
        console.log("Fetched order statuses:", statuses); // הדפסת התוצאות
        res.json(statuses);
    } catch (e) {
        console.error("Error fetching order statuses:", e.message); // הדפסת השגיאה לטרמינל
        next(e);
    }
});



router.get("/total-amount", ...isAdmin, async (req, res, next) => {
    try {
        const orders = await analyticsService.getOrdersByTotalAmount();
        res.json(orders);
    } catch (e) {
        next(e);
    }
});



router.get("/active-users", ...isAdmin, async (req, res, next) => {
    try {
        const usersByOrdersCount = await analyticsService.getUsersWithMostOrders();
        res.json(usersByOrdersCount);
    } catch (e) {
        next(e);
    }
});




export { router as analyticsRouter };


