function isOldEnoughToVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isOldEnoughToVote(20));
console.log(isOldEnoughToVote(2))