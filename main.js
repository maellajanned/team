var Hat = function() {
  var student = ["abdel", "sarah", "nadege", "flavien", "kevin-l", "adel", "karine", "kevin-c", "ryadh",
    "jeanne-darc", "ahmed", "bruno", "florent", "jousna", "simon", "yannic", "yannick", "jérome", "anthony", "marc", "juliette", "mohammed"
  ];
  this.chance = function(nb) {
    var S = [], pool = student.slice(); // une autre méthode pool = new array(student) je duplique un tableau
    for (var i = 1; i <= nb; i++) {
      var randI = Math.floor(Math.random()*(pool.length-1)); // l'ordi donne les noms de façon aléatoire
        S.push(pool[randI]);//je mets un élément donné de façon alétoire dans un tableau
         pool.splice(randI, 1);// diminue un élement dans un tableau
    }
    return S;
  };
  this.teams = function(nb){
    var P =[], pull = student.slice();

  }
}
var h = new Hat();
console.log(h.chance(4));
