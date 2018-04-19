const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cartItemSchema = new Schema({
    style: String,
    qty: Number,
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = mongoose.model('CartItem', cartItemSchema);
