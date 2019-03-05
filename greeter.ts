class Student {
  fullName: String;
  constructor (public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}
interface Person {
  firstName: String;
  lastName: String;
}
function greeter (person: Person) {
  return 'hello' + person.firstName + person.lastName
}
let user = new Student('Jane', 'M', 'User')

document.body.innerHTML = greeter(user)
