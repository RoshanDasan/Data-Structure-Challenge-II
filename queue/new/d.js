class HashTable
{
    constructor(key, value)
    {
        this.key = key
        this.value = value
        this.next = null
    }
}

class Listing
{
    constructor(size)
    {
        this.bucket = new Array(size)
        this.length = this.bucket.length
    }


    hash(key)
    {
        return 5
    }

    insert(key,value)
    {
        let index = this.hash(key)

        if(!this.bucket[index])
        {
            this.bucket[index] = new HashTable(key, value)
        }
        else
        {
            let tableNode = this.bucket[index]
            while(tableNode.next)
            {
                tableNode = tableNode.next
            }
            tableNode.next = new HashTable(key, value)
        }
    }
    get(key)
    {
        let index = this.hash(key)

        if(this.bucket[index])
        {
            let tableNode = this.bucket[index]
            while(tableNode.next)
            {
                if(tableNode.key == key) return tableNode.value

                tableNode = tableNode.next
            }
        }
        else{
            return
        }
    }

}


let list = new Listing(17)

list.insert("roshan",21)
list.insert("rahul",23)
list.insert("roshan",25)


console.log(list);

console.log(list.get("roshan"));
