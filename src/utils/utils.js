// Класс для вспомогательных фунций
class Utils {
  // Получение текущей даты
  static getCurrentDate() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  // Фильтрация по актуальным датам
  static filterDate(dateArray) {
    return dateArray.filter(
      (item) => item.close_approach_date >= this.getCurrentDate()
    );
  }

  // Трансформирует приходящую дату в нужный формат
  static transformDate(transformDate) {
    const date = new Date(transformDate);
    const params = date.toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return params.replace(/[\г.]/g, '');
  }

  // Трансформирует приходящее значение дистанции в нужный формат
  static transformDistance(transformDistanse) {
    return Math.floor(transformDistanse).toLocaleString('ru');
  }

  static getDistance(measureDistance, distance) {
    return measureDistance === 'км'
      ? `${this.transformDistance(distance.kilometers)}`
      : `${this.transformDistance(distance.lunar)}`;
  }
}

export default Utils;
