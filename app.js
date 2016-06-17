var express        = require('express'),
    app            = express(),
    bodyParser     = require('body-parser'),
    mongoose       = require('mongoose'),
    passport       = require('passport'),
    flash          = require('connect-flash'),
    LocalStratergy = require('passport-local'),
    methodOverride = require('method-override'),
    Campground     = require('./models/campgrounds'),
    Comment        = require('./models/comments'),
    User           = require('./models/users'),
    seedDB         = require('./seeds');

// Requiring Routes    
var commentRoutes    = require('./routes/comments.js'),
    campgroundRoutes = require('./routes/campgrounds.js'),
    indexRoutes      = require('./routes/index.js');
 
 
 
app.set('view engine', 'ejs');
// mongodb://<dbuser>:<dbpassword>@ds043220.mlab.com:43220/yelpcamp
// mongoose.connect("mongodb://localhost/yelp_camp");
mongoose.connect("mongodb://shyam:shyam@ds043220.mlab.com:43220/yelpcamp");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname+"/public"));   
app.use(methodOverride("_method"));
app.use(flash());
 //seedDB();   // seed the dataBase   



// Passport Configuration

app.use(require('express-session')({
    secret:"sjfoisdjfoisdfjsdfjlksadfj",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
   res.locals.currentUser=req.user;
   res.locals.error=req.flash("error");
   res.locals.success=req.flash("success");
   next();
});

app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/",indexRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The Yelpcamp Server Has Started!");
});
