export const checkProductData = async(req, res, next) => {
    const { title, price, description, category, image } = req.body;
    const errors = [];
    for(const key in req.body){
        if(!req.body[key]){
            errors.push(`Plese add product ${key}!`)
        }
    }
    if(errors.length > 0)
        return res.status(401).json({message: errors});
    next();
}