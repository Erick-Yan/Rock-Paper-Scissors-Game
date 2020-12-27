const userscore = [];
const compscore = [];
var compin = new Array();
compin[0] = 'Rocky';
compin[1] = 'Papery';
compin[2] = 'Scissory';

function handCount(arr, hand){
        console.log(hand + ' Probability: ' + arr.filter((h) => (h === hand)).length/arr.length);
}

handCount(compin, 'Rock');
handCount(compin, 'Paper');
handCount(compin, 'Scissor');

function rps(func){
        //var a = 0;
        for(a = 0; a < 5; a++){
                var userin = prompt('Enter Rock, Paper, or Scissor');

                var n = compin.length + 1;
                var i =Math.floor(n*Math.random());

                if (userin === 'Rock' && compin[i] === 'Paper'){
                        console.log(userin);
                        console.log(compin[i]);
                        compscore.push(1);
                        compin.push('Paper');
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                } else if (compin[i] ==='Rock' && userin === 'Paper'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(1);
                        compin.push('Paper', 'Scissor');
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                } else if(userin === 'Rock' && compin[i] === 'Scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(1);
                        compin.push('Rock', 'Paper');
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                } else if(compin[i] === 'Rock' && userin === 'Scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        compscore.push(1);
                        compin.push('Rock');
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                }else if (userin === 'Paper' && compin[i] === 'Scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        compscore.push(1);
                        compin.push('Scissor');
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                }else if(compin[i] === 'Paper' && userin === 'Scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(1);
                        compin.push('Rock', 'Scissor');
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                } else if (compin[i] === 'Rock' && userin === 'Rock'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(0);
                        compscore.push(0);
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
                } else if (compin[i] === 'Paper' && userin === 'Paper'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(0);
                        compscore.push(0);
                        console.log(compin);
                        func(compin, 'Rock');
                        func(compin, 'Paper');
                        func(compin, 'Scissor');
        } else if (compin[i] === 'Scissor' && userin === 'Scissor'){
                console.log(userin);
                console.log(compin[i]);
                userscore.push(0);
                compscore.push(0);
                console.log(compin);
                func(compin, 'Rock');
                func(compin, 'Paper');
                func(compin, 'Scissor');
        }
}
        const arrSum = arr => arr.reduce((a, b) => a + b, 0);
        const t1 = arrSum(userscore);
        const t2 = arrSum(compscore);
        if (t1 > t2){
                console.log(`Score: ${t1} : ${t2}`);
                console.log(compin);
                console.log('You Win!');
        } else if (t1 < t2){
                console.log(`Score: ${t1} : ${t2}`);
                console.log(compin);
                console.log("I Win!");
        } else{
                console.log(`Score: ${t1} : ${t2}`);
                console.log(compin);
                console.log('We Win')
        }
}

console.log(rps(handCount));
