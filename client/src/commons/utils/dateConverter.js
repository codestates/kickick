export default function dateConverter(date) {
  const now = Date.now();
  const parsedDate = Date.parse(date);

  const standard = (now - parsedDate) / 1000;
  const seconds = parseInt(standard);
  const minutes = parseInt(standard / 60);
  const hours = parseInt(standard / 3600);

  if (seconds >= 1 && seconds < 60) return `${seconds}초 전`;
  if (minutes >= 1 && minutes < 60) return `${minutes}분 전`;
  if (hours >= 1 && hours < 24) return `${hours}시간 전`;

  return date.slice(0, 10);
}
