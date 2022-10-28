import Team from '../classes/Team';
import Character from '../classes/Character';

// Протестировать добавление юзера

test('add one user', () => {
  const team = new Team();
  const anonim = new Character('Иван');
  team.add(anonim);
  expect(team.members).toContain(anonim);
});

// Протестировать добавление одного и того же юзера дважды

test('add one user twice', () => {
  const team = new Team();
  const anonim = new Character('Иван');
  team.add(anonim);
  expect(() => team.add(anonim)).toThrow('Такой персонаж уже есть в команде');
});

//  Протестировать добавление нескольких юзеров подряд

test('add 2 users one after another', () => {
  const team = new Team();
  const anonim = new Character('Иван');
  const anonim2 = new Character('Дмитрий');
  team.add(anonim);
  team.add(anonim2);
  expect(team.members).toContain(anonim, anonim2);
});


//  Протестировать добавление нескольких юзеров одновременно

test('add 2 users at the one moment', () => {
  const team = new Team();
  const anonim = new Character('Иван');
  const anonim2 = new Character('Дмитрий');
  team.addAll(anonim, anonim2);
  expect(team.members).toContain(anonim, anonim2);
});

// Протестировать добавление нескольких юзеров одновременно (дважды один и тот же юзер)
test('add 2 users at the one moment // add 2 users twice', () => {
  const team = new Team();
  const anonim = new Character('Иван');
  const anonim2 = new Character('Дмитрий');
  team.addAll(anonim, anonim2, anonim2);
  expect(team.members).toContain(anonim, anonim2);
});

// Протестировать возвращение массива
test('return array', () => {
  const team = new Team();
  const anonim = new Character('Иван');
  const anonim2 = new Character('Дмитрий');
  team.addAll(anonim, anonim2);
  team.toArray();
  expect(team.members).toEqual([anonim, anonim2]);
});
