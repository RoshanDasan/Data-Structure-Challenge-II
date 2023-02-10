
class Stack{
    constructor()
    {
        this.items = []
    }

    push(element)
    {
        this.items.push(element)
    }

    pop()
    {
        this.items.pop()
    }

    display()
    {
        console.log(this.items);
    }
    peek()
    {
        console.log(this.items[this.items.length-1]);
    }
}

const stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.peek()

stack.display()


