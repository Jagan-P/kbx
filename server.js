const express = require("express");
const bodyParser = require("body-parser");
const app = new express();
//[ 5, 10, 6, 8, 15, 7, 9 ] => [ 15, 15, 15, 15, 9 ,-1]
app.use(bodyParser.json())
app.post("/users", function(req, res) {
    if(req.body && req.body.array) {
        let array = req.body.array;
        // for(let i=0; i<array.length; i++) {
        //     let max=-1;
        //     for(let j=i+1; j<array.length; j++) {
        //         if(array[j] && max<array[j]) {
        //             max = array[j];
        //         }
        //     }
        //     if(i==array.length-1) {
        //         max = -1;
        //     }
        //     outputArray.push(max);
        // }
        let max = array[array.length-1];
        for(let i=array.length-1; i>-1; i--) {
            if(i==0) {
                array[array.length-1] = -1;
            }
            if(max<array[i] && i!=0) {
                max = array[i];
            }
            array[i] = max;
        }
        console.log(array);
        res.send(array);
    }
    else {
        res.status(403).send("Invalid request. Missing array field in body")
    }
});

app.listen(3000, ()=>{
    console.log("app listening on port 3000");
})