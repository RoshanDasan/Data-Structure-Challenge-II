// implement hash table using linkedlist

class LinkedListNode{
    constructor(key, value)
    {
        this.key = key
        this.value = value
        this.next = null
    }
}

class HashTable
{
    constructor(size)
    {
        this.table = new Array(size)
        this.length = this.table.length
    }

    hash(key)
    {
        var total
        for (let i = 0; i < key.length; i++) {
              var value = key.charCodeAt(i)  
                    
        }
        total += value % this.length

        return total
    }

    set(key, value)
    {
        let index = this.hash(key)
        console.log(index);
        
        if(!this.table[index]){this.table[index]= new LinkedListNode(key, value)}

        else{
           let currentNode = this.table[index]

           while(currentNode.next)
           {
            currentNode = currentNode.next
           }
           currentNode.next = new LinkedListNode(key, value)
        }

    }

    get(key)
    {
        let index = this.hash(key)
        console.log(index);
        if(this.table[index])
        {
        
            let currentNode = this.table[index]
            while(currentNode.next)
            {
                if(currentNode.key == key)
                {
                    return currentNode.value
                }
                currentNode = currentNode.next
            }
        }
        else{
            
           return 
        }
        return null
    }
}


let newList = new HashTable(17)

newList.set("roshan", 12)
newList.set("roshan", 17)


console.log(newList.get("roshan"));
