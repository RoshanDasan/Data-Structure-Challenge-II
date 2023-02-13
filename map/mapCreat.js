
const map = new Map()

console.log(map.has('c'));

map.set('a',1)
map.set('b',2)
map.set('c',3)

console.log(map.delete('b'));

for([key,value] of map)
{
    console.log(key,':',value);
}