// 내가 푼 코드
function solution(genres, plays) {
  const answer = [];
  const totalMap = {};
  const playsMap = {};

  genres.forEach((genre, index) => {
    const isGenre = totalMap.hasOwnProperty(genre);

    if (isGenre) {
      totalMap[genre] += plays[index];
      playsMap[genre] = [...playsMap[genre], [plays[index], index]];
    } else {
      totalMap[genre] = plays[index];
      playsMap[genre] = [[plays[index], index]];
    }
  });

  Object.entries(totalMap)
    .sort((a, b) => b[1] - a[1])
    .forEach((item) => {
      const [genre, total] = item;
      const arr = playsMap[genre].sort((a, b) => b[0] - a[0]);

      answer.push(...arr.slice(0, 2).map((item) => item[1]));
    });

  return answer;
}

// 강사님 코드
function solution(genres, plays) {
  const map = new Map();

  genres
    .map((genre, idx) => [genre, plays[idx]])
    .forEach(([genre, play], idx) => {
      const data = map.get(genre) || { total: 0, songs: [] };

      map.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, idx }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  console.log(
    [...map.entries()]
      .sort((a, b) => b[1].total - a[1].total)
      .flatMap((item) => item[1].songs)
      .map((item) => item.idx)
  );
}

const answer = solution(
  ['classic', 'pop', 'classic', 'classic', 'pop'],
  [500, 600, 150, 800, 2500]
);
console.log(answer);
