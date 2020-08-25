export default class Team {
    constructor() {
      this.members = [{
        name: 'Стрелец',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
      },
      {
        name: 'Дружинник',
        type: 'Swordsman',
        health: 100,
        level: 2,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Колдун',
        type: 'Magician',
        health: 90,
        level: 1,
        attack: 10,
        defence: 40,
      },
      {
        name: 'Мертвец',
        type: 'Undead',
        health: 50,
        level: 3,
        attack: 100,
        defence: 80,
      },
      {
        name: 'Упырь',
        type: 'Zombie',
        health: 20,
        level: 1,
        attack: 10,
        defence: 10,
      },
      {
        name: 'Бес',
        type: 'Daemon',
        health: 80,
        level: 2,
        attack: 80,
        defence: 20,
      }];
    }
    * [Symbol.iterator]() {
      let current = 0;
      const last = this.members.length;
      const persons = this.members;
      
      for (let i = current; i < last; i++) {
        yield persons[current];
        current += 1;
      }
    }
  }