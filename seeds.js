var mongoose   = require('mongoose');
var Campground = require('./models/campgrounds');
var Comment    = require('./models/comments');
var data=[
    {
    name        :"Cloud's Rest",
    image       :"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
    description :"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
    name        :"Desert Mesa",
    image       :"https://farm4.staticflickr.com/3446/3801715614_f9713f7211.jpg",
    description :"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    {
    name        :"Canyon Floor",
    image       :"https://farm9.staticflickr.com/8002/7299820870_e78782c078.jpg",
    description :"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    }
];
function seedDB(){
    Campground.remove({},function(err){
    //     if(err){
    //         console.log(err);
    //     } 
    //     console.log("Removed all Campgrounds");
    // });
    // data.forEach(function(seed){
    //      Campground.create(seed,function(err,campground){
    //          if(err){
    //              console.log(err);
    //          } else {
    //              console.log("added a campground");
    //              Comment.create({
    //                  text   : "This place is awesome ,but I wish there was internet",
    //                  author : "Homer"
    //              },function(err,comment){
    //                  if(err){
    //                      console.log(err);
    //                  } else {
    //                      campground.comments.push(comment);
    //                      campground.save();
    //                      console.log("Comment added!");
    //                  }
    //              });
    //          }
    //      });
         });
   
}
module.exports=seedDB;