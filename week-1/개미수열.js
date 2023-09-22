const n = 8;
const arr = ['1'];
const regex = /(.)\1*/g;

for (let i = 0; i < n - 1; i++) {
  const str = String(arr[i]);
  const result = str.match(regex);
  const next = result.reduce((acc, cur) => acc + `${cur.length}${cur[0]}`, '');

  arr.push(next);
}

console.log(arr.at(-1));
