if (process.env.NODE_ENV !== 'production') {
    // process.env.load();
    require('dotenv').config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
console.log(stripeSecretKey, stripePublicKey);


const express = require('express');
const app = express();
const fs = require('fs');
const stripe = require('stripe')(stripeSecretKey);
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const catchAsync = require('./utils/catchAsync');
const {isLoggedIn} = require('./middleware');
const {isAdmin} = require('./middleware');
const nodemailer = require('nodemailer');
const User = require('./models/users');
const AuditLog = require('./models/AuditLog');
var Cart = require('./models/cart');
const Product = require('./models/products');
const Order = require('./models/order');
const Vehicle = require('./models/vehicle');
const bodyParser = require('body-parser');
const InspectionLog = require('./models/inspectionhistory');
// const adminRouter = require('./routes/admin');


const ejsMate = require('ejs-mate');
const AppError = require('./utils/AppError');
const session = require('express-session');
const MongoStore = require('connect-mongo');
// const { captureRejectionSymbol } = require('events');
// const { send } = require('process');

app.engine('ejs', ejsMate)
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))
app.use(cookieParser());
app.use(flash())
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/admin', adminRouter);
// app.use(passport(new localStrategy(User.authenticate())));
// app.use(passport.initialize());
// app.use(passport.session())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
// app.set('views', path.join(__dirname, './iframe'))

const mongoClientPromise = new Promise((resolve) => {
    mongoose.connection.on('connected', () => {
    const client = mongoose.connection.getClient();
    resolve(client);
})
})

const sessionStore = MongoStore.create({
    clientPromise: mongoClientPromise,
    dbName: "DeutchlandAutohaus",
collection: "sessions"
})

const sessionConfig = {
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: false,
    // store: MongoStore.create({mongoUrl: 'mongodb://localhost:27017/DeutchlandAutohaus'}),
//     store: MongoStore.create({client: mongoose.connection.getClient(),
//     ttl: 1 * 6 * 60 * 60,
//     autoRemove: 'native'
// }),
    store: sessionStore,
cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7
}
}

app.use(session(sessionConfig))


app.use(passport.initialize());
app.use(passport.session());
// passport.use(new localStrategy({ usernameField: 'email' }, User.authenticate()));
passport.use(new localStrategy(User.authenticate()));
// app.use(session({secret: 'thisisnotagoodsecret'}))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// passport.authenticate('local', (err, admin, info) => {
//     if (err) {
//     return next(err)
// }
// if (!admin) {
//     return res.status(401).send('Admin authentication failed');
// }

// req.login(admin, (err) => {
//     if (err) {
//     return next(err)
// }
// req.session.adminId = admin.id;
// req.session.adminName = admin.name;

// return res.redirect('deutchlandautohaus/admin_dashboard');
// })

// })
// app.use((req, res, next) => {
//   console.log('Session Data:', req.session);
//   console.log('User Data:', req.user);
//   next();
// });
mongoose.connect('mongodb://localhost:27017/DeutchlandAutohaus', {
useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', () => {
    console.log('Database Connected')
})

// app.get('/fakeUser', async(req, res) => {
//     const user = new User({email: 'ggd@gmail.com', username: 'Arnold'});
//     const newUser = await User.register(user, 'Chicken');
//     res.send(newUser)
// })

app.use((req, res, next) => {
// console.log(req.session)
    // console.log('FLASH success:', req.flash('success'));
    res.locals.currentUser = req.user || null;
    res.locals.admin = req.session.admin || null;
    res.locals.messages = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.session = req.session;
    next();
})

// app.use(express.static(path.join(__dirname, "deutchlandautohaus/home.ejs")))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "deutchlandautohaus/home.ejs"))
})

/* email post route */
app.post('/email', (req, res) => {
    console.log('Data: ', req.body)
    res.json({message: 'Message received'})
    // const to = 'deutchlandautohaus@gmail.com'
    // const from = req.body.from;
    // const from = 'deutschlandautohaus.gmail.com'
    // const to = 'swordoflight8847@yahoo.com'
    // // const to = req.body.to;
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const text = req.body.text;
const {subject, text, firstName, lastName, email} = req.body;
    // //reciepents input 'from' and 'to' is undefined
    // console.log(from, to)
    console.log(firstName, lastName, text, email);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'deutschlandautohaus@gmail.com',
            // pass: 'hthn oabu izdx dnho',
            pass: 'hthnoabuizdxdnho',
}
});
// const sendMail = (email, subject, text, firstName, lastName) => {

    const mailOptions = {
    from: '"John" <deutschlandautohaus@gmail.com>',
    to: 'swordoflight8847@yahoo.com',
    // subject: 'Testing',
    subject: subject,
    // subject: 'Customer Inquiry',
    // text: 'I would like to get in touch with you',
    text: text,
    // firstName: firstName,
    // lastName: lastName,
    // email: email
    // email: email,

};
//         const mailOptions = {
//             from: from,
//             to: to,
//             // subject: subject,
//             // to: 'deutschlandautohaus@gmail.com',
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             text: text
// }
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err)
            console.log(mailOptions.to)
} else {
        console.log('Email sent: ' + info.response);
}
res.redirect('deutchlandautohaus/home')

})

// }

})


//Create ADMIN 8/27/2025
const createAdmin = async () => {
    const existing = await User.findOne({email: 'admin@example.com'});
    if (existing) {
    console.log('Admin already exists');
    return;
}
    // const newAdmin = new User({ email: 'admin@example.com', role: 'admin'})
    // await User.register(newAdmin, 'YourStrongPassword123'); //auto hashes password
    // console.log('Admin created');
    const newAdmin = new User({ username: 'John Ayad', email: 'DeutschlandAutohaus@gmail.com', role: 'admin'})
    await User.register(newAdmin, 'Mateo2019'); //auto hashes password
    console.log('Admin created successfully');
// const createdAdmin = await User.findOne({ email: 'DeutschlandAutohaus@gmail.com' });
// console.log('Created admin:', createdAdmin);
}

// createAdmin();

// createAdmin();

//FOR ADMIN 11/4/2025
// passport.serializeUser((admin, done) => {
//   console.log('Serializing User:', admin); // Debugging line
//   done(null, admin.id); // Store the admin's ID in the session
// });

// passport.deserializeUser(async (id, done) => {
//     console.log('Deserializing User:', id); // Debugging line
//   const admin = await User.findById(id);
//   done(null, admin); // Retrieve the admin details when the session is read
// });

// passport.authenticate('local', (err, admin, info) => {
//     if (err) {
//     return next(err)
// }
// if (!admin) {
//     return res.status(401).send('Admin authentication failed');
// }

// req.login(admin, (err) => {
//     if (err) {
//     console.log(admin);
//     return next(err)
// }
// // req.session.adminId = admin.id;
// // req.session.adminName = admin.name;

// return res.redirect('deutchlandautohaus/admin_dashboard');
// })

// })
app.use((req, res, next) => {
  console.log('Session Data:', req.session);
  console.log('User Data:', req.user);
  next();
});

//Post route for admin 8/27/2025
// app.post('/admin_login', passport.authenticate('local', {failureRedirect: '/admin_login', failureFlash: true}), (req, res) => {
//     if (req.user.role === 'admin') {
//         res.redirect('deutchlandautohaus/admin_dashboard');
// } else {
//     res.status(403).send('Unauthorized');
// }
// });


//nodemailer route
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'home.ejs'))
// })
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/home.ejs'))
// })

app.get('/deutchlandautohaus/home', (req, res) => {
    // res.send('Home');
    res.render('deutchlandautohaus/home')
});

// app.get('/about', (req, res) => {
//     res.render('deutchlandautohaus/about');
// });

// app.get('/deutchlandautohaus/contact', (req, res) => {
//     // res.send('Contact')
//     res.render('deutchlandautohaus/contact')
// });

// app.get('/deutchlandautohaus/shop', (req, res) => {
//     // res.send('Store');
//     // const products 
//     res.render('deutchlandautohaus/shop')
// });

// app.post('/deutchlandautohaus/shop', isLoggedIn, (req, res) => {
//         // const product = new Product
// })

// app.get('/deutchlandAutohaus/shoppingcart', (req, res) => {
//     res.render('deutchlandautohaus/shoppingcart');
// })

// app.get('/deutchlandAutohaus/shoppingcart', (req, res) => {
//    fs.readFile('products.json', function(error, data) {
// console.log(data)
//         if (error) {
//             res.status(500).end()
//         } else {
//             res.render('deutchlandautohaus/shoppingcart', {
//                 stripePublicKey: stripePublicKey,
//                 products: JSON.parse(data)
//             })
//         }
//     })
//     // res.render('deutchlandautohaus/shoppingcart');
// })

//Creating post route for the shopping cart
// app.post("/cart", async (req, res) => {
//     // const {productId, quantity, name, price} = req.body
// // const {id, quantity, name, price} = req.body
// const {id, quantity, name, price} = req.body

//     const userId = "5de7ffa74fff640a0491bc4f";

//     try {
//         let cart = await Cart.findOne({ userId });

//     if (cart) {
//     // cart exists for user
//     let itemIndex = cart.products.findIndex(p => p.id == id);

//     if (itemIndex > -1) {
//     //product exists in the cart, update the quantity
//     let productItem = cart.products[itemIndex];
//     productItem.quantity = quantity;
//     cart.products[itemIndex] = productItem;
// } else {
//     //product does not exist in cart, add new item
//     cart.products.push({id, quantity, name, price});
// }
// cart = await cart.save();
// return res.status(201).send(cart);
// } else {
//     //no cart for user, create new cart
//     const newCart = await cart.create({
//     userId,
//     products: [{id, quantity, name, price}]
// });
//     return res.status(201).send(newCart)
// }
// } catch (err) {
//     console.log(err);
//     res.status(500).send("something went wrong");
// }

// });

// app.post('/purchase1', (req, res) => {
// //     const owner = req.user.id;

// //     const user = User.findById(owner);

// //     const cart = findOne({user: user});

// //     console.log(cart.products);
// // console.log('hello');
// total = 299;
// stripe.charges.create({
//     amount: total,
// source: req.body.stripeTokenId,
// currency: 'usd'
// }).then(function() {
//     console.log('charge successful');
//     res.json({message: 'Successfully purchased item'})
// }).catch(function() {
//     console.log('charge fail');
//     res.status(500).end();
// })
// })

// const storeItems = new Map([
//     [1, {priceInCents: `${cart.products.price}`, name: 'Learn React Today'}],
//     [2, {priceInCents: 20000, name: 'Learn Css Today'}],
// ])

// const owner = req.user.id;
// const cart = await Cart.findById({owner});
// console.log(cart.products.length);

app.post('/create-checkout-session', async (req, res) => {
const owner = req.user.id;
const user = await User.findById(owner);
const cart = await Cart.findOne({user: user});
console.log(cart.products);
// console.log(req.session.cart);//undefined
console.log(req.session);

const productsList = [];

// create customer 
// const customer = await stripe.customers.create({
//     name: user,
//     email: user.email
// })
// var productName = '';
// var price = '';
// var id = '';

 for (let i = 0; i < cart.products.length; i++) {
    productName = cart.products[i].name.toString();
// console.log(productName);
    image_url = cart.products[i].image;
    price = cart.products[i].price;
    // console.log(price);
    id = cart.products[i].id;
    // console.log(id);
    quantity = cart.products[i].quantity;
    productsList.push({productName, price, id, quantity})
// console.log(productsList)
}

// for (let product in productsList) {
//             const item = productsList[product];
//             productsList.push({
//                 price_data: {
//                     currency: 'usd',
//                     product_data: {
//                         name: item.productName
// },
//                     unit_amount: item.price
// },
//                     quantity: item.quantity
// })
// }

// const line_items = [];

// line_items.push(productsList);


// productsList.push({productName, price, id})
// console.log(productsList)

//  const newCart = cart.products.forEach((product) => {
//     productName = product.name;
//     productPrice = product.price;
//     productId = product.id;

// })
// console.log(newCart);


// const productsArr = [];
// const priceArr = [];
// for (let i = 0; i < cart.products.length; i++) {
//     const newCart = cart.products[i];
// // const productsArr = [];
//     const newPrice = cart.products[i].price;
// productsArr.push(newCart);
// priceArr.push(newPrice);
// console.log(productsArr)

// const items = productsArr.map((product, i) => {
//     return {
//         price_data: {
//             currency: 'usd',
//             product_data: {
//                 name: product,
// },
//             unit_amount: parseInt(priceArr[i], 10)
// },
//             quantity: 1,
// };
// });

// const items = cart.products.map((product, i) => {
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                         name: product,
// },
//                 unit_amount: product.price,
// },
//                 quantity: product.quantity,
// }
// })
// console.log(items);

// const items = productsList.map((product) => {
//     console.log(product);
// })

const items = productsList.map((product) => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                        name: `${product.productName}`,
},
                unit_amount: product.price,
},
                quantity: product.quantity,
                
}
});
console.log(items)

// const items = cart.products.map((product) => {
//         console.log(product.price);
// })
// const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     mode: 'payment',

//     // line_items: 'hello',
// line_items: items,


//     success_url: `${process.env.SERVER_URL}/success.html`,
//     cancel_url: `${process.env.SERVER_URL}/cancel.html`
// })
// res.json({url: session.url})

// };
// products array
// const productsArr = [];
// productsArr.push(newCart);
// console.log(productsArr)


// const newCart = cart.products.map((product) => (
//         // id: product.id,
//         // price: product.price,
//         // name: product.name
// [{id: 1}, {price: product.price, name: product.name}],
// [{id: 2}, {price: product.price, name: product.name}]

// ))
// const storeItems = new Map([
//     [1, {priceInCents: 10000, name: 'productName'}],
//     // [`${cart.products._id}`, {priceInCents: `${cart.products.price}`, name: `${cart.products.name}`}]
//     // [`${cart.products._id}`, {priceInCents: `${cart.products.price}`, name: `${cart.products.name}`}]
//     [2, {priceInCents: 20000, name: 'Learn Css Today'}],
// // [3, {priceInCents: price, name: productName}],
// // [4, {priceInCents: price, name: productName}],
// // [5, {priceInCents: price, name: productName}],
// // [6, {priceInCents: price, name: productName}],
// // [`${cart.products.id}`, {priceInCents: `${cart.products.price}`}, {name: `${cart.products.name}`}]
// // [1],
// // [2]

// ])
// const storeItems = cart.products;

//trying to do dynamic implementation of shopping cart model
//  const newProductsArr = productsArr.map((product, i) {

// })
    try {
    const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    invoice_creation: {
        enabled: true,
    },
    // expand: ['payment_method'],
    billing_address_collection: 'required',
    // customer: 'if_required',
    // customer_creation: 'if_required',
    customer_creation: 'always',
    // amount_total: 'always',
    shipping_options: [
        {
            shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                    amount: 0,
                    currency: 'usd',
                },
                display_name: 'Free shipping',
                delivery_estimate: {
                    minimum: {
                        unit: 'business_day',
                        value: 5,
                    },
                    maximum: {
                        unit: 'business_day',
                        value: 7
                    },
                },  
            },
        },
        {
            shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {
                    amount: 1500,
                    currency: 'usd',
                },
                display_name: 'Next day air',
                delivery_estimate: {
                    minimum: {
                        unit: 'business_day',
                        value: 2,
                    },
                    maximum: {
                        unit: 'business_day',
                        value: 5,
                    },
                },  
            },
        },
],
    // customer_details: 
// line_items: req.session.cart.map((item) => {
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: item.name,
// },
//                 unit_amount: item.price, 
// },
//     quantity: item.quantity,
// }
// }),
//     line_items: req.body.products.map(item => {
//         // const item = storeItems.get(item.id);
// const storeItem = storeItems.get(item.id);
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     // name: productName,
//                         name: storeItem.name
//                         // name: cart.products[i].name
//                         // name: 'T-shirt',
//                 },
//                 // unit_amount: 2000,
//                 // unit_amount: price,
//                     unit_amount: storeItem.priceInCents
//                     // unit_amount: cart.products[i].price
//                     // unit_amount: 20000,
//                 // price: product.price,
//                 },
//                 quantity: item.quantity,
//                     // quantity: 1,
//                 };
// }),

//     line_items: req.body.prodId.map((item) => {
//         // console.log(item);
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: item.name,
// },
//                 unit_amount: item.price,
// },
//                 quantity: item.quantity,
// }
// }),

//     line_items: req.body.productsList.map((product) => {
//         return {
//             price_data: {
//                 currency: 'usd',
//                 product_data: {
//                     name: product.productName,
// },
//                 unit_amount: product.price,
// },
//                 quantity: product.quantity,
// }

// }),

    // line_items: 'Hello',
    // line_items: productsList,
line_items: items,
// automatic_tax: {
//     enabled: true,
// },
// customer: '{{CUSTOMER_ID}}',
// customer_update: {
//     shipping: 'auto',
// },
// shipping_address_collection: {
//     allowed_countries: ['US'],
// },

// //trying to do dynamic implementation of shopping cart model
//  const newProductsArr = productsArr.map((product, i) {

// })
// line_items: 'hello',


    // success_url: `${process.env.SERVER_URL}/deutchlandautohaus/success?session_id={CHECKOUT_SESSION_ID}`,
    success_url: `${process.env.SERVER_URL}/deutchlandautohaus/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.SERVER_URL}/deutchlandautohaus/cancel`
})

const taxRate = await stripe.taxRates.create({
    display_name: 'Sales Tax',
    inclusive: false,
    percentage: 7.25,
    country: 'US',
    state: 'CA',
    jurisdiction: 'US - CA',
    description: 'CA Sales Tax',
});
// const customerSessions = await stripe.checkout.sessions.retrieve(
//     '{{SESSION_ID}}',
//     {
//         expand: ['customer'],
//     }
// )
//     const session = await stripe.checkout.sessions.create({
//         line_items: [
//             {
//                 price_data: {
//                     currency: 'usd',
//                     product_data: {
//                         name: 'T-shirt',
//                     },
//                     unit_amount: 2000,
//                     },
//                     quantity: 1,
//                 },
// ],
// mode: 'payment',
// success_url: 'http://localhost:4242/success',
// cancel_url: 'http//localhost:4242/cancel',
// });
// res.json({url: 'HI'})

// const Order = ({
//     user: req.user.id,
//     cart: cart,
//     // address: address,
//     // name: name,
//     // purchaseId: purchaseId,
// })

// // // // await Order.save();
// // // // Order = await order.save();
// await Order.save();
// console.log(Order);

// const order = await Order.findOne({user: user});

// console.log(order)

res.json({url: session.url})
    } catch(e) {
    res.status(500).json({error: e.message})
}
    // res.redirect(303, session.url);
// const order = new Order({
//             user: req.user.id,
//             cart: cart.products
// });
//     await order.save();
//     console.log(order)

});

app.get('/deutchlandautohaus/success', async(req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id, {expand: ['line_items', 'customer', 'payment_intent.payment_method']});
    // const session = await stripe.checkout.sessions.retrieve('{{CHECKOUT_SESSION_ID}}', {expand: ['customer', 'payment_intent']});
    // const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    // const customer = await stripe.customers.retrieve(session.customer);
    // console.log(session);
    // const customer = await stripe.customers.retrieve('{{CHECKOUT_SESSION_ID}}', {expand: ['customer', 'payment_intent']});
    // res.send('Hello');
    // const line_items = await stripe.checkout.sessions.retrieve(req.query.session_id, {expand: ['line_items']});
    // console.log(line_items);
    // res.render('deutchlandautohaus/success', {customer}, {session})
    // res.render('deutchlandautohaus/success', {session}, {cart});
    // res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
    const owner = req.user.id;
    const user = await User.findById(owner);
    const cart = await Cart.findOne({user: user});
    // const order = await Cart.findOne({user: user});
    // console.log(order);
    // console.log(cart);
    // console.log(session.payment_intent.payment_method.billing_details);
        // console.log(session.line_items)
        // console.log(session)
        const order = new Order({
            cardName: session.customer.name,
            user: req.user.id,
            accountUser: req.user.username,
            userEmail: session.customer.email,
            cardLast4: session.payment_intent.payment_method.card.last4,
            cart: JSON.stringify(cart),
            cartTotal: cart.totalPrice,
            address1: session.customer.address.line1,
            address2: session.customer.address.line2,
            addressCity: session.customer.address.city,
            addressState: session.customer.address.state,
            addressZip: session.customer.address.postal_code,
            purchaseId: session.customer.id,
            purchaseDate: Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'long', day: '2-digit'}).format(new Date()),
});
    await order.save();
    // console.log(order)
    // console.log(cart);

    res.render('deutchlandautohaus/success', {session, cart: cart});
    // console.log(customer);
});

app.get('/deutchlandautohaus/cancel', async(req, res) => {
    res.render('deutchlandautohaus/cancel');
})

// app.post('/purchase', (req, res) => {
//    fs.readFile('products.json', function(error, data) {
// console.log(data)
//         if (error) {
//             res.status(500).end()
//         } else {
//             const productsJson = JSON.parse(data);
//             const productsArray = productsJson.mugs.concat(productsJson.clothing);
//             let total = 0
//             req.body.products.forEach(function(product) {
// // console.log(product)
//                 const productJson = productsArray.find(function(i) {
//                     return i.id == product.id
// })
//     total = total + productJson.price * product.quantity
//     console.log(productJson);
// })
//     stripe.charges.create({
//         amount: total,
//         source: req.body.stripeTokenId,
//         currency: 'usd'
//     }).then(function() {
//         console.log('Charge Successful');
//         res.json({ message: 'Successfully purchase products'})
// }).catch(function() {
//     console.log('Charge Fail')
//     res.status(500).end();
// })
//             // res.render('deutchlandautohaus/shoppingcart', {
//             //     stripePublicKey: stripePublicKey,
//             //     products: JSON.parse(data)
//             // })
//             // console.log('purchase')
//         }
//     })
//     // res.render('deutchlandautohaus/shoppingcart');
// })


//Shopping cart for products database
// app.get('/deutchlandautohaus/shoppingcart', async function(req, res) {
//     //if products list all products in cart
//     if (!req.session.cart) {
//     return res.render('deutchlandautohaus', {products: cart})
// }
// })

/*Backend Logic to Handle Plan Selection
Here’s the route you will use to handle the form submission and store the pending plan in the user’s profile:*/

// app.js or routes.js
// const express = require('express');
// const router = express.Router();
// const User = require('./models/User');  // Your User model

// Admin login page 8/22/2025
app.get('/deutchlandautohaus/admin_login', (req, res) => {
        return res.render('deutchlandautohaus/admin_login');
});

// app.post('/admin_login', async (req, res) => {
//     const {first_name, admin_email, password} = req.body;

//     // const adminId = req.user.id;
//     // const adminName = req.user.name;
// //     if (first_name) {

// // if (role === 'admin') {
// //     console.log('Your role is Admin');
// // }
// console.log(req.body)

// // }
// res.status(200).send('Admin logged in successfully')

// })
// app.post('/deutchlandautohaus/admin_login', passport.authenticate('local', {failureRedirect: '/deutchlandautohaus/admin_login', failureFlash: true}), (req, res) => {
//     if (req.user.role === 'admin') {
//         res.redirect('/deutchlandautohaus/admin_dashboard');
// } else {
//     res.status(403).send('Unauthorized');
// }
// });

//New Admin POST Route 1/20/2026
app.post('/deutchlandautohaus/admin_login', async(req, res) => {
    console.log('BODY:', req.body);
    // const {admin_email, password} = req.body;
    const {username, password} = req.body;
    //  console.log('EMAIL:', admin_email);
  console.log('PASSWORD EXISTS:', !!password);
    // const admin = await User.findOne({email: admin_email});
    const admin = await User.findOne({username: username});

    if (!admin || admin.role !== 'admin') {
        req.flash('error', 'Unauthorized')
        // return res.status(404).send('admin not found');
        return res.redirect('/deutchlandautohaus/admin_login');
}

        const isValid = await admin.authenticate(password);

        if (!isValid.user) {
        req.flash('error', 'Invalid credentials')
}

        req.session.admin = {
            id: admin._id,
            name: admin.username,
            role: 'admin'
};
        res.redirect('/deutchlandautohaus/admin_dashboard');
})



// Admin dashboard page 8/25/2025
// Example protected route
app.get('/deutchlandautohaus/admin_dashboard', async (req, res) => {
    // const owner = req.user?.id;
    // const user = await User.findById(owner);
    const users = await User.find();
    // console.log(users);
    

    // const cart = await Cart.findOne({user: user});
    // const cart = await Cart.findOne({user: users}).populate('user');
    const carts = await Cart.find().populate('user');
    // console.log(carts);
    // const plan = User.findOne();

//     const totalVehicles = carts.reduce((sum, cart) => {
//         return sum + (cart.vehicles ? cart.vehicles.length: 0)
// })
const totalVehicles = carts.flatMap(cart => cart.vehicles || []).length;

const now = Date.now();
  const TWO_MINUTES = 1000 * 60 * 2;

  // Auto-expire user statuses if past 2 minutes
  for (const user of users) {
    if (user.statusChangedAt && (now - user.statusChangedAt.getTime()) > TWO_MINUTES) {
      if (user.status === 'approved' || user.status === 'rejected') {
        user.status = 'pending';
        user.statusChangedAt = null;
        await user.save();
      }
    }
  }

    res.render('deutchlandautohaus/admin_dashboard', {users: users, carts, totalVehicles, currentUser: req.user}); // create this EJS file
});
//admin progress chart 1/8/2026
app.get('/deutchlandautohaus/admin_prog_chart', (req, res) => {
    res.render('deutchlandautohaus/admin_prog_chart');
})

//admin progress api fetch chart 1/6/2026
app.get('/api/deutchlandautohaus/admin_prog_chart', async (req, res) => {

    try {

        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: '$signup_date'},
                    year: {$year: '$signup_date'}
            }
},

            {
//                 $group: {
//                     _id: {$month: '$signup_date'},
//                     year: {$year: '$signup_date'},
//                     count: {$sum: 1}
// }
                $group: {
                    _id: {year: '$year', month: '$month'},
                    count: {$sum: 1}
}
                
},      
{
             $sort: {year: 1, _id: 1}
}

]);

        console.log('Aggregated data', data);

        const monthlySignups = new Array(12).fill(0);


        if (Array.isArray(data)) {
        data.forEach((entry) => {
            monthlySignups[entry._id.month - 1] = entry.count;
});
        } else {
            console.log('is not array');
}

        return res.json(monthlySignups);
// res.render('deutchlandautohaus/admin_prog_chart');

} catch (err) {
    // console.err('Error Fetching user data', err);
    console.log('Error fetching user data', err);
    // res.status(404).send('Error Fetching user Data');
}

    // res.render('deutchlandautohaus/admin_prog_chart');
});

// Get page vehicle inspection chart 1/14/2026
app.get('/deutchlandautohaus/vehicle_inspection_chart', (req, res) => {
        res.render('deutchlandautohaus/vehicle_inspection_chart');

});

//Get Info vehicle inspection page 1/14/2026
app.get('/api/deutchlandautohaus/vehicle_inspection_chart', async(req, res) => {


try {
    const currentYear = new Date().getFullYear();

        const data = await Vehicle.aggregate([
            {
                $match: {
                    signup_date: {
                        $gte: new Date(`${currentYear}-01-01`),
                        $lt: new Date(`${currentYear + 1}-01-01`)
}
}
},
                {
                    $project: {
                            month: {$month: '$signup_date'},
                            // year: {$year: '$signup_date'}
}
},
            {
                $group: {
                    // _id: {year: '$year', month: '$month'},
                    _id: {month: '$month'},
                    // vehicle: {$make, $model},
                    count: {$sum: 1}
} 
},
            {
                // $sort: {year: 1, _id: 1}
                $sort: { _id: 1 }
}
]);
            const monthlyVehicleSignups = new Array(12).fill(0);
            console.log(monthlyVehicleSignups);

            if (Array.isArray(data)) {
                data.forEach((entry) => {
                monthlyVehicleSignups[entry._id.month - 1] = entry.count;
})
}

            return res.json(monthlyVehicleSignups);
} catch (err) {
    console.log('Error', err);
    return res.status(404).send('Server Error');
}

})

//Inventory checklist chart 1/20/2026
app.get('/deutchlandautohaus/inventory_checklist_chart', (req, res) => {
    res.render('deutchlandautohaus/inventory_checklist_chart');
})

app.get('/api/deutchlandautohaus/inventory_checklist_chart', async(req, res) => {
        // const currentDate = new Date().getFullYear();
        try {
            const currentDate = new Date().getFullYear();

            const data = await Order.aggregate([
        {
//             $match: {
//                 month: {$month: '$purchase_date'}
// },
            $match: {
                purchaseDate: {
                    $gte: new Date(`${currentDate}-01-01`),
                    $lte: new Date(`${currentDate + 1}-01-01`)
}
},
        }, 
        {
            $project: {
                    month: {$month: '$purchaseDate'}
},
        }, {

            $group: {
                // _id: {month: '$month', year: '$year'},
                _id: {month: '$month'},
                count: {$sum: 1}
},
        }, {

            $sort: {_id: 1}
},
]);

            const monthlyInventory = new Array(12).fill(0);

            if (Array.isArray(data)) {
                data.forEach((entry) => {
                monthlyInventory[entry._id.month - 1] = entry.count
})
};
            return res.json(monthlyInventory);

} catch(err) {
    console.log('Error', err);
    return res.status(404).send('Server Error');
}
})
 


//DELETE USER PAGE 1/12/2026
app.get('/deutchlandautohaus/delete_user', (req, res) => {
    res.render('deutchlandautohaus/delete_user');
    console.log(req.user.email);
});

//POST DELETE User 1/12/2026
app.post('/deutchlandautohaus/delete_user', isAdmin, async(req, res) => {
    const {password, user_email} = req.body;
    // const user_email = req.body.user_email.trim();
    // const admin = req.user.username;
    const admin_email = req.user.email;
    console.log(admin_email);
    console.log(user_email);

try {
    const user = await User.findOne({email: new RegExp('^' + user_email + '$', 'i')})
    // const user = await User.findOne({email: user_email.toUpperCase()});
    if (!user) {
        return res.status(404).send('user not found');
}

    // const result = admin_email.authenticate(password);
    const admin = await User.findOne({email: new RegExp('^' + admin_email + '$', 'i')});
    // const result = admin.authenticate(password);
    if (!admin) {
        // return res.status(404).send('You must be admin to delete a user');
        return res.status(404).send('admin not found');
}

    const isValid = admin.authenticate(password);
    if (!isValid) {
        return res.status(404).send('Invalid Admin password');
}


    await User.deleteOne({email: user_email});
    // await User.deleteOne({_id: user._id})
    console.log('User deleted successfully')


    const logEntry = new AuditLog({
        // username: user,
        action: 'delete_user',
        target: user_email,
        actor: req.user.username,
        metadata: {ip: req.ip}
});

    await logEntry.save();
    req.flash('success', 'User Deleted Successfully')
    res.redirect('/deutchlandautohaus/admin_dashboard');
} catch (err) {
    console.log(err);
    return res.status(500).send('Server Error');
}

});


//ADD User Page 1/12/2026
app.get('/deutchlandautohaus/add_user', (req, res) => {
    // req.flash('success', 'You have succefully added a user');
    res.render('deutchlandautohaus/add_user');
})

//Post ADD USER 1/12/2026
app.post('/deutchlandautohaus/add_user', isAdmin, async (req, res) => {
    const {username, user_email, password} = req.body;

    const logEntry = new AuditLog({
        // username: user,
        action: 'add_user',
        target: user_email,
        actor: req.user.username,
        metadata: {ip: req.ip}
});

    await logEntry.save();


    const newUser = new User({username: username, email: user_email, role: 'user'})
    await User.register(newUser, password);
    console.log('User added successfully');
    req.flash('success', 'User Registered Successfully')
    // res.redirect('/deutchlandautohaus/admin_dashboard', {message: req.flash('User Registered Succefully')});
     res.redirect('/deutchlandautohaus/admin_dashboard')
    // res.send(req.flash('success'))
})


//ADD Admin PAGE 12/9/2025
app.get('/deutchlandautohaus/add_admin', isAdmin, (req, res) => {
        res.render('deutchlandautohaus/add_admin')
});

//POST ADD ADMIN 12/9/2025
app.post('/deutchlandautohaus/add_admin', isAdmin, async (req, res) => {
    const {username, admin_email, password} = req.body;

    // const newAdmin = new User({ username: 'John Ayad', email: 'DeutschlandAutohaus@gmail.com', role: 'admin'})
    // await User.register(newAdmin, 'Mateo2019'); //auto hashes password
    // console.log('Admin created successfully');
    // Log the action in the audit log
        const logEntry = new AuditLog({
            action: 'add_admin',
            // target: admin_email_trimmed,
            target: admin_email,
            actor: req.user.username,  // The logged-in user's name
            metadata: { ip: req.ip }  // Optional, you can track IP address as well
        });

        await logEntry.save();  // Save the log entry to MongoDB
    const newAdmin = new User({username: username, email: admin_email, role: 'admin'})
    await User.register(newAdmin, password);
    console.log('Admin created successfully');
    // res.send(req.body);
    req.flash('success', 'Admin Registered Successfully')
    res.redirect('/deutchlandautohaus/admin_dashboard');

});

//DELETE ADMIN GET ROUTE/PAGE
app.get('/deutchlandautohaus/delete_admin', (req, res) => {
    res.render('deutchlandautohaus/delete_admin');
})

//DELETE ADMIN POST ROUTE
app.post('/deutchlandautohaus/delete_admin', isAdmin, async(req, res) => {
    const { username, password } = req.body;
    const admin_email = req.body.admin_email.trim();
    if (!req.isAuthenticated()) {
        return res.status(403).send('You must be logged in to delete an admin');
}
//     const result = admin.authenticate(password);

//     if (!result.user) {
//         console.log('Incorrect password for admin to delete');
//         return res.status(403).send('Incorrect password');
// }

//     if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
//         return res.status(403).send('You must be an admin or superadmin to delete another admin');
// }

    try {
        const admin = await User.findOne({email: new RegExp('^' + admin_email + '$', 'i')})
        console.log('Admin email to delete:', admin);
        if (!admin) {
           return res.status(404).send('Admin not found');
}
 const result = admin.authenticate(password);

    if (!result) {
        console.log('Incorrect password for admin to delete');
        return res.status(403).send('Incorrect password');
}

    if (req.user.role !== 'admin' && req.user.role !== 'superadmin') {
        return res.status(403).send('You must be an admin or superadmin to delete another admin');
}

    if (req.user.role === 'superadmin' && admin.email === req.user.email) {
        return res.status(403).send('Super cannot delete themselves.');
}

//         const isMatch = await admin.comparePassword(password);
//         if (!isMatch) {
//             return res.status(404).send('Incorrect Password');
// }
            // const loggedInAdmin = req.user;
//              const isMatch = await admin.comparePassword(password);
//         if (!isMatch) {
//             return res.status(404).send('Incorrect Password');
// }
//             const isMatch = await admin.authenticate(password);
//             if (!isMatch) {
//                 return res.status(404).send('Incorrect Password');
// }
// Log the action in the audit log
        const logEntry = new AuditLog({
            action: 'delete_admin',
            // target: admin_email_trimmed,
            target: admin_email,
            actor: req.user.username,  // The logged-in user's name
            metadata: { ip: req.ip }  // Optional, you can track IP address as well
        });

        await logEntry.save();  // Save the log entry to MongoDB

        // const logs = await AuditLog.find().sort({ timestamp: -1}); // Get logs sorted by timestamp
         // Verify the password of the person requesting the deletion (logged-in user)
        admin.authenticate(password, async (err, authenticatedUser) => {
            if (err || !authenticatedUser) {
                return res.status(403).send('Incorrect password');
            }
        });

        await User.deleteOne({email: admin_email});
        console.log('Admin deleted succefully');
        req.flash('success', 'Admin Removed Successfully')
        res.redirect('/deutchlandautohaus/admin_dashboard')
        // });
} catch (err) {
    console.log(err);
    return res.status(404).send('Server Error');
}
})

//audit log page
app.get('/deutchlandautohaus/audit_logs', isAdmin, async(req, res) => {
    if (req.user.role !== 'admin') {
    return res.status(403).send('You must be a superadmin to view audit logs');
}

    try {
        const logs = await AuditLog.find().sort({ timestamp: -1}); // Get logs sorted by timestamp
        res.render('deutchlandautohaus/audit_logs', { logs })
} catch (err) {
    console.error("Error fetching audit logs", err);
    res.status(500).send('Server Error');
}
})

//Route dashboard aproved or rejected
app.post('/plan-approval', async (req, res) => {
    const {approval, rejected} = req.body;

    const user = await User.findById(owner);
    const cart = await Cart.findOne({user: user});

    User.updateOne({id: user.id}, {$set: {pending_plan: approval || rejected}},

    ) .then((user) => {
        console.log(user);
            // console.log(repair_list);
            // console.log('Normalized repair list:', normalizedRepairList);
            // res.render('deutchlandautohaus/userprofile3', {user, cart, order1}); // Redirect the user to their profile
            // res.redirect('/deutchlandautohaus/serviceagreementsignup');
            // res.render('deutchlandautohaus/plans', {user});
            // res.render('deutchlandautohaus/userprofile3', {user, repair_list, cart, order1});
            
        })
        .catch(err => {
            res.status(500).send("Error selecting plan");
            console.log(err);
       })
})

// new select plan post route write up 9/16/2025
app.post('/select-plan', async (req, res) => {
  const { plan, plan_tier, repair_list, carwash_list } = req.body;
  const owner = req.user?.id;

  if (!owner) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const normalizedRepairList = Array.isArray(repair_list)
    ? repair_list
    : repair_list ? [repair_list] : [];

  const normalizedCarwashList = Array.isArray(carwash_list)
    ? carwash_list
    : carwash_list ? [carwash_list] : [];

  try {
    const updatedUser = await User.findByIdAndUpdate(owner, {
      pending_plan: plan,
      plan_tier: plan_tier,
      repair_list: normalizedRepairList,
      carwash_list: normalizedCarwashList,
      status: 'pending' // optional
    }, { new: true });

    // console.log('User updated:', updatedUser);
    // console.log('Repair list:', normalizedRepairList);

    res.redirect('deutchlandautohaus/admin_dashboard'); // Or wherever you want
  } catch (err) {
    console.error('Error updating user plan:', err);
    res.status(500).send("Error selecting plan");
  }
});

// Route to select a plan
// app.post('/select-plan', async (req, res) => {
//     const { plan, plan_tier, repair_list, carwash_list } = req.body; // Get the selected plan (bronze, silver, gold)
//     // const userId = req.session.userId; // Assuming the user is logged in and userId is stored in session
//     const owner = req.user?.id;

// //     if (!owner) {
// //     // return res.status(201).send('Owner not Found');
// //     // return res.redirect('register');
// //      return res.status(401).json({ message: 'Not authenticated' });
// // }

//     const user = await User.findById(owner);
//     const cart = await Cart.findOne({user: user});
//     const order1 = await Order.find({user});

//     // If user not found
//     if (!user) {
//         // console.log('user not found');
//         return res.status(201).send('user not found');
//         // return res.render('deutchlandautohaus/plans');
//         // return res.render('deutchlandautohaus/plans', {user: null, showAuthPopup: true})
//     // return res.render('deutchlandautohaus/plans', {currentUser: req.user || null})
//     }

//     const normalizedRepairList = Array.isArray(repair_list) ? repair_list : repair_list ? [repair_list] : [];   
//     const normalizedCarwashList = Array.isArray(carwash_list) ? carwash_list: carwash_list ? [carwash_list] : [];
// // const normalizedRepairList = Array.isArray(repair_list)? repair_list: repair_list? [repair_list]: [];
//     // Update the user's profile with the selected plan as "pending"
//     // User.updateOne({ _id: user._id }, { $set: { pending_plan: plan, repair_list: Array.isArray(repair_list ? repair_list: [repair_list]) } }, { runValidators: true })
//         // await User.updateOne({ _id: user._id }, { $set: { pending_plan: plan, plan_tier: plan_tier, repair_list: normalizedRepairList, carwash_list: normalizedCarwashList}},
// await User.findByIdAndUpdate(user._id, {
//   pending_plan: plan,
//   plan_tier: plan_tier,
//   repair_list: normalizedRepairList,
//   carwash_list: normalizedCarwashList,
//   status: 'pending' // optional, but useful
// }, { new: true });
//         //  { runValidators: true }
// // )
//         // .then((user) => {
//         //     console.log(user);
//         //     console.log(repair_list);
//         //     console.log('Normalized repair list:', normalizedRepairList);
//         //     // res.render('deutchlandautohaus/userprofile3', {user, cart, order1}); // Redirect the user to their profile
//         //     // res.redirect('/deutchlandautohaus/serviceagreementsignup');
//         //     // res.render('deutchlandautohaus/plans', {user});
//         //     // res.render('deutchlandautohaus/userprofile3', {user, repair_list, cart, order1});
            
//         // })
//         // .catch(err => {
//         //     res.status(500).send("Error selecting plan");
//         //     console.log(err);
//         // });
// });

// //     User.updateOne({_id: user._id}, {$set: {repair_list: repair_list}})
// //         .then((user) => {
// //         console.log(user);
// //         res.render('deutchlandautohaus/plans', {user});
// // })
// //         .catch(err => {
// //             res.status(500).send("Error selecting plan");
// //         });
// // });

/*Route for Admin Approval (Backend):
An admin can review the inspection details and approve the upgrade.*/

// app.js or routes.js
// app.post('/approve-upgrade', async (req, res) => {
//     const { userId, selectedPlan, selectedPlanTier} = req.body;
//     // const owner = req.user.id;
//     // const user = await User.findOne(owner);
//     console.log('selectedPlan:', req.body.selectedPlan);

//     User.updateOne({ _id: userId }, { $set: { user_tier: selectedPlan, plan_tier: plan_tier, pending_plan: null, status: 'approved' } })
//     // User.updateOne({_id: user}, { $set: { pending_plan: pending_plan, pending_plan: null, status: 'approved'}})
//         .then(() => {
//             res.redirect('deutchlandautohaus/admin_dashboard'); // Redirect to admin dashboard or success page
//         })
//         .catch(err => {
//             res.status(500).send("Error approving upgrade");
//         });
// });
app.post('/approve-upgrade', isAdmin, async (req, res) => {
 console.log('Approve-upgrade called');
  console.log('Session:', req.session);
  console.log('User:', req.user);
  

  const { userId, selectedPlan, selectedPlanTier, vehicleId } = req.body;
    // let { userId } = req.body;
    // const adminId = req.session.adminId;
    // const adminName = req.session.adminName;

    // const adminId = req.session.adminId || req.user.id;  // You can use either session or req.user
    // const adminName = req.session.adminName || req.user.name;

     // ✅ Always sanitize userId — pick first element if array
//   if (Array.isArray(userId)) {
//     userId = userId[0];
//   }

// Validate that the admin is authenticated
//   if (!adminId || !adminName) {
//     return res.status(403).send("Admin is not authenticated");
//   }

if (!req.user || req.user.role !== 'admin') {
    return res.status(403).send('Admin not authenticated');
};

    const adminId = req.user._id;
    const adminName = req.user.username;

  try {

    await InspectionLog.create({
        userId,
        // vehicleId,
        adminId,
        adminName,
        action: 'approved',
        reason: 'approved by Admin',
        timestamp: new Date(),
        // statusChangedAt: new Date(),

});

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Allow admin to override submitted pending values
    const plan = selectedPlan || user.pending_plan;
    const planTier = selectedPlanTier || user.pending_plan_tier;

    user.plan = plan;
    user.plan_tier = planTier;
    user.pending_plan = null;
    user.pending_plan_tier = null;
    user.status = 'approved';
    user.inspection_date = new Date();

    const decision = 'approved';
    await User.findByIdAndUpdate(userId, {status: decision, statusChangedAt: new Date()})

    // const TWO_YEARS = 1000 * 60 * 60 * 24 * 365 * 2;
    const TWO_MINUTES = 1000 * 60 *2;

//     if (user.status === 'approved' && user.statusChangedAt) {
//         const now = Date.now();
//         const changedAt = new Date(user.statusChangedAt).getTime();

//         if (now - changedAt > TWO_MINUTES) {
//             user.status = 'pending';
//             user.statusChangedAt = null;
//             await user.save();
// }
// }
  
    await user.save();
  
    res.redirect('deutchlandautohaus/admin_dashboard'); // or wherever
  } catch (err) {
    console.error(err);
    res.status(500).send("Error approving plan");
  }

});

app.post('/decline-upgrade', async (req, res) => {
    const {userId} = req.body;
    const adminId = req.session.adminId;
try {

    await InspectionLog.create({
        userId,
        // vehicleId,
        adminId,
        action: 'rejected',
        reason: 'rejected by Admin',
        timestamp: new Date(),

});

    const user = await User.findById(userId);

    User.updateOne({ _id: userId}, {$set: {user_tier: null, pending_plan: null, pending_plan_tier: null, status: 'rejected', inspection_date: new Date(), statusChangedAt: new Date()}})
    .then(() => {
        res.redirect('deutchlandautohaus/admin_dashboard');
})
    .catch(err => {
        res.status(500).send('Error rejected upgrade');
    })

// const decision = 'rejected';
//     await User.findByIdAndUpdate(userId, {status: decision, statusChangedAt: new Date()})

//     if (user.status === 'rejected' && user.statusChangedAt) {
//         const now = Date.now();
//         const changedAt = new Date(user.statusChangedAt).getTime();

//         if (now - changedAt > TWO_MINUTES) {
//             user.status = 'pending';
//             user.statusChangedAt = null;
//             await user.save();
// }

// }

} catch(err) {
    console.error(err, 'Unable to perform rejection');
    res.status(500).send('error rejecting plan');
}
})

// app.post('/reopen-inspection', async (req, res) => {
//         const {userId} = req.body
//  console.log('Received request to reopen for user:', userId);
//         // const user = User.findOne({})
// //         User.updateOne({_id: userId}, { $set: {pending_plan_tier: null, pending_plan: null, status: 'Pending', inspection_date: new Date()}})
// //         .then(() => {
// //             res.redirect('deutchlandautohaus/admin_dashboard');
// // })
// //         .catch(err => {
// //         res.status(500).send({ error: 'Error reopening plan' })

// // })
// try {
//       const results = await User.updateOne({ _id: userId}, { $set: { pending_plan: null, pending_plan_tier: null, status: 'pending', inspection_date: new Date()}})
//      res.redirect('/deutchlandautohaus/admin_dashboard')
// }
//  catch(err) {
//     console.err(' Error reopening plan')
// }
// const updatedUser = await User.findById(userId);
// console.log('Updated user:', updatedUser);
// console.log('results: ', results);
// });
// app.post('/reviewed', async (req, res) => {
// console.log('🔥 Review button clicked — userId:', userId);
// })

app.post('/reopen-inspection', async (req, res) => {
  const { userId } = req.body;
  console.log('🔥 Review button clicked — userId:', userId);

  try {
    const objectId = new mongoose.Types.ObjectId(userId);
    const updateResult = await User.updateOne(
      { _id: objectId },
      {
        $set: {
          pending_plan: null,
          pending_plan_tier: null,
          plan: 'Not Selected',
          plan_tier: 'Not Selected',
          status: 'reviewed',
          statusChangedAt: new Date()
        }
      }
    );

    console.log('✅ Update result:', updateResult);

    if (updateResult.modifiedCount === 0) {
      return res.status(404).send('User not found or nothing was updated.');
    }

    res.redirect('/deutchlandautohaus/admin_dashboard');
  } catch (err) {
    console.error('❌ Error reopening plan:', err);
    res.status(500).send('Internal error');
  }
});


//Inspection page Get route 
app.get('/deutchlandautohaus/inspection', (req, res) => {
    res.render('deutchlandautohaus/inspection');
})

//schedule inspection post route on vehicloeselect page
app.post('/schedule-inspection', (req, res) => {
    const { userId } = req.body;
    User.updateOne({ _id: userId }, { $set: { status: 'inspection scheduled' } })
        .then(() => {
            res.redirect('deutchlandautohaus/inspection'); // Redirect to inspection page
        })
        .catch(err => {
            res.status(500).send("Error scheduling inspection");
        });
});


//orders page/user profile 
// RECONSTRUCT USER PROFILE PAGE 7/30/2025
//USER PROFILE GET ROUTE 7/30/2025
app.get('/deutchlandautohaus/userprofile3', async (req, res) => {
    // const userId = req.session.userId; // Assuming you're using sessions
    const owner = req.user.id;
    const user = await User.findById(owner);
    const cart = await Cart.findOne({user: user});
    const order1 = await Order.find({user});
    User.findById(user)
        .then(user => {
            res.render('deutchlandautohaus/userprofile3', { user, order1, cart, vin: null }); // Send user data to the profile page
        })
        .catch(err => {
            res.status(500).send("Error fetching user profile");
        });
});

//OLD USER GET ROUTE /WILL INCORPORATE DATA FROM OLD TO NEW GET ROUTE/ 7/30/2025
app.get('/deutchlandautohaus/userprofile', async (req, res) => {
    const owner = req.user.id;
    const user = await User.findById(owner);
    const cart = await Cart.findOne({user: user});
    // const { vin } = req.body;
    const vin = req.query.vin || req.params.vin;
console.log(cart);
// const order = await Cart.findOne({user: user});
// console.log(order);

// const order = await Order.findOne({user: user});
const order1 = await Order.find({user});
// order1.push(cart);
// console.log(order1);
// console.log(cart);
// console.log(user);
// await order.save();

// console.log(order);

// const Orders = ({
//         user: user,
//         cart: cart,
//         // address: user.address,
//         // purchaseId: cart.purchaseId,

// })
if (!vin) {
    // return res.status(404).send({message: 'No vin declared'})
    res.render('deutchlandautohaus/userprofile', {order1, cart, vin: null})
}
// await Orders.save();
// console.log(Orders)
    // res.send(order1);
    res.render('deutchlandautohaus/userprofile3', {order1, cart, vin: null})
})

// app.get('/deutchlandautohaus/:id/edit', (req, res) => {

// });

app.get('/deutchlandautohaus/serviceagreementsignup', async (req, res) => {
    try {
    const {vin} = req.params || req.query;
    const owner = req.user.id;

    if (!owner) return res.status(401).send('Unauthorized')

     const user = await User.findById(owner);
        // console.log(user)

            const cart = await Cart.findOne({user: user});
    if (!vin || !cart) {
    return res.render('deutchlandautohaus/serviceagreementsignup', {cart: null, vin: null} )
    }
     return res.render('deutchlandautohaus/serviceagreementsignup', {cart, vin})
    } catch (err) {
    console.log("Error:", err);
    res.status(500).send("Internal Server Error");
}

});

// app.get('/deutchlandautohaus/serviceagreementsignup', (req, res) => {
//     res.render('deutchlandautohaus/serviceagreementsignup');
// })

app.post('/api/auth/login', (req, res) => {
    const {api_token, api_secret} = req.body;

    if (api_token === 'your_api_token' && api_secret === 'your_secret') {
        res.status(200).send('Login successful');
} else {
        res.status(401).send('Unauthorized');
}
});

// app.get('/api/models', (req, res) => {
//     if (Authorization === 'Bearer replace_this_with_your_jwt') {
//             res.status(200).send('Authorized');
// } else {
//         res.status(401).send('not authorized');
// }
// })


const axios = require('axios');
// const { useReducer } = require('react');
// const carApiBaseUrl = 'https://carapi.app/api/years';

// app.get('/years', async (req, res) => {
//     try {
//         const response = await axios.get(`${carApiBaseUrl}`);
//         res.json(response.data);
// } catch (error) {
//     console.error('Error fetching cars', error);
//     res.status(500).json({error: 'Failed to fetch cars'});
// }
// });

const carApiBaseUrl = 'https://carapi.app/api/makes';
const carApiModelUrl = 'https://carapi.app/api/models';
const carApiYearUrl = 'https://carapi.app/api/years';
const carVin = 'https://carapi.app/api/vin';
app.get('/cars', async (req, res) => {
    try {
        
        const response = await axios.get(`${carApiBaseUrl}`);
        // const response2 = await axios.get(`${carVin}`);
        // if (response === B) {
// for (let r of response ) {
//     for (let i = 0; i < r.data.length; i++ ) {
//         let car = r.data[i];
//         console.log(car);
// }
// }
        // res.json(response.data.data[6].name);
        res.json(response.data.data)
        // }
} catch (error) {
    console.error('Error fetching cars', error);
    res.status(500).json({error: 'Failed to fetch cars'})
}

// for (let r of response ) {
//     for (let i = 0; i < r.data.length; i++ ) {
//         let car = r.data[i];
//         console.log(car);
// }
// }
try {
 const models = await axios.get(`${carApiModelUrl}`);
    res.json(models.data.data);
} catch (error) {
    console.error('Error fetching models', error);
    res.status(500).json({error: 'Failed to fetch car models'})
}

});

// app.get('/eurocars', async (req, res) => {
//     const promise1Make =  fetch(`${carApiBaseUrl}`)
// .then(response => response.json());
//     const promise1Model =  fetch(`${carApiModelUrl}`)
// .then(response => response.json());
//     const promise1Year =  fetch(`${carApiYearUrl}`)
// .then(response => response.json());

//     Promise.all([promise1Make, promise1Model, promise1Year])
// .then(data => {
//     const [data1, data2, data3] = data;
//     // console.log(data);
//     res.render('deutchlandautohaus/serviceagreementsignup')
// })
// .catch(error => {
//     console.error('Error fetching data:', error)
// })
// })
// app.get('/vehicleselect', (req, res) => {
//     res.render('vehicleselect');
// })

// app.get('/vehicleselect', (req, res) => {
//   res.send('<h1>Vehicle Select Test Page</h1>');
// });
// app.get('/vehicleselect', (req, res) => {
//   console.log('✅ Route /vehicleselect matched');
//   res.send('✅ Vehicle Select Test');
// });
// 🧪 Fake user for testing
// app.use((req, res, next) => {
//   req.user = { id: '6627c77c30e60a00fd7fbc3a' }; // Use a valid ObjectId from your database
//   next();
// });

// app.get('/vehicleselect', async (req, res) => {
// // const newUser = await User.create({
// //   _id: new mongoose.Types.ObjectId("6627c77c30e60a00fd7fbc3a"), // match fake ID
// //   name: "Test User",
// //   email: "test@example.com"
// // });
//   try {
//     console.log('✅ Route hit');

//     // Step 1: Check if user exists
//     if (!req.user || !req.user.id) {
//       console.warn('⚠️ req.user is missing or undefined');
//       return res.status(401).send('Unauthorized - user not found');
//     }

//     const owner = req.user.id;
//     console.log('👤 Owner ID:', owner);

//     // Step 2: Try to find user
//     const user = await User.findById(owner);
//     if (!user) {
//       console.warn('⚠️ User not found');
//       return res.status(404).send('User not found');
//     }
//     console.log('✅ User found:', user);

//     // Step 3: Find cart
//     const cart = await Cart.findOne({ user: user._id });
//     console.log('🛒 Cart:', cart);

//     // Step 4: Render safely
//     res.render('deutchlandautohaus/vehicleselect', { response: null });

//   } catch (error) {
//     console.error('❌ Error in /vehicleselect:', error);
//     res.status(500).send('Server error');
//   }
// });

//PLANS PAGE GET AND POST ROUTES 6/19/2025
app.get('/deutchlandautohaus/plans', async (req, res) => {

    const owner = req.user?.id;
    const user = User.findById(owner);



    return res.render('deutchlandautohaus/plans', {user});
})


//NEW GET AND POST ROUTES 5/7/2025
app.get('/vehicleselect', async (req, res) => {
const {vin, lic} = req.query;
try {
    const owner = req.user.id;
    const user = await User.findById(owner);
    console.log(user)

    const cart = await Cart.findOne({user: user});
    console.log(cart);
    

    if (!vin || !lic) {
    return res.render('deutchlandautohaus/vehicleselect', { response: null, error: null, vin: null, lic: null });
    }

    const response = await axios.get(`${carVin}/${vin}`);
    return res.render('deutchlandautohaus/vehicleselect', {
      response: response.data,
      vin,
      lic,
      error: null
    });

} catch (error) {
    console.log('Error', {error});
    res.status(500).send('Error loading vehicle selection page');
}

});

app.post('/vehicleselect', async (req, res) => {
    const {vin, lic} = req.body;
if (!vin || !lic) {
    return res.render('deutchlandautohaus/vehicleselect', {response: null, error: 'Vin is required', vin: null, lic: null})
}    
    
try {
        const response = await axios.get(`${carVin}/${vin}`);
        // console.log(lic);
        // return res.render('deutchlandautohaus/vehicleselect', {response: response.data, vin})
        return res.redirect(`/vehicleselect?vin=${vin}&&lic=${lic}`);
} catch (error) {
    console.error(error);
    return res.status(500).send('Error decoding VIN');
}
})
// END GET AND POST ROUTES 5/7/2025


app.get('/vehicleselec', async (req, res) => {

// let vehicleVin = 'https://carapi.app/api/vin'

const vin = req.query.vin || req.params.vin;
// const {vin} = req.body;
// if (!vin) {
//     return res.redirect('/vehicleselect');
// }
// const {vin} = req.body;
// console.log(vin);
// if (!vin) {
//     return res.status(400).send('VIN is required');
// }
 const owner = req.user.id;
     const user = await User.findById(owner);
        console.log(user)

            const cart = await Cart.findOne({user: user});
            console.log(cart);

try {
    // const response = await axios.get(`${CARAPI_URL}/${vin}`, {
    // const owner = req.user.id;
    //  const user = await User.findById(owner);
    //     console.log(user)
    //     const cart = await Cart.findOne({user: user});
//     const {vin} = req.body;
// if (!vin) {
//     return res.render('deutchlandautohaus/vehicleselect');
// }
    const response = await axios.get(`${carVin}/${vin}`, {
//     headers: {
//     'Authorization': `Bearer ${CARAPI_KEY}`
// }
});

res.render('deutchlandautohaus/vehicleselect', {response})
} catch (error) {
    console.error(error);
    res.status(500).send('Error decoding VIN');
    // res.render('deutchlandautohaus/vehicleselect')
}
// res.render('deutchlandautohaus/vehicleselect')
// res.send(vin);
});

/* new post route*/
app.post('/vehicleselec', async (req, res) => {
    try {
        const vin = req.query.vin || req.body.vin;
        const { year, make, model, make_model_id, id } = req.body;

        // Check if user is authenticated
        const owner = req.user?.id;
        if (!owner) {
            return res.status(401).send('Unauthorized');
        }

        // Get user and their cart
        const user = await User.findById(owner);
        const cart = await Cart.findOne({ user });

        // Decode VIN
        const response = await axios.get(`${carVin}/${vin}`);
        // const vehicleData = response.data;

        // Check if vehicle already exists in cart
        if (cart) {
            const existingIndex = cart.vehicles.findIndex(v => v.id == id);
            console.log('Index of existing vehicle:', existingIndex);

            if (existingIndex > -1) {
                console.log('This vehicle is already listed in database');
            } else {
                // Add vehicle to cart if not already there
                cart.vehicles.push({
                    id,
                    year,
                    make,
                    model,
                    make_model_id,
                    vin
                });
                await cart.save();
            }

            // Render the page with decoded VIN data
            return res.render('deutchlandautohaus/vehicleselect', { response, cart, vin });
        } else {
            return res.status(404).send('Cart not found');
        }
    } catch (error) {
        console.error('Error in /vehicleselect:', error.message);
        return res.status(500).send('Error decoding VIN or processing request');
    }
});




//USER PROFILE POST ROUTE 6/26/2025
app.post('/userprofile3', async(req, res) => {
const {vin, lic, make_model_id, id, year, model, make, name} = req.body;
    console.log('hello save');
    console.log(vin);
    // console.log(cart.vehicles)
    console.log('Incoming request body:', req.body)
     const owner = req.user?.id;
        if (!owner) {
            return res.status(401).send('Unauthorized');
        }

        // Get user and their cart
        const user = await User.findById(owner);
         const rawId = id;
        const order1 = await Order.find({user});
        let cart = await Cart.findOne({ user });
//     if (!/^\d+$/.test(rawId)) {
//         console.log(rawId);
//         return res.status(400).send({error: 'Invalid vehicle ID. It must be a number'})
// }
    const vehicleId = parseInt(id, 10);
//     if (isNaN(vehicleId)) {
//     return res.status(400).json({ error: 'Invalid vehicle ID. Must be a number'})
// }
        if (isNaN(vehicleId) || 
                !vin?.trim() || 
                !make?.trim() || 
                !model?.trim() || 
                !name?.trim() ||
                !lic?.trim() ||
                !make_model_id?.trim() || 
                !year ) {
                        return res.status(400).json({ error: 'Missing or invalid vehicle information'});
}
console.log('typeof id: ', typeof id);
console.log('raw id: ', id);
    //    const vehicleId = Number(req.params.id, 10);

            // const vehicleId = Number(rawId);
            // console.log('Raw ID', rawId)
            // console.log('Parsed vehicleId', vehicleId);
try {
    // const vehicle = await Vehicle.findOne({ id: rawId.toString() });
    let vehicle = await Vehicle.findOne({ id: vehicleId })
    if (!vehicle) {
        // return res.status(404).json({ message: 'Vehicle not found' });

    if (!vin || !make || !year || !model || !make_model_id || !id || !name || !lic || isNaN(vehicleId)) {
        return res.status(404).json({error: 'Missing required vehicle information (vin, make, model, year) for new vehicle'})
}


        vehicle = new Vehicle({
                user: user,
                id: vehicleId,
                vin,
                lic,
                make_model_id,
                make,
                model,
                name,
                year
})
console.log(vehicle);
    await vehicle.save();
    // return res.status(201).json({message: 'Vehicle created', vehicle})
    // return res.render('deutchlandautohaus/userprofile3', {cart, vin, lic, order1})
    // if (!cart) {
    return res.render('deutchlandautohaus/userprofile3', {cart, vin, lic, order1});
    // }
    }
    // const user = await User.findById(owner);
    // let cart = await Cart.findOne({ user });
    // // console.log(user, cart);

    if (!cart) {
        cart = new Cart({
            user: req.user.id,
            vehicles: [{
                id: vehicle.id,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model,
                make_model_id: vehicle.make_model_id,
                name: vehicle.name,
                vin: vehicle.vin,
                lic: vehicle.lic
            }]
        });
        await cart.save();
        // return res.status(201).json({ message: 'Cart created with vehicle', cart });
        return res.render('deutchlandautohaus/userprofile3', {cart, vin, lic, order1})
    }

    const vehicleExists = cart.vehicles.some(i => i.id === vehicle.id);
    if (vehicleExists) {
        // return res.status(200).json({ message: 'Vehicle already in cart', cart });
        const index = cart.vehicles.findIndex(v => v.id === vehicle.id)
        if (index !== -1) {
        cart.vehicles[index].lic = vehicle.lic || lic;
        await cart.save();
        }
        return res.render('deutchlandautohaus/userprofile3', {cart, vin, lic, order1})
    }

    cart.vehicles.push({
        id: vehicle.id,
        year: vehicle.year,
        make: vehicle.make,
        model: vehicle.model,
        make_model_id: vehicle.make_model_id,
        vin: vehicle.vin,
        lic: vehicle.lic

    });
const validVehicles = await Vehicle.find({}).select('id');
const validIds = validVehicles.map(v => v.id);

await Cart.updateMany({}, {
  $pull: {
    vehicles: {
      id: { $nin: validIds }
    }
  }
});
    await cart.save();
    // return res.status(200).json({ message: 'Vehicle added to cart', cart });
console.log('Rendering userprofile3 with cart:', JSON.stringify(cart.vehicles, null, 2));
    return res.render('deutchlandautohaus/userprofile3', {cart, vin, lic, order1})

} catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error', error });
}

});


//PLANS PAGE LOGIC FOR PENDING INSPECTION SERVICE POST ROUTE 7/30/2025
app.post('/select-plan', (req, res) => {
    const { userId, plan } = req.body; // Get the user ID and selected plan from the form
    User.updateOne({ _id: userId }, { $set: { pending_plan: plan } })
        .then(() => {
            res.redirect('/inspection'); // Redirect to inspection page
        })
        .catch(err => {
            res.status(500).send("Error selecting plan");
        });
});

app.post('/sa', async(req, res) => {
    const {vin, make_model_id, id} = req.body;
    console.log('hello save');
    console.log(vin);
    // console.log(cart.vehicles)
     const owner = req.user?.id;
        if (!owner) {
            return res.status(401).send('Unauthorized');
        }

        // Get user and their cart
        const user = await User.findById(owner);
        // const cart = await Cart.findOne({ user });
        // const vehicles = await Vehicle.findOne({user});
        // const vehicle = await Vehicle.findOne({ id: id });
        // const 
        //  console.log(cart.vehicles);


        // const vehicle = await Vehicle.findOne({ id: make_model_id})
        // console.log(vehicle);
        // console.log(make_model_id);

        // const vehicle = await Cart
        // const existingIndex = cart.vehicles.findIndex(v => v.id == id);
        //     console.log('Index of existing vehicle:', existingIndex);
    // const rawId = req.params.id;
    // const rawId = make_model_id;
    const rawId = id;
    if (!/^\d+$/.test(rawId)) {
        return res.status(400).send({error: 'Invalid vehicle ID. It must be a number'})
}

    //    const vehicleId = Number(req.params.id, 10);
            const vehicleId = Number(rawId);

        // const veh = await Vehicle.findById(id);
    try {
        const vehicle = await Vehicle.findOne({ id: vehicleId});
        if (!vehicle) {
            return res.status(404).json({message: 'Vehicle not found'});
            // console.log('Vehicle not found');
}
//         if (veh) {

            let cart = await Cart.findOne({user})

//             if (cart) {
//             return res.status(201).json({message: 'cart exists for this user'})

        //Creating new cart if one doesn't exist
        if (!cart) {
            cart = new Cart({
                user: user.id,
                vehicles: [{
                id: vehicle.id,
                year: vehicle.year,
                make: vehicle.make,
                model: vehicle.model, 
                vin: vehicle.vin,
                lic: vehicle.lic

                }]
            });
    // await cart.save();
    return res.status(201).send({message: 'New cart created with Vehicle', cart});
}
        const vehicleExists = cart.vehicles.some(i => i.id === vehicle.id)
        if (vehicleExists) {
        return res.status(201).send({message: 'Vehicle already in cart'})
} 
// else{
    //adding vehicle to cart
    cart.vehicles.push({
        id: vehicle.id,
        year: vehicle.year,
        make: vehicle.make,
        model: vehicle.model,
        vin: vehicle.vin,
        lic: vehicle.lic
});
    // await cart.save();
    return res.status(201).send({message: 'Vehicle added to cart'});
// }

//         if (!cart) {
//         cart = new Cart({
//         user: user.id,
//         vehicles: [{
//             id: vehicle.id,
//             year: vehicle.year,
//             make: vehicle.make,
//             model: vehicle.model, 
//             vin: vehicle.vin

// }]
// });
//     // await cart.save();
//     // return res.status(201).send({message: 'New cart created with Vehicle', cart});
// }

//         if (vehicleExists) {
//         return res.status(200).send({message: 'Vehicle already in cart', cart})
//         // res.status(200).send(veh)
// }    

//         //add vehicle to existing cart
//         cart.vehicles.push({
//         id: vehicle.id,
//         year: vehicle.year,
//         make: vehicle.make,
//         model: vehicle.model,
//         vin: vehicle.vin
// });
//         return res.status(200).send({message: 'Vehicle added to cart', cart})

// }
//         // const vehicle = await cart.vehicles.findOne({ id: vehicleId });
//         // console.log(vehicle);

//         if (vehicle) {
//         const existingIndex = await vehicle.findIndex(i => i.id == id)
       
//         // return res.status(200).json({ exists: true, vehicle })

//         if (existingIndex > -1) {
//         console.log('vehicle: ', existingIndex);
//         // await vehicle.save();
//         // res.status(200).send(vehicle);
// } else {
//     // console.log('Vehicle does not exist')    
//     vehicle.push({id, year, make, model});
//     console.log(vehicle);
// }
//         } 
// else {
//             const newVehicle = Cart.create({
//             user,
//             vehicle: [{id, year, make, model}]
// })
// }


        // if (vehicle) {
        //     return res.status(200).json({ exists: true, vehicle });
        // } else {
        //     return res.status(404).json({ exists: false, message: 'Vehicle not found' });
        // }
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
// }); 


        // const vehicle = await Vehicle.findOne({ user });
//         if (vehicle1) {
//         const existingIndex = vehicle1.findIndex(v => v.id == id);
//         console.log('Index of existing vehicle:', existingIndex);
        
//         if (existingIndex > -1) {
//         console.log('Vehicle already exists in your database')
// } else {
// vehicle1.push({
//                     id,
//                     year,
//                     make,
//                     model,
//                     make_model_id,
//                     vin
// }) 
//     await vehicle1.save();
// }
 

//         // console.log(vehicle);
// } else {
//             return res.status(404).send('Cart not found');
//         }
   
})



// app.post('/vehicleselect', async(req, res) => {
//     const vin = req.query.vin;
// // const {vin} = req.body;
// // console.log(vin)
//     const owner = req.user.id;
//      const user = await User.findById(owner);
// //         console.log(user)

//             const cart = await Cart.findOne({user: user});
// //             console.log(cart);

// const {year, make, model, make_model_id, id} = req.body;
// // console.log(vin);
// let response;
// try {

//     response = await axios.get(`${carVin}/${vin}`)
//     console.log(response);
// } catch(error) {
//     // res.send('Error decoding vin')
// res.status(500).send('Error decoding VIN')
//     console.log(error)
// }

// if (cart) {
//     let data = cart.vehicles.findIndex((d) => d.id == id);
//     console.log('index of data', data);
// if (data > -1) {
//     // let id = cart.vehicle[data];
//     // console.log(id);
// // console.log(id)
// //     cart.vehicle[data] = id;
// console.log('This vehicle is already listed in database')
//     await cart.save();
// // res.status(201).send(cart);
// // res.render('deutchlandautohaus/serviceagreementsignup', {cart, vin})
// res.render('deutchlandautohaus/vehicleselect', {response});
// }
// }

// })

app.post('/vehicleselec', async (req, res) => {
// const vin = req.query.vin;
const {vin} = req.body;
// console.log(vin);

const owner = req.user.id;
     const user = await User.findById(owner);
        // console.log(user)

            const cart = await Cart.findOne({user: user});
            // console.log(cart);

const {year, make, model, make_model_id, id} = req.body;
console.log(vin);


const vehicleData = await Vehicle.find({_id: vin})
// res.send(`<h1>Thank you for submitting, ${year}!</h1><p>Your email is:, model is: ${model}, and make is: ${make}</p>`);
// res.send(`<h1>Thank you for submitting your vehicle information</h1><h2>Your vehicle information:</h2><p>Year: ${year}</p><p>Make: ${make}</p><p>Model: ${model}</p></>`);

// console.log(year);
// console.log(make);
// console.log(make_model_id);
// console.log(id);

// console.log(req.body);

// console.log(`<h1>Thank you for submitting, ${year}!</h1><p>Your email is: ${email}</p>`);
// const vehicleData = {};

try {

    const response = await axios.get(`${carVin}/${vin}`)
    // console.log(response);
} catch(error) {
    // res.send('Error decoding vin')
res.status(500).send('Error decoding VIN')
    console.log(error)
}

// const date = Date.now();
// let data = await Vehicle.findOne({id: id});
// console.log(data);

// let cart = new Cart();
if (cart) {
    let data = cart.vehicles.findIndex((d) => d.id == id);
    console.log('index of data', data);
if (data > -1) {
//     let id = cart.vehicle[data];
//     // console.log(id);
// console.log(id)
//     cart.vehicle[data] = id;
console.log('This vehicle is already listed in database')
    await cart.save();
// res.status(201).send(cart);
// res.render('deutchlandautohaus/serviceagreementsignup', {response})
res.render('deutchlandautohaus/vehicleselect', {response});
} else {
    cart.vehicles.push({year, make, model, make_model_id, date, id, vin});
//   const newCart = await Cart.create({
//         user,
//         // products: [{ productId, name, quantity, price }],
//         vehicles: [{year, make, model, id}]
// })
await cart.save();
// res.status(201).send(cart);
// const date = Date.now();
// console.log(date);
res.render('deutchlandautohaus/serviceagreementsignup')
// await cart.save();

}
} else {
    const newCart = await Cart.create({
        user,
        // products: [{ productId, name, quantity, price }]
        vehicles: [{year, make, model, make_model_id, date, id, vin }]
      
    // bill: quantity * price,
});
    return res.status(201).send(newCart);
    // res.render('deutchlandautohaus/serviceagreemensignup')
}


//     cart.products.push({productId, name, quantity, price});
// //     cart.bill = cart.products.reduce((acc, curr) => {
// //     return acc + curr.quantity * curr.price;
// // }, 0)
// await cart.save();
// res.status(201).send(cart);
// }
// } else {
//     const newCart = await Cart.create({
//         user,
//         products: [{ productId, name, quantity, price }]
      
//     // bill: quantity * price,
// });
//     return res.status(201).send(newCart);


// const vehicleData = {
// vehicleData: req.body.year,
// // vehicleData.make = req.body.make;
// // vehicleData.model = req.body.model;
// };
// console.log(vehicleData);


// const vehicle_agreement = new Cart({
//     products: [{year: req.body.year}, {make: req.body.make}, {model: req.body.model}],
// })
// cart.add(vehicleData);

// const vehicle = {
//     year: req.body.year,
//     make: req.body.make,
//     model: req.body.model,
// }
// res.json({message: 'items in cart', vehicleData})
// res.send({message: 'items in cart', vehicleData});
console.log('Current vehicle DATA')
})

//SERVICE SIGN UP GET ROUTE
app.get('deutchlandautohaus/serviceagreementsignup', async (req, res) => {
     const owner = req.user.id;
     const user = await User.findById(owner);
        // console.log(user)

     const cart = await Cart.findOne({user: user});
            // console.log(cart);

    res.render('deutchlandautohaus/serviceagreementsignup', {cart});
})

//SERVICE SIGN UP POST ROUTE
app.post('/serviceagreementsignup', async (req, res) => {
    
    const {checkbox} = req.body;
    console.log(checkbox);

    const owner = req.user.id;
     const user = await User.findById(owner);
        console.log(user)

     const cart = await Cart.findOne({user: user});
            // console.log(cart);

// res.status(201).send(req.body);
res.render('deutchlandautohaus/serviceagreementsignup', {checkbox, cart})
});


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deutschlandautohaus@gmail.com',
        pass: 'mateo2019!'
},
});

app.post('/submit-signature', (req, res) => {
    const {customer_firstname, customer_lastname, customer_signature} = req.body;
    // res.status(201).send(req.body);

    const userMailOptions = {
    from: 'deutschlandautohaus@gmail.com',
    to: 'swordoflight8847@yahoo.com',
    subject: 'Thank you for your participation',
    text: `Hello ${customer_firstname},\n\nThank you for reaching out! We have recieved your message and will get back to you shortly.\n\nYour message:\n${customer_signature}`
}

// });

const ownerMailOptions = {
    from: 'swordoflight8847@yahoo.com',
    to: 'deutschlandautohaus@gmail.com',
    subject: 'New Form Submission',
    // text: `You have a new message from ${customer_firstname} (${email}):\n\n${message}`
    text: `You have a new message from ${customer_firstname} (${customer_lastname}):\n\n${customer_signature}`
}

transporter.sendMail(userMailOptions, (error, info) => {
    if (error) {
    return console.log('Error sending email to user: ', error);
    // return res.status(500).send('Error sending confirmation email');
}
    console.log('Email sent to user: ', info.response);
    // res.status(200).send('form ubmitted successfully')

});

transporter.sendMail(ownerMailOptions, (error, info) => {
    if (error) {
    return console.log('Error sending email to owner: ', error);
    // return res.status(500).send('Eror sending notification to owner');

}
console.log('Email sent to owner: ', info.response);
});
res.send('Thank you for your submission!');
});

// app.post('/vehicleselect', async (req, res) => {
//     const vin = req.query.vin;
// console.log(vin);
// // if (!vin) {
// //     return res.status(400).send('VIN is required');
// // }

// try {
//     // const response = await axios.get(`${CARAPI_URL}/${vin}`, {
//     const response = await axios.get(`${carVin}/${vin}`, {
// //     headers: {
// //     'Authorization': `Bearer ${CARAPI_KEY}`
// // }
 
// });
// console.log(response);
// // } catch (error) {
// //      console.error(error);
// //     res.status(500).send('Error decoding VIN');
// // }


//     // res.json(response.data);
// // res.send(Json)
// // res.render('deutchlandautohaus/vehicleselect', {response})
// } catch (error) {
//     console.error(error);
//     res.status(500).send('Error decoding VIN');
// }
// // res.render('deutchlandautohaus/vehicleselect', {vin})
// // res.send(vin);


// });



app.get('/eurocars', async (req, res) => {
    // let makes = await axios.get(`${carApiBaseUrl}`);
    // let models = await axios.get(`${carApiModelUrl}`);
    // Promise.all([makes, models])
let makes = 'https://carapi.app/api/makes';
let models = 'https://carapi.app/api/models';
let years = 'https://carapi.app/api/years';

const requestOne = axios.get(makes);
const requestTwo = axios.get(models);
const requestThree = axios.get(years);

Promise.all([requestOne, requestTwo, requestThree])
    .then(
    axios.spread((...responses) => {
    const responseOne = responses[0].data;
    const responseTwo = responses[1].data;
    const responseThree = responses[2].data;

    const combined = {responseOne, responseTwo, responseThree}

    // res.json(combined);
    const items = [combined];
    res.render('deutchlandautohaus/serviceagreementsignup', {items})
})
)

// .then(data => {
//     const [dataOne, dataTwo, dataThree] = data;
//     res.render('deutchlandautohaus/serviceagreementsignup', {dataOne, dataTwo, dataThree});
// })
.catch(errors => {
    console.error('Failed to fetch data', errors)
});

// res.render('deutchlandautohaus/serviceagreementsignup', {combined})
})

// app.get('/models', async (req, res) => {
//     try {
//     const models = await axios.get(`${carApiModelUrl}`);
//     res.json(models.data.data);
// } catch (error) {
//     console.error('Error fetching models', error);
//     res.status(500).json({error: 'Failed to fetch car model data'});
// }
// });

// Sample data: replace this with your actual data source
const carData = [
    // Example car objects
    { year: 2012, make: 'Ford', model: 'Focus', trim: 'SE', make_id: 1 },
    { year: 2015, make: 'Acura', model: 'MDX', trim: 'Base', make_id: 2 },
    // Add more car objects as needed
];

// Utility function to filter cars based on conditions
const filterCars = (conditions) => {
    return carData.filter(car => {
        return conditions.every(condition => {
            const { field, op, val } = condition;
            switch (op) {
                case '=':
                    return car[field] === val;
                case '!=':
                    return car[field] !== val;
                case '>':
                    return car[field] > val;
                case '<':
                    return car[field] < val;
                case '>=':
                    return car[field] >= val;
                case '<=':
                    return car[field] <= val;
                case 'in':
                    return val.includes(car[field]);
                case 'not in':
                    return !val.includes(car[field]);
                case 'like':
                    return typeof car[field] === 'string' && car[field].includes(val);
                case 'not like':
                    return typeof car[field] === 'string' && !car[field].includes(val);
                case 'not null':
                    return car[field] !== null && car[field] !== undefined;
                case 'is null':
                    return car[field] === null;
                default:
                    return true;
            }
        });
    });
};

app.get('/api/cars/search', (req, res) => {
    const { year, make, model, trim, make_id, verbose, json } = req.query;

    let conditions = [];

    // Handle simple query parameters
    if (year) conditions.push({ field: 'year', op: '=', val: parseInt(year) });
    if (make) conditions.push({ field: 'make', op: '=', val: make });
    if (model) conditions.push({ field: 'model', op: '=', val: model });
    if (trim) conditions.push({ field: 'trim', op: '=', val: trim });
    if (make_id) conditions.push({ field: 'make_id', op: '=', val: parseInt(make_id) });

    // Handle JSON conditions if provided
    if (json) {
        try {
            const jsonConditions = JSON.parse(decodeURIComponent(json));
            conditions = conditions.concat(jsonConditions);
        } catch (err) {
            return res.status(400).json({ error: 'Invalid JSON format' });
        }
    }

    // Filter cars based on constructed conditions
    let filteredCars = filterCars(conditions);

    // If verbose is requested, include the make in the description
    if (verbose === 'yes') {
        filteredCars = filteredCars.map(car => ({
            ...car,
            description: `${car.make} ${car.model} ${car.trim}`
        }));
    }

    // res.json(filteredCars);
    res.render('deutchlandautohaus/serviceagreementsignup', {filteredCars})
    
});






app.get('api/cars/search?make=Ford&verbose=yes', (req, res) => {
    res.send(json)
})

app.post('/save-car', async(req, res) => {
    const {make, model, vin} = req.body;
    console.log(req.body);
});

app.get('/years', async(req, res) => {
try {
    // const years = await axios.get('https://carapi.app/api/years');
    const years = await axios.get(`${carApiYearUrl}`);
    res.json(years.data)
} catch(err) {
    console.log('Error fetching years', err)
    res.status(500).json({err: 'failed to fetch year data'})
}
})


app.get('/deutchlandautohaus/shop7', async function(req, res) {
    // console.log(req.user);
    const products = await Product.find({});
    const user = await User.find(req.user);
    const cart = await Cart.findOne({user: user});
    console.log(cart.totalQuantity);
    // console.log(products)
//     fs.readFile('products.json', function(error, data) {
// console.log(data)
//         if (error) {
//             res.status(500).end()
//         } else {
//             res.render('deutchlandautohaus/shop', {
//                 stripePublicKey: stripePublicKey,
//                 products: JSON.parse(data)
//             })
//         }
//     })
    res.render('deutchlandautohaus/shop7', {products, cart})
})

// app.post('/Cart', async(req, res) => {
//     const {productId} = req.body

// try {
//     const products = await Product.find({_id: productId});
//     console.log(products);
// } catch (err) {
//     console.log(err)
// }
// })

// app.use((req, res, next) => {
//     User.find(req.user)
//     .then(userinDb => {
//     req.user = userinDb;
//     next();
// })
// .catch(err => console.log(err));
// })

app.get('/shop7/:id', async(req, res) => {
    const productId = req.params.id;
console.log(productId);
    var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});



    // Product.findById(productId, function(err, product) {
    await Product.findById(productId)
    const product = await Product.find({_id: productId});
    // console.log(product.price)
// const product = await Product.find({});
    // const productPrice = await Product.find({name: "Red Mug"});
// const productPrice = await Product.find({price: 3499})// prints beanie product
//     console.log(productPrice)
// const productPrice = await Product.find({});
// console.log(productPrice);

// function getProduct (err, product) {
// if (err) {
//     console.log(err);
// }
//     cart.add(product, product.id)
// req.sessioncart = cart;
// console.log(req.session.cart);

// }
// getProduct();

    console.log(product);
    // const newProduct = Product.findOne({name: product.name});
// console.log(newProduct);
    // if (err) {
    // // return res.redirect('/');
    // return res.send(err);
// }

// product.forEach((p) => {
//     // p.price = this.items[id];
// console.log(p.price);
// const price = p.price;
// const qty = p.qty;
// const id = p._id;

// const storedItem = {items: {item: id, qty: qty, price: price}}
// // return storedItem;

// cart.add(storedItem, productId);

// })
// const product2 = async function(product) {
//     const product1 = await product.find({_id: productId})

//    const p1 =  product.forEach((p) => {
//     const name = p.name;
//     const price = p.price;
//     const id = p._id;
// })
// }


// }

    cart.add(product, productId);
// cart.generateArray(product, productId);
    // console.log(product, productId)
    // cart.add(product, productId);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/deutchlandautohaus/shop');
    // res.send(cart);
// })

})

//Each product in the sidebar in shop7
// app.get('/popup/:id', async (req, res) => {
//     // const {id, name} = req.body;
//     const owner = req.user.id;
//     const user = await User.findById(owner);
//     const cart = await Cart.findOne({user: user});
//     const product = cart.products.findById(p => p.id === req.params.id);

// })


app.post('/shop7', async(req, res) => {

const {productId, name, quantity, price} = req.body;

console.log(productId, name, price);
// const user = await User.find(req.user)
const products = await Product.find({_id: productId})
const user = await User.find(req.user);
// const user = req.user;
// const userId = "5de7ffa74fff640a0491bc4f"
console.log(user);

    console.log(products);
// let cart = new Cart();
try {
// let cart = await Cart.findOne({user});
let cart = new Cart();
console.log(cart);

const product = await Product.findOne({_id: productId});
// const name = p.name;
//     res.send("Hello");
// console.log(product);
// if (!product) {
//     res.status(404).send({message: "Item not found"});
//     return;
// } 
// const price = product.price;
// const name = product.name;
    
if (cart) {
    let itemIndex = cart.products.findIndex((p) => p.productId == productId);
console.log(itemIndex)
if (itemIndex > -1) {
let product = cart.products[itemIndex];
product.quantity += quantity;
// cart.bill = cart.products.reduce((acc, curr) => {
//     return acc + curr.quantity * curr.price;
// }, 0)
cart.products[itemIndex] = product;
await cart.save();
res.status(201).send(cart);
} else {
    cart.products.push({productId, name, quantity, price});
//     cart.bill = cart.products.reduce((acc, curr) => {
//     return acc + curr.quantity * curr.price;
// }, 0)
await cart.save();
res.status(201).send(cart);
}
} else {
    const newCart = await Cart.create({
        user,
        products: [{ productId, name, quantity, price }]
      
    // bill: quantity * price,
});
    return res.status(201).send(newCart);
}
} catch (err) {
    console.log(err);
    res.status(500).send("something went wrong");
}

// console.log(productId);
    // res.redirect('deutchlandautohaus/shop');
})

// app.get('/deutchlandautohaus/shoppingcart', async(req, res) => {
//     // const user = req.user.id;
//     // // const cart = await Cart.findOne({user: user});
//     // const cart = await Cart.find({});
//     // // req.session.cart = cart
//     // res.render('deutchlandautohaus/shoppingcart', {user})

// if (!req.session.cart) {
//     return res.render('deutchlandautohaus/shoppingcart', {products: null})
// }
// var cart = new Cart(req.session.cart);
// res.render('deutchlandautohaus/shoppingcart', {products: cart})

// })

app.get('/deutchlandautohaus/shoppingcart', async (req, res) => {
    const owner = req.user.id;

    try {
        const user = await User.findById(owner);
        // console.log(user)
        const cart = await Cart.findOne({user: user});
        // console.log(cart);
        // if (cart && cart.products.length > 0) {
            res.render('deutchlandautohaus/shoppingcart', {cart: cart})
//         } else {
//             res.send('No cart for this user');
// }

        // res.render('deutchlandautohaus/shoppingcart', {cart: cart})
} catch (e) {
    res.status(404).send(e, 'Something went wrong')
}
})

app.get('/addToCart/:id', async (req, res) => {
    // const userId = '64e1163a0abd23119b081ae6'
    // const user = await User.find(req.session.user_id);
    // const user = await User.findOne(req.user);
// const user = req.user;
const user = req.user.id;
const newUser = await User.findById(user)
    // console.log(user);
// const user = '65c2b5a341b9ff01608e1ada'
const id = req.params.id;
console.log(id)
    // let cart = await Cart.findOne({user});
    // let name = "<%=name%>";
    // let name = "<%=p.name%>";

let product = await Product.findById(id)
console.log(product)


    // console.log(cart);
    // res.send(cart);
    // res.send(user);
    console.log(newUser);
// res.send(user);
    
// const {productId, quantity, name, price} = req.body;
// console.log(productId, quantity, name, price);

// const {quantity, name, price} = req.body;
// let itemIdex = cart.products.findIndex(p => p.productId == productId);
// console.log(productId)
// let cart = await Cart.findOne({user});

//returns empty no user found
// let cart = await Cart.find({user});
// console.log(cart, 'Hello');

// let newCart = new Cart();
let newCart = await Cart.findOne({user: user});
// var newCart = new Cart(req.session.cart ? req.session.cart : {items: {}});
// let cart = await Cart.find({newUser});
// console.log(cart, user);
if (newCart) {

// if (newCart.products.length == 0) {
//     // console.log("Hello");
// newCart.products.push({id: product.id, quantity: 1, name: product.name, category: product.category});
// newCart.totalPrice = product.price
// // } else if (newCart.products.length == undefined) {
// //     console.log("Goodbye");
// // }
// } else {
    let itemIndex = newCart.products.findIndex(p => p.id == product.id);
//if item does not exist
if (itemIndex == -1) {
    // newCart.products.push({id: product.id, quantity: 1, name: product.name, price: product.price, image: product.image});
    newCart.products.push(product);
    // newCart.totalPrice = product.price += product.price * product.quantity;
    newCart.totalPrice += product.price * product.quantity;
    // newCart.quantity = product.quantity;
    // newCart.quantity++;
    product.quantity = 1;
    // newCart.products.push(newCart.quantity);
    newCart.totalQuantity = product.quantity;
    newCart.totalQuantity += 1;
    await newCart.save();
// let productItem = newCart.products[itemIndex];
// // productItem.quantity = quantity;
// productItem.quantity += 1;
// newCart.totalQuantity++;
// newCart.products[itemIndex] = productItem;
// console.log(productItem);

// newCart.totalPrice = product.price * product.quantity;
// newCart.totalQuantity = product.quantity;
// newCart.totalQuantity++;
// newCart.products.push(product);

    // console.log(newCart.quantity);
    // newCart.quantity++;
    // console.log(newCart.quantity++);
    // newCart.totalQuantity++;
    // console.log(newCart.totalQuantity);
    // newCart.save();
console.log('new item added');
} else {
// newCart.products.push(product);
// newCart.products.quantity += 1;
// newCart.totalPrice = product.price += product.price * product.quantity;
// console.log(itemIndex)
    let existingProduct = newCart.products[itemIndex];
// console.log(existingProduct) //undefined
    // existingProduct.quantity += 1;
    // existingProduct.quantity = product.quantity;
    existingProduct.quantity += 1;
// existingProduct.quantity++;
    // existingProduct.totalPrice = product.price += product.price * product.quantity;
    newCart.totalPrice += product.price * product.quantity;
    // existingProduct.totalQuantity += 1;
    newCart.totalQuantity = product.quantity;
    newCart.totalQuantity += 1;
    await newCart.save();
    console.log('Same item added');
    // existingProduct.products.push(product);

    //  let product = newCart.products.push(product);
    
// product.quantity += 1;
    // product.totalPrice = product.price * product.quantity;
    // let product = newCart.products.push(product);
}
// }
// let itemIndex = cart.products.findIndex(p => p.id == id);
// let itemIndex = cart.products.findIndex(p => p.id == id);
// let itemIndex = cart.products.findIndex(product => product.id == product.id);
// let itemIndex = cart.products.findIndex((product) => product.id == productid)
// let itemIndex = 'Hello';
// console.log(itemIndex)
// console.log(product.id);
// if (itemIndex > -1){
// let productItem = cart.products[itemIndex];
// console.log(productItem)
// } else {
//     cart.products.push({id: product.id, name: product.name, price: product.price})
// }
console.log(newCart);
// console.log("Item index created");
// newCart.save();
} else {
    // console.log("cart not available")
    // cart.products.push(itemIndex);
    console.log(user);
const newCart = await Cart.create({
    // userId: [{user}],
user,
    // products: [itemIndex]//item index is not defined?
    // products: [{quantity, name, price}]
    // products: [{name}]
    // products: [{id: product.id}, {name: product.name}, {price: product.price}]
    products: [{id: product.id, name: product.name, price: product.price, image: product.image, description: product.description, category: product.category, quantity: product.quantity}],
    totalPrice: 0,
    totalQuantity: 0,
});
// newCart.save();
newCart.totalPrice += product.price * product.quantity;
// newCart.quantity++
// product.qty = 1;
product.quantity = 1;
newCart.totalQuantity = newCart.quantity;
newCart.totalQuantity += 1;
// newCart.save();
console.log(newCart);
console.log("new cart created")
}

// exports.additemtocart = async () => {
//     const {userId} = req.body;
// }


//     try {
//     let cart = await Cart.findOne({user});
// if (cart) {
//     let itemIndex = cart.products.findIndex(p => p.productId == productId);

//     if (itemIndex > -1) {
//     let productItem = cart.products[itemIndex];
//     productItem.quantity = quantity;
//     cart.products[itemIndex] = productItem;
// } else {
//     cart.products.push({productId, quantity, name, price});
// }
// cart = await cart.save();
// return res.status(201).send(cart);
// } else {
//     const newCart = await Cart.create({
//     user,
//     products: [{productId, quantity, name, price}]
// });
// return res.status(201).send(newCart);
// }
// } catch (err) {

//     console.log(err);
//     res.status(500).send("Something went wrong")
// }

    // res.render('deutchlandautohaus/shoppingcart', {product})
});

// app.get('/deutchlandautohaus', (req, res) => {
//     if (!req.session.cart) {
// return res.render('deutchlandautohaus/shoppingcart', {products: null})}
// }

// )

//Removing all products in cart
app.post('/delete-all', async (req, res) => {
    const owner = req.user.id;

const user = await User.findById(owner);
const cart = await Cart.findOne({user: user})

if (cart.products.length >= 1) {
    console.log('Hello');
    console.log(cart.products);
    cart.products.length = 0;
    // cart = await cart.save();
console.log(cart.products);
}
res.render('deutchlandautohaus/shoppingcart', {cart: cart});
// res.redirect('deutchlandautohaus/shoppingcart', {cart: cart});
// res.redirect({cart: cart}, 'deutchlandautohaus/shoppingcart');
})


//Deleting product from cart
app.post('/delete-cart', async (req, res) => {
    const {prodId} = req.body;
    const owner = req.user.id;
// try {
    const user = await User.findById(owner);
    let cart = await Cart.findOne({user: user});

    let product = await Product.findById(prodId)
    console.log(product)
    console.log(prodId);

    const itemIndex = cart.products.findIndex((p) => p.id == prodId);
    // const filteredItem = cart.products.filter((p) => p.id == prodId);
    console.log(itemIndex);
    if (itemIndex >= 0) {
        // cart.totalQuantity = cart.totalQuantity - filteredItem.quantity;
        // console.log(cart.totalQuantity)
        // cart.totalQuantity -= product.quantity;
    //    console.log(filteredItem.quantity);
// console.log(cart.products[filteredItem]);
        const deleteProduct = cart.products[itemIndex];
        cart.totalPrice -= deleteProduct.price * deleteProduct.quantity;
        cart.totalQuantity -= deleteProduct.quantity;
        cart.products.splice(itemIndex, 1);
//         let productQuantity = cart.products[filteredItem];
//         productQuantity.quantity = 0;
// cart.totalQuantity -= productQuantity;
        // cart.totalQuantity -= cart.products[filteredItem].quantity;
        // cart.totalQuantity -= product.quantity;
        // cart.totalQuantity -= filteredItem.quantity;
        // cart.totalPrice -= product.price * product.quantity;
        // cart.totalPrice -= cart.products[filteredItem].price * cart.products[filteredItem].quantity;
        // cart.totalPrice = 0;
        // cart.totalQuantity = 0;
        // product.quantity = 0;
        console.log(product.quantity);
        console.log(cart.totalPrice);
        cart = await cart.save();
// cart.totalQuantity -= 1;
        // cart.totalQuanity =- 1;
        // cart.totalPrice =- cart.price * cart.quantity;
        // return res.status(200).send({status: true, updatedCart: cart})
        // console.log(cart);
        res.redirect('deutchlandautohaus/shoppingcart');
        
}
//     if (itemIndex >= 0) {
//         cart.products.splice(itemIndex, 1);
// }
// } catch(e) {
//     console.log("Error: ", e)
// }
});

/* delete by quantity */
app.post('/delete-quantity', async (req, res) => {
    const {quantityInput, prodId} = req.body;
    console.log(quantityInput);
    // const {prodId} = req.body;
    console.log(prodId);

    const owner = req.user.id;

    const user = await User.findById(owner);

    let cart = await Cart.findOne({user: user});

    if (!cart)
    return res
      .status(404)
      .send({ status: false, message: "Cart not found for this user" });


    let product = await Product.findById(prodId);
    console.log(product);
    console.log(prodId);
    console.log(cart);

    //  let quantity = quantityInput;

    // quantity -= 1;
    // const itemIndex = cart.products.findIndex((p) => p.value == quantityInput);
    const itemIndex = cart.products.findIndex((p) => p.id == prodId);
    console.log(itemIndex);

    if (itemIndex > -1) {
        const productItem = cart.products[itemIndex];
        productItem.quantity -= 1;
        cart.totalPrice -= productItem.price * productItem.quantity;
        // // console.log(cart.totalPrice -= 1);
        cart.totalQuantity -= productItem.quantity;
        // cart.totalPrice = 27493;
        // cart.totalQuantity = 7;
        cart.products[itemIndex] = productItem;


    /* remove item if quantity is equal to zero */

    // if (productItem.quantity == 0) {
    if (productItem.quantity == 0) {
        // cart.products[productItem];
        // const productItem = cart.products[itemIndex];
        // cart.totalPrice -= productItem.price * productItem.quantity;
        // cart.totalQuantity -= productItem.quantity;
        cart.totalPrice -= productItem.price;
        // cart.totalQuantity -= productItem.quantity;
        cart.totalQuantity -= 1;
        // cart.products.splice(productItem, 1);

        // const prod = cart.products.filter((i) => i.id == prodId);
        cart.products.splice(itemIndex, 1)
        cart = await cart.save();

    // console.log('qty is: ', productItem.quantity);
    res.redirect('deutchlandautohaus/shoppingcart');
        // cart.totalPrice -= productItem.price * productItem.quantity;
        // cart.totalQuantity -= productItem.quantity;
} 
// else {
//         cart.totalPrice -= productItem.price;
//         cart.totalQuantity -= productItem.quantity;
//         console.log('qty is over 1');
// res.redirect('deutchlandautohaus/shoppingcart');
// }
    cart = await cart.save();
}

    // cart.totalQuantity -= productItem.quantity;
    // itemIndex.quantity -= 1;
//     const inputValue = quantityInput.value;
// console.log(inputValue);

// cart = await cart.save();
})

app.get('/add-to-cart/:id', async (req, res) => {
    const id = req.params.id;
console.log(id);

const user = await User.findOne(req.user);
console.log(user)

// let cart = await Cart.findOne({userId});

// const {name, price} = req.body;
// res.send(req.body);
// const {productId, quantity, name, price} = req.body;
// console.log(req.body);
// const {productId} = req.body;
// try {
    // const productDetails = await Product.findById({productId});
    // console.log(productDetails);
// }
// try {
//     let cart = await Cart.findOne({ user })
// }

// res.send(id);
// const cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

// Product.findById(id, function (err, product) {
//     if (err) {
//         return res.redirect('deutchlandautohaus/home');
// }
// cart.add(product, id);
// req.session.cart = cart;
// console.log(req.session.cart)
// res.redirect('deutchlandautohaus/home');
// })
})

// New shop route for products and cart

// app.get('/add-to-cart/:id', function(req, res) {
//     const productId = req.params.id;
// })

app.get('/deutchlandautohaus/careers', (req, res) => {
    res.render('deutchlandautohaus/careers');
})

app.post('/deutchlandautohaus/careers', (req, res) => {
    console.log(req.body)
})

app.get('/searchpage', (req, res) => {
    res.render('deutchlandautohaus/searchpage');
})


app.get('/login', (req, res) => {
    console.log(req.body)
    // res.send(req.body)
    res.render('users/login');
})

app.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}),(req, res) => {
    req.flash('success', 'You have successfully logged in');
    res.redirect('deutchlandautohaus/home')
    // res.redirect('/login')
    // console.log('You have successfully logged in')    
// const {username, password} = req.body;
    // const foundUser = User.findOne({username});
    // if (req.session.user_id)
    // req.session.user_id = foundUser._id
    // // req.flash('success', 'you have successfully registered')
    // console.log(foundUser);
    // res.redirect('/')
//     function login() {
//         fetch("/api/login")
// .then((res) => {
//     if (res.status == 200) {
//     return res.json()
// } else {
//     throw Error(res.statusText)
// }
// })
// .then(data => {
//     localStorage.setItem("token", data.token)
//     logResponse("loginResponse", `localStorage set with token value: ${data.token}`)
// }) 
// .catch(console.error)
// }
});

//Admin Logout 1/20/2026
app.get('/deutchlandautohaus/admin_logout', (req, res) => {
    delete req.session.admin;
    res.redirect('/deutchlandautohaus/admin_login');
})

app.get('/testuser', (req, res) => {
  if (req.user) {
    res.send(`✅ Logged in as: ${req.user.email}`);
  } else {
    res.send('❌ Not logged in — req.user is missing');
  }
});

// app.get('/logout', (req, res) => {
//     res.render('users/logout');
// })

//User logout
app.get('/logout', (req, res, next) => {
    // req.session.user_id = null;
    // res.session.destroy;
    req.logout(function(err) {
        if (err) {
            return next(err)
    }
        req.flash('success', 'GoodBye');
        // res.redirect('/deutchlandautohaus/home');
        console.log('You are logged out')
        return res.redirect('/deutchlandautohaus/home');
    });
    // req.flash('success', 'GoodBye');
    // res.redirect('/');
    // console.log('You are logged out')
})

app.get('/register', (req, res) => {
    // const {username, email, password} = req.body;
    // const user = new User({username, password});
    // console.log(user);
    res.render('users/register');
});

app.post('/register', catchAsync(async(req, res, next) => {
try {
    const {username, email, password} = req.body;
    const user = new User({username, email});
    const registeredUser = await User.register(user, password);
    console.log(registeredUser)
    req.session.user_id = user._id;

    req.login(user, function(err) {
        if(err) return next(err);
        req.flash('success', 'You have successfully registered')
        res.redirect('/deutchlandautohaus/home')
})
// req.login = function(req, res, next) {
//     res.send('Login Successful');
// }
// req.login(function() {
//     res.send('login successful')
// })

// req.login(user, function(err) {
//     if (err) {
//     return next(err)
// }
// return res.redirect('/deutchlandautohaus/home')
// });

// User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
//     if(err) {
//     console.log(err);
//     return res.redirect('/register');
// }
// passport.authenticate('local')(req, res, function() {
//     res.redirect('/deutchlandautohaus/home');
// });
// })
    // console.log(req.session.returnTo);
    // console.log(req.session.user_id)

    // req.flash('success', 'You have successfully registered')
    // res.redirect('/register')
    // res.redirect('/deutchlandautohaus/home');
if (!req.body.username) {
        return next(new AppError('Validation error: username is required', 401))
}
if (!req.body.email) {
    return next(new AppError('Validation error: email is required', 401))
}
if (!req.body.password) {
    return next(new AppError('Validation error: password is required', 401))
}
    // console.log(user)
console.log(req.cookies)
// await user.save();
} catch(e) {
    // next(e)
req.flash('error', e.message)
console.log(e)
res.redirect('/register')
}
    // if(!req.body.username) {
    //     next(new AppError('need username', 404))
    // }
// const bcrypt = new
    // const user = new User({username, email});
    // const registeredUser = await User.register({user, password});
    // registeredUser.save();
    // user.save();
    // console.log(user);
})
)

app.get('/deutchlandautohaus/blogs', (req, res) => {
    res.render('deutchlandautohaus/blogs')
})

app.get('/deutchlandautohaus/blogs2', (req, res) => {
    res.render('deutchlandautohaus/blogs2')
})

// app.all('/error', (req, res, next) => {
//     // console.log(chickenerror)
// // throw new Error('incorect')
// chicken.fly();
// })

// const validatepass = (req, res, next) => {
//     const {password} = req.query;
//     if (password === 'chicken') {
//         next();
//     } else {
//     // res.status(401)
//     throw new AppError('Password required!', 401)
//         // res.send('Need correct password!')
//     }
// }

// app.all('/secret', validatepass, (req, res, next) => {
//     // throw new AppError('Page not Found!')
// res.send('Sometimes I wear headphones sop i dont have to talk to anyone')
// })

// app.use((req, res, next) => {
//         res.status(404).send('Page not found')
// })

// app.use((err, req, res, next) => {
//     console.log('something went wrong!');
//     next(err);
// // console.log(err)
// })

// app.use((req, res, next) => {
//     console.log('Reached unmatched route:', req.method, req.url);
//     next();
// })

app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.json({ status: 'ok' });
});

// app._router.stack.forEach((r) => {
//   if (r.route && r.route.path) {
//     console.log('✅ Registered route:', r.route.path);
//   }
// });

// app.all('*', (req, res, next) => {
//     // console.log('something went wrong')
//     // res.send('something went wrong')
//     next(new AppError('Page not found', 404))
// })

// app.use((req, res) => {
//   console.log('404 Not Found:', req.method, req.originalUrl);
//   res.status(404).send('Page not found');
// });

app.use((req, res) => {
  if (!req.originalUrl.startsWith('/.well-known')) {
    console.log('404 Not Found:', req.method, req.originalUrl);
  }
  res.status(404).send('Page not found');
});

//NOTE Comment out app.use middleware when getting 500 internalserver error so server can post actual error
// app.use((err, req, res, next) => {
//         console.log(req.session)
//         const {status = 500} = err;
//         const {message = 'something went wrong'} = err;
//     if(!err.message) err.message = 'Something went wrong'
//         // res.status(status).send("hello error")
//         // res.status(status).send(message)
//         res.status(status).render('error', {err})
// })


app.listen(3000, () => {
    console.log('Listening on port 3000')
})



/////
// exports.addItemToCart = async(req, res) => {
//     const {userId, products} = req.body;
//     const quantity = Number.parseInt(req.body.quantity);

//     try {
//         //----Get users cart----//
//         let cart = await Cart.findOne({
//             userId: userId
// })
//         //----Get selected product details---//
//         const productDetails = await Product.findById(productId);

//         //--check if cart exists and check quantity of items--//
//         if (!cart && quantity products.productId == productId);

//         //--this removes an item from the cart if the quantity is set to zero--//
//         if (indexFound !== -1 && quantity products.total).reduce((acc, next) => acc + next);
// }
//         //-----check if product exist, just add the previous quantity with the new quantity and update the total price
//         else if (indexFound !== -1) {
//             cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
//             cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
//             cart.items[indexFound].price = productDetails.price
//             cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
// }        


// //--check if Quantity is Greater than 0 then add item to items Array ---// 
// else if (quantity > 0) {
//             cart.products.push({
//                 productId: productId,
//                 quantity: quantity,
//                 price: productDetails.price,
//                 total: parseInt(productDetails.price * quantity)
// })
//     cart.subTotal = cart.products.map(product => product.total).reduce((acc, next) => acc + next);
// }
// //---if quantity of price is 0 throw the error ------
// else {
//     return res.status(400).json({
//         type: "invalid",
//         msg: "invalid request"
// })
// }
// let data = await cart.save();
// res.status(200).json({
//     type: "success",
//     mgs: "Process successful",
//     data: data
// })
// }
// //-------if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created-----
// else {
//     const cartData = {
//         userId: userId,
//         products: [{
//             productId: productId,
//             quantity: quantity,
//             total: parseInt(productDetails.price * quantity),
//             price: productDetails.price
// }],
// subTotal: parseInt(productDetails.price * quantity)
// }
// cart = new Cart(cartData);
// let data = await cart.save();
// res.json(data);
// }
// } catch (err) {
//     console.log(err)
//     res.status(400).json({
//         type: "invalid",
//         msg: "something went wrong",
//         err: err
// })
// }