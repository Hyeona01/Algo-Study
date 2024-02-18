/*

[짝수는 싫어요]

문제 설명
정수 n이 매개변수로 주어질 때, 
n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 
solution 함수를 완성해주세요.

제한사항
1 ≤ n ≤ 100


*/

//문제 풀이
//push 함수 써서 조건에 맞는 배열을 넣자 !!

function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }

  return answer;
}
