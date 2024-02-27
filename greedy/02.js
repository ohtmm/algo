function greedy2(timePerPerson) {
  const sorted = timePerPerson.sort((a, b) => a - b);
  return sorted.reduce((acc, cur) => acc + cur, 0);
}
