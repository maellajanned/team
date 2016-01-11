var Hat = function() {
  var student = ["abdel", "sarah", "nadege", "flavien", "kevin-l", "adel", "karine", "kevin-c", "ryadh",
    "jeanne-darc", "ahmed", "bruno", "florent", "jousna", "simon", "yannic", "yannick", "jérome", "anthony", "marc", "juliette", "mohammed"
  ];
  this.chance = function(nb) {
    var S = [];
    for (var i = 0; i < nb && student.length; i++) {
      var randI = Math.floor(Math.random() * (student.length - 1)); // l'ordi donne les noms de façon aléatoire
      S.push(student[randI]); //je mets un élément donné de façon alétoire dans un tableau
      student.splice(randI, 1); // diminue un élement dans un tableau
    }
    return S;
  };
  this.teams = function(nb) {
    var P = [],
      pl = this.chance(nb);
    while (pl.length) {
      P.push(pl);
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
