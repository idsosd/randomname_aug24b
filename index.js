const namen = ["Ids", "Ward", "Owen", "Wess", "Jasper", "Dinesh", "Vincent", "Marco", "Merzad", "Ali", "Orhan", "Rafael", "Ruben"];

function random_duos_old(){
    let random_nmbr = Math.floor(Math.random() * namen.length);
    let duoname1 = namen[random_nmbr];
    //splice(3,2) verwijdert 2 elementen uit de array vanaf index 3,
    //dus splice(3,1) verwijdert het element uit de array met index 3
    namen.splice(random_nmbr, 1);
    let random_nmbr2 = Math.floor(Math.random() * namen.length);
    let duoname2 = namen[random_nmbr2];
    namen.splice(random_nmbr2, 1);
    console.log(duoname1 + " en " + duoname2)
    console.log("overgebleven namen zijn: " + namen)
    //console.log(used_names)
}

function random_uit_namen()
{
    let random_nmbr = Math.floor(Math.random() * namen.length);
    let name = namen[random_nmbr];
    namen.splice(random_nmbr, 1);
    return name;
}

function random_duo(){
    let duoname1 = random_uit_namen();
    let duoname2 = random_uit_namen();
    console.log(duoname1 + " en " + duoname2);
}

function random_duos(){
    while(namen.length > 0){
        random_duo();
    }
}