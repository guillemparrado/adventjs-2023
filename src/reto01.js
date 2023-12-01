
function findFirstRepeated(gifts) {
    const found = [];
    for (const gift of gifts) {
        if(found.includes(gift))
            return gift;
        found.push(gift);
    }
    return -1;
}

console.log(findFirstRepeated([2, 2]))
