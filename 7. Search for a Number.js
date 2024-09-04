function searchForANumber (nums, commands){
let take = commands[0];
let toDel = commands[1];
let searched = commands[2];
let newArr = nums.slice(0,take)
newArr.splice(0,toDel);
let finalArr = [];
for (let num of newArr){
    if (num === searched){
        finalArr.push(num)
    }
}

    console.log(`Number ${searched} occurs ${finalArr.length} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],
[3, 1, 5]);
