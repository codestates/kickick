export default function dateConverter(date) {
  const now = Date.now();
  const parsedDate = Date.parse(date);

  const seconds = (now - parsedDate) / 1000;
  const minutes = parseInt(seconds / 60);
  const hours = parseInt(seconds / 3600);

  if (minutes >= 1 && minutes < 60) return `${minutes}분 전`;
  if (hours >= 1 && hours < 24) return `${hours}시간 전`;

  return date.slice(0, 10);
}
