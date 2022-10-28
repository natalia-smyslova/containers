export default class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(404, 'not found');
  }

  translate(code) {
    // Реализуйте метод translate(code), позволяющий по коду получить текст ошибки,
    //   а в случае отсутствия подобного кода возвращать строку 'Unknown error'.
    if (this.map.has(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
