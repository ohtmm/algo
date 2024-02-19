// 좌표 축소

function minify(randomCords: number[]) {
  const unique = [...new Set(randomCords)];
  unique.sort((a, b) => a - b);
  const dictionary = new Map();

  unique.forEach((el, idx) => {
    dictionary.set(el, idx);
  });

  return randomCords.map((el) => dictionary.get(el)).join(' ');
}
