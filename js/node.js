// console.log("드디어 자바스크립트!!")

// number, string(문자), object(객체), null(빈공간,false), underfinded, boolean
// var today = 1; 
// 숫자는 쌍따옴표, 홀따옴표에 넣지 않는다.
    // today = 5;
// today라는 변수는 데이터타입이 숫자이며 값은 5
//     today = 5 + 0
//     today = 4 + 1
//     today = 1 + "일";
//     today = 1 + "일" + 4 + 10;
// console.log(today, typeof today)
//     today = parseInt(today)

// console.log(today, typeof today)
// 콘솔에서 확인

// document.body.innerHTML = "<h1>"+today+"</h1>";
// html에서 확인

// window.onload = function(){
//     document.body.innerHTML = "<h1>" + today + "</h1>";
// }


// var myname = "선주현"
// var number = 1;
// number = 3
// number -= 2

// console.log(myname)
// console.log(typeof myname)

// document.body.innerHTML = "<h2>" + myname + "</h2>";
// document.body.innerHTML += "<p>자바스크립트" + number + "일 공부시작</p>";

var count = 0;

for (var i = 0; i < 100; i+=1) {
    count += 1;
}

    console.log("count 변수의 값은?",count)