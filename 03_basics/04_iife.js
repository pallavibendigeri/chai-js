(function chai(){
    //named iife
    console.log("DB Connected"); 
})();

//()();

((name) => {
    //unmaned iife
    console.log(`DB Connected ${name}`);
})("Pallavi");
