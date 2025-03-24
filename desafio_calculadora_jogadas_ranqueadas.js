function rankedMatches(win, defeat){
    
    let heroLevel;
    let rank = win - defeat;

    if (rank < 10) {
        heroLevel = 'Ferro';
    }else if (rank >= 11 && rank <= 20) {
        heroLevel = 'Bronze';
    }else if (rank >= 21 && rank <= 50) {
        heroLevel = 'Prata';
    }else if (rank >= 51 && rank <= 80) {
        heroLevel = 'Ouro';
    }else if (rank >= 81 && rank <= 90) {
        heroLevel = 'Diamante';
    }else if (rank >= 91 && rank <= 100) {
        heroLevel = 'Lendário';
    }else if (rank >= 101) {
        heroLevel = 'Imortal';
    }
    console.log(`O Herói tem saldo de ${rank} está no nível de ${heroLevel}`)
    return heroLevel
}

let result = rankedMatches(50, 30)
