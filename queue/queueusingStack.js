class Queue{
    constructor()
    {
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(element)
    {
        this.stack1.push(element)
    }

    dequeue()
    {

        if (!this.stack2.length) {
            while (this.stack1.length) {
              this.stack2.push(this.stack1.pop());
            }
          }
          
          this.stack2.pop() || null;

          while(this.stack2.length)
          {
            this.stack1.push(this.stack2.pop())
          }

          return this.stack2
    }

    display()
    {
        console.log(this.stack1);
    }


}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)


queue.display()

queue.dequeue()

queue.display()



