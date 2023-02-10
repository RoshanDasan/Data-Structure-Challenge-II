class CircularQueue
{
    constructor(capacity)
    {
        this.items = new Array(capacity)
        this.capacity = capacity
        this.length = 0
        this.front = -1
        this.rear = -1
    }

    isFull()
    {
        return this.capacity == this.length
    }

    isEmpty()
    {
        return this.length == 0
    }

    enqueue(element)
    {
        if(!this.isFull())  
        {
            this.rear = (this.rear +1) % this.capacity
            this.items[this.rear] = element
            this.length ++
            if(this.front==-1)
            {
                this.front = this.rear
            }
        }
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return
        }
        this.items[this.front] = null
        this.front = (this.front +1) % this.capacity
        this.length --

        if(this.isEmpty())
        {
            this.front = -1
            this.rear = -1
        }

        peek()
        {
            console.log(this.items[this.front])
            
        }

    }

    display()
    {
        if(this.isEmpty())
        {
            console.log('empty');
        }else{
            let str = ""
            let i
            for (i = this.front; i != this.rear; i = (i+1)%this.capacity) {
                str += this.items[i] + " "    
            }
            str += this.items[i]

            console.log(str);
            
        }
    }
}



let queue = new CircularQueue(5)

console.log(queue.isEmpty());
queue.display()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)

console.log(queue.isEmpty());

queue.display()