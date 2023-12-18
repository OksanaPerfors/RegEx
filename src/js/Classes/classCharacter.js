export const nameLengthErrorMessage =
  "name must be longer than 2 and shoter than 10 symbols";
export const nameStringErrorMessage = "name must be string";
export const typeErrorMessage = "Wrong type";
export const levelUpErrorMessage = "нельзя повысить левел умершего";

export class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
  check() {
    const types = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (typeof this.name !== "string") {
      throw new Error(nameStringErrorMessage);
    }
    if (this.name.length < 2 || this.name.length >= 10) {
      throw new Error(nameLengthErrorMessage);
    }
    if (!types.includes(this.type)) {
      throw new Error(typeErrorMessage);
    }
  }
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error(levelUpErrorMessage);
    }
  }
  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
