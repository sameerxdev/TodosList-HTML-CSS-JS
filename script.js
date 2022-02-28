$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        var newLi = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+newLi+"</li>");
    }
})

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
})



// // ================Color Game=============================

// var colors = generateRandomColors(6);
// var squares = document.querySelectorAll(".square");
// var colorDisplay = document.querySelector("#colorDisplay");
// var correctColor = pickColor();
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var reset = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");


// colorDisplay.textContent = correctColor;

// for (var i=0; i<squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];

//     squares[i].addEventListener("click", function(){
//         var clickedColor = this.style.backgroundColor;
//         if(clickedColor === correctColor){
//             messageDisplay.textContent = "Correct";
//             reset.textContent = "Play Again";
//             SetAllColors();
//             h1.style.backgroundColor = correctColor;
//         }
//         else{
//             this.style.backgroundColor = "#232323";
//             messageDisplay.textContent = "Try Again"
//         }
//     })
// }

// function SetAllColors(){
//     for (var i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = correctColor;
//     }
// }

// function pickColor(){
//     var random = Math.floor(Math.random()*colors.length);
//     return colors[random];
// }

// function generateRandomColors(num){
//     var colors = new Array();
//     var first, second, third;
//     for(var i=0; i<num; i++){
//         first = Math.floor(Math.random()*256);
//         second = Math.floor(Math.random()*256);
//         third = Math.floor(Math.random()*256);
//         colors[i] = "rgb("+first+", "+second+", "+third+")";
//     }
//     return colors;
// }

// reset.addEventListener("click", function(){
//     colors = generateRandomColors(6);
//     correctColor = pickColor();
//     colorDisplay.textContent = correctColor;
//     for (var i=0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//     }
//     h1.style.backgroundColor = "#232323";
// })

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     colors = generateRandomColors(3);
//     correctColor = pickColor();
//     colorDisplay.textContent = correctColor;
//     for(var i=3; i<squares.length; i++){
//         squares[i].style.backgroundColor = "#232323";
//     }
// })

// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
// })

// // ===================================================
// // var todo = [];
// // var entry = prompt("What would you like to do");
// // while (entry !== "quit"){
// //     if (entry === "new"){
// //         var a = prompt("Enter new Todo"); 
// //         todo.push(a);
// //     }
// //     else if (entry === "list"){
// //         todo.forEach(function(todos, i){
// //             console.log(i + ": " + todos);
// //         })
// //     }
// //     else if (entry === "delete"){
// //         var d = prompt("Enter Index"); 
// //         todo.splice(d, 1);
// //     }
// //     var entry = prompt("What would you like to do");
// // }

// // var arr1 = ["a","b","c"];
// // var arr2 = ["a","a","a"];
// // function check(arr){
// //     var a = arr[0];
// //     for (var i = 1; i<arr.length; i++){
// //         if (arr[i] !== a){
// //             return false
// //         }
// //     }
// //         return true;
// // }
// // check(["a","a","a"]);
// // // check(arr2);

// // // var ar = [1,2,3,4];
// // // function sum(arr){
// // //     var total = 0;
// // //     for (var i = 0; i<arr.length; i++){
// // //         total = total + arr[i];
// // //     }
// // //     return total;
// // // }
// // // sum([1,2,3,4]);

// // function maximum(arr){
// //     var max = arr[0];
// //     for (var i = 1; i<arr.length; i++){
// //         if(max < arr[i]){
// //             max = arr[i];
// //         }
// //     }
// //     return max;
// // }
// // maximum([1,2,3,4]);

// // var movies = [
// //     {
// //         title: "abc",
// //         rating: 4,
// //         hasWatched: true
// //     },
// //     {
// //         title: "def",
// //         rating: 3.7,
// //         hasWatched: false
// //     },
// //     {
// //         title: "ghi",
// //         rating: 4.2,
// //         hasWatched: true
// //     },
// //     {
// //         title: "jkl",
// //         rating: 3.9,
// //         hasWatched: false
// //     }
// // ]
// // for (var i=0 ; i<movies.length; i++){
// //     if (movies[i].hasWatched === true){
// //         console.log("You have watched "+ movies[i].title +" with rating " + movies[i].rating);
// //     }
// //     else{
// //         console.log("You have not seen "+ movies[i].title +" with rating " + movies[i].rating);
// //     }
// // }

// // var tag = document.querySelector("h1");
// // tag.textContent
// // var bod = document.querySelector("body")

// // alert("Connected");
// // var b = document.querySelector("button");
// // var isPurple = false;
// // b.addEventListener("click", function(){
// //     if (isPurple){
// //         document.body.style.backgroundColor = "white";
// //         isPurple = false;
// //     }
// //     else{
// //         document.body.style.backgroundColor = "purple";
// //         isPurple = true;
// //     }
// // })

// // var p1button = document.querySelector("#first");
// // var p2button = document.querySelector("#second");
// // var p1score = 0;
// // var p2score = 0;
// // var score1 = document.querySelector("#score1");
// // var score2 = document.querySelector("#score2");
// // var gameOver = false;
// // var max = 5;
// // var over = document.querySelector("input");
// // var rst = document.querySelector("#rst");
// // var maxValue = document.querySelector("p span");

// // p1button.addEventListener("click", function(){
// //     if(!gameOver){
// //         p1score++;
// //         if(p1score === max){
// //             score1.classList.add("winner");
// //             gameOver=true;
// //         }
// //     score1.textContent = p1score;
// // }})

// // p2button.addEventListener("click", function(){
// //     if(!gameOver){
// //         p2score++;
// //         if(p2score === max){
// //             score2.classList.add("winner");
// //             gameOver=true;
// //         }
// //     score2.textContent = p2score;    
// // }})

// // rst.addEventListener("click", function(){
// //    reset();
// // })

// // function reset(){
// //     p1score = 0;
// //     p2score = 0;
// //     score1.textContent = p1score;
// //     score2.textContent = p2score;
// //     score1.classList.remove("winner");
// //     score2.classList.remove("winner");
// //     gameOver = false;
// // }

// // over.addEventListener("change", function(){
// //     maxValue.textContent = over.value;
// //     max = Number(over.value);
// //     reset();
// // })

