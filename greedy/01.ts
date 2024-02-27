/**
 * input 10, 4200,
 * [1,5,10,50, ... , 50000]
 *
 * ! 왜 자꾸만 reduce를 사용하려고 할까?
 * 단순 반복이라면, for문을 사용해도 되는데
 */

function greedy1(goal, values) {
  let nowGoal = goal;

  const converse = values.sort((a, b) => b - a); //내림차순 정렬
  // 큰수부터 몫이 1 이상인 것을 찾는다
  converse.reduce((acc, cur, idx) => {
    if (nowGoal / cur === 0) {
      return 0;
    } else {
      // nowGoal % cur === 0 ? 완전 종료 :
      nowGoal = nowGoal % cur;
      return nowGoal / cur;
    }
  }, 0);
}
