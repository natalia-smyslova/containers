import ErrorRepository from '../map';

// Протестировать возвращение правильного описания ошибки
test('give error name', () => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(404);
  expect('not found').toEqual(result);
});

// Протестировать возвращение непонятной ошибки
test('give error name', () => {
  const errorRepository = new ErrorRepository();
  const result = errorRepository.translate(111);
  expect('Unknown error').toEqual(result);
});
