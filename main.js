var Hat = function() {
  var student = ["abdel", "sarah", "nadege", "flavien", "kevin-l", "adel", "karine", "kevin-c", "ryadh",
    "jeanne-darc", "ahmed", "bruno", "florent", "jousna", "simon", "yannic", "yannick", "jérome", "anthony", "marc", "juliette", "mohammed"
  ];

  this.chance = function(nb) {
    var S = [],
      pool = student.slice(); // une autre méthode pool = new array(student) je duplique un tableau
    for (var i = 0; i < nb && pool.length; i++) {
      do{
        var randI = Math.floor(Math.random() * (pool.length - 1)); // l'ordi donne les noms de façon aléatoire
        S.push(pool[randI]); //je mets un élément donné de façon alétoire dans un tableau
        pool.splice(randI, 1); // diminue un élement dans un tableau
    }while(S[i] != S[i+1]);
  }
    return S;
  };
  this.teams = function(nb) {
    var P = [],
      pl = this.chance(nb);
    for(var j=0; j<=pl.length; j++) {
      P.push(pl[j]);
      pl = this.chance(nb);
      console.log(pl);
    }
    return P;
    console.log(P);
  }

}

var h = new Hat();
/*h.chance(3);*/
console.log(h.teams(4));
