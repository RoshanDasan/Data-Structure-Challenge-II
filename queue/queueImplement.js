
class Queue
{
    constructor()
    {
        this.items = []
    }
    enqueue(element)
    {
        this.items.push(element)
    }
    dequeue()
    {
        this.items.shift()
    }
    display()
    {
        console.log(this.items);
    }
}


let queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)


queue.display()

queue.dequeue()

queue.display()