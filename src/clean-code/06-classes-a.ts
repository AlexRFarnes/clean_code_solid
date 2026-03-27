(() => {
  // No aplicando el principio de responsabilidad única

  type Gender = "F" | "M";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    public lastAcces: Date;

    constructor(
      public email: string,
      public role: string,

      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAcces = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home/",
    "/home",
    "alex@email.com",
    "Admin",
    "Alex",
    "M",
    new Date("1990-01-01"),
  );

  console.log({
    userSettings,
  });
})();
