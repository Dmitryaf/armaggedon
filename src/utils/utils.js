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
      (item) => item.close_approach_date >= this.getCurrentDate(),
    );
  }

  // Трансформирует приходящую дату в нужный формат
  static getTransformDate(transformDate) {
    const date = new Date(transformDate);
    const params = date.toLocaleString('ru', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return params.replace(/[г.]/g, '');
  }

  // Получает время из даты приходящей из API
  static getTime(transformDate) {
    const date = new Date(transformDate);
    const params = date.toLocaleString('ru', {
      hour: 'numeric',
      minute: 'numeric',
    });
    return params;
  }

  // Трансформирует приходящее значение дистанции в нужный формат
  static transformDistance(transformDistanse) {
    return Math.floor(transformDistanse).toLocaleString('ru');
  }

  // Возвращает расстояние в указаной  единице измерения
  static getDistance(measureDistance, distance) {
    return measureDistance === 'км'
      ? `${this.transformDistance(distance.kilometers)}`
      : `${this.transformDistance(distance.lunar)}`;
  }

  // Возвращает класс в зависимости от значения параметров
  static asteroidClass(asteroidSize, isDanger) {
    if (isDanger && asteroidSize > 3000 && asteroidSize < 10000) {
      return 'card_asteroid_md card_danger';
    }
    if (isDanger && asteroidSize >= 10000) {
      return 'card_asteroid_lg card_danger';
    }
    if (!isDanger && asteroidSize > 3000 && asteroidSize < 10000) {
      return 'card_asteroid_md';
    }
    if (!isDanger && asteroidSize > 10000) {
      return 'card_asteroid_lg';
    }
    return '';
  }
}

export default Utils;
