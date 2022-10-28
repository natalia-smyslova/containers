export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(user) {
    if (this.members.has(user) === false) {
      this.members.add(user);
    } else {
      throw new Error('Такой персонаж уже есть в команде');
    }
  }

  addAll(...users) {
    for (let i = 0; i < users.length; i + 1) {
      this.members.add(users[i]);
    }
  }

  toArray() {
    this.members = Array.from(this.members);
  }
}
