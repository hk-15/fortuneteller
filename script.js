const fortunes = {
    firstFortunes: [
        'Be careful. ',
        'Keep your friends close. ',
        'Take a deep breath. ',
        'Open your mind and heart. ',
        'Set aside your doubts. ',
        'Steel yourself. '
    ],
    secondFortunes: [
        'You will have ',
        'You should avoid ',
        'You should be wary of ',
        'You are not ready for ',
        'You are ready for ',
        'You should look out for '
    ],    
    thirdFortunes: [
        'children.',
        'cats.',
        'fruit trees.',
        'velvet sofas.',
        'stainless steel frying pans.',
        'more responsibility.'
    ],
    get firstFortune() {
        return this.firstFortunes[Math.floor(Math.random()*6)];
    },
    get secondFortune() {
        return this.secondFortunes[Math.floor(Math.random()*6)];
    },
    get thirdFortune() {
        return this.thirdFortunes[Math.floor(Math.random()*6)];
    }
};

function compileFortune () {
    console.log(fortunes.firstFortune + fortunes.secondFortune + fortunes.thirdFortune);
};

compileFortune();