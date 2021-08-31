const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log("first::::::", first);
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err) {
            console.log(err);
            return;
        }
        const second = result
        console.log("second:::::::", second);
        writeFile(
            './content/result-async.txt',
            `Here is the reult ::: ${first}, ${second}`,
            (err, result)=>{
                if(err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        )
    })
});
console.log('starting next task');