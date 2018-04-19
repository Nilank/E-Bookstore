'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let mongooseUniqueValidator = require('mongoose-unique-validator');
let Prod = require('./product');

let orderSchema = new Schema({
    productList: [{
        style: String,
        qty: Number,
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    }],
    orderDate: {
        type: String,
        required: true
    },
    userAccountID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiverName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    }
}, {
    usePushEach: true
});

orderSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Order', orderSchema);
