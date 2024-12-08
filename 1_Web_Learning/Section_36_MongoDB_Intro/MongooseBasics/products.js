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

// productSchema.methods.greet = function () {
//     console.log("Hello!!! HI! HOWDY!");
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save;
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct);

    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);

}

findProduct();


// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'S' });
// bike.save()
//     .then(data => {
//         console.log("It worked!");
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH No, Error!!!");
//         // console.log(err.errors.name.properties.message);
//         console.log(err);
//     })

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













