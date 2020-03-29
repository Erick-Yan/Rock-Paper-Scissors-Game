function rps(){
        const userscore = [];
        const compscore = [];
        for (a = 0; a < 5; a++){
                var userin = prompt('Enter rock, paper, or scissor');

                var compin = new Array();
                compin[0] = 'rock';
                compin[1] = 'paper';
                compin[2] = 'scissor';
                var i =Math.floor(3*Math.random());

                if (userin === 'rock' && compin[i] === 'paper'){
                        console.log(userin);
                        console.log(compin[i]);
                        compscore.push(1);
                } else if (compin[i] ==='rock' && userin === 'paper'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(1);
                } else if(userin === 'rock' && compin[i] === 'scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(1);
                } else if(compin[i] === 'rock' && userin === 'scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        compscore.push(1);
                }else if (userin === 'paper' && compin[i] === 'scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        compscore.push(1);
                }else if(compin[i] === 'paper' && userin === 'scissor'){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(1);
                } else if (userin === compin[i]){
                        console.log(userin);
                        console.log(compin[i]);
                        userscore.push(0);
                        compscore.push(0);
                }
        }
        const arrSum = arr => arr.reduce((a, b) => a + b, 0);
        const t1 = arrSum(userscore);
        const t2 = arrSum(compscore);
        if (t1 > t2){
                console.log(`Score: ${t1} : ${t2}`);
                console.log('You Win!');
        } else if (t1 < t2){
                console.log(`Score: ${t1} : ${t2}`);
                console.log("I Win!");
        } else{
                console.log(`Score: ${t1} : ${t2}`);
                console.log('We Win')
        }
}

console.log(rps())
