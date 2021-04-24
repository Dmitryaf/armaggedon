export function getCurrentDate() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export function filterDate(dateArray) {
  return dateArray.filter(
    (item) => item.close_approach_date >= getCurrentDate()
  );
}

export function transformDate(transformDate) {
  const date = new Date(transformDate);
  const params = date.toLocaleString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return params.replace(/[\г.]/g, '');
}
