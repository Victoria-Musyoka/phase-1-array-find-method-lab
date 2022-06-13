// code your solution here
function superbowlWin(record){
    function winner(year){
        return year.result ==="W"
    }
    const winningYear = record.find(winner);
    if(winningYear){
        return winningYear.year;
    }
}
