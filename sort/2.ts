/** input 
3
21 Junkyu -> [21, Junkyu] // {21 : Junkyu} 1) 어디에 담아야 하나?
21 Dohyun
20 Sunyoung
 * output
20 Sunyoung
21 Junkyu
21 Dohyun
 */

function func(arr: [number, string][]): [number, string][] {
  return arr.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else return 0;
  });
}

// A : Stable Sort

function func2(arr: [number, string][]): [number, string][] {
  return arr.sort((a, b) => a[0] - b[0]);
}
