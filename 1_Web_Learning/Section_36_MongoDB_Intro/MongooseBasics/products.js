const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch(err => {
        console.log("OH NO, Error!!!!")
        console.log(err)
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive!!!']
    },
    // color: {
    //     type: String
    // },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: 'Cycling'
    },


    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'S' });
bike.save()
    .then(data => {
        console.log("It worked!");
        console.log(data);
    })
    .catch(err => {
        console.log("OH No, Error!!!");
        // console.log(err.errors.name.properties.message);
        console.log(err);
    })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("It worked!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH No, Error!!!");
//         // console.log(err.errors.name.properties.message);
//         console.log(err);
//     })













