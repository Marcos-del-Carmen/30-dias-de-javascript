class Persona {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0;
        this.skills = [];
    }
    
    getFullName() {
        return this.firstName + ' ' + this.lastName
    }

    get getScore() {
        return this.score;
    }

    get getSkills() {
        return this.skills;
    }

    set setScore(score) {
        this.score += score;
    }
    
    set setSkill(skill) {
        this.skills.push(skill);
    }
    getPersonInfo() {
        let fullName = this.getFullName();
        let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
        let formattedSkills = skills ? `He knows ${skills}` : "";

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
        return info;
    }

    static favoriteSkill() {
        const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
        const index = Math.floor(Math.random() * skills.length);
        return skills[index];
    }

    static showDateTime() {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours < 10) {
        hours = "0" + hours;
        }
        if (minutes < 10) {
        minutes = "0" + minutes;
        }

        let dateMonthYear = date + "." + month + "." + year;
        let time = hours + ":" + minutes;
        let fullTime = dateMonthYear + " " + time;
        return fullTime;
    }
}
const person = new Persona("Lidiya", "Tekle", 28, "Finland", "Espoo");
const person1 = new Persona("Asabeneh", "Yetayeh", 250, "Finland", "Helsinki");
const person2 = new Persona("Lidiya", "Tekle", 28, "Finland", "Espoo");
const person3 = new Persona("John", "Doe", 50, "Mars", "Mars city");
person1.setScore = 1;
person1.setSkill = "HTML";
person1.setSkill = "CSS";
person1.setSkill = "JavaScript";

person2.setScore = 1;
person2.setSkill = "Planning";
person2.setSkill = "Managing";
person2.setSkill = "Organizing";

console.log(person1.getScore);
console.log(person2.getScore);

console.log(person1.getSkills);
console.log(person2.getSkills);
console.log(person3.getSkills);

console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());
console.log(person3.getPersonInfo());

class Studen extends Persona {
    saySomething() {
        console.log('Soy un estudiante que hereda de la clase persona');
    }
}

const s1 = new Studen("Asabeneh", "Yetayeh", "Finland", 250, "Helsinki");
console.log(s1);
console.log('say', s1.saySomething());
console.log('nombre completo', s1.getFullName());
console.log('informacion de la persona', s1.getPersonInfo());