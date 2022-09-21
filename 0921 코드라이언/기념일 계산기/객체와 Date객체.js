let perseon = {
  name: "김키위새",
  sayHello: function () {
    console.log("hello");
  },
};
console.log(person.name);

//자바스크립트의 모든것은 객체

//1. Date객체생성
const now = new Date();
//2. 연도를 가져오는 메서드
now.getFullYear();
//3. 월 정보를 가져오는 메서드 - 0부터 시작
now.getMonth();
//4. 일 정보를 가져오는 메서드 .getDate()
now.getDate();
//5. 1970년 1월 1일 00:00:00을 기준으로 흐른 시간을 밀리초로
let christmas = new Date("2020-12-25");
//6. 특정 일의 Date 객체 생성
let ms = new Date(1000);
