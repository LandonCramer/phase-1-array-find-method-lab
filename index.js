const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "A"},
    //...
  ]
  function superbowlWin(arr) {
    let winningYear = arr.find(checkWin);
        if(winningYear) {
        return winningYear.year;
        } else {
            return undefined;
        }
    }

function checkWin(rec) {
      if(rec.result === "W") {
        return rec.year;  
    }
}

 console.log(superbowlWin(record));