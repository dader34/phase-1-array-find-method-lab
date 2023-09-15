const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]


const superbowlWin = (record) =>{
    const winningYear = record.find((e)=> e.result === "W")
    if(winningYear){
        return winningYear.year
    }
    return undefined
}

console.log(superbowlWin(record))