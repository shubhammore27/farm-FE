export class UrlMapping {


    // SHARED APIs
    public static sendOTP = '/farm/sendOTP';
    public static farmer_registration = '/farm/farmer_registration';
    public static verifyEmail = '/farm/verifyEmail';
    public static getFarmerDetails = '/farm/getFarmerDetails'
    public static updateProfile = '/farm/updateProfile';
    public static auth = '/farm/auth';

    

    // Farmer APIs
    public static getCart = '/farm/getCart';
    public static addToCart = '/farm/addToCart';
    public static getWishList = '/farm/getWishList';
    public static addToWishList = '/farm/addToWishList';
    public static deleteFromCart = '/farm/deleteFromCart';
    public static deleteFromWishList = '/farm/deleteFromWishList';

    // ADMIN APIs
    public static login = '/farm/login';
    public static add_product = '/farm/add_product';
    public static get_all_product = '/farm/get_all_product';
    public static get_product = '/farm/get_product';
    public static update_product = '/farm/update_product';
    public static deleteProduct = '/farm/deleteProduct';
    
}