class Stack {
  constructor() {
    this.stack = []
    }
  push(number) {
    this.stack.push(number)
  }
  
  pop() {
    return this.stack.pop()
  }
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.pop())
// => 5

stack.push(2)
stack.push(7)
console.log(stack.pop())
// => 7

console.log(stack.pop())
// => 2

console.log(stack.pop())
// => 3

module.exports = Stack
