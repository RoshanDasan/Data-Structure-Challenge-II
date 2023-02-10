// basic hash function

function hash(key, stringlen)
{
    let total = 0
    let prime = 31

    for(let j=0; j<key.length; j++)
    {
        let char = key[j]
        let value = char.charCodeAt(0) - 96
        total = (total*prime+value) % stringlen
    }
    return total
}


console.log(hash("Haii",13));