//Calculadora de partidas Rankeadas

// vitórias
win = 105;

// derrotas
lose = 10;

calcRanking(win, lose);

function calcRanking(win, lose) {
  score = win - lose;

  if (score <= 10) {
    ranking = "Ferro";
  } else if (score >= 11 && score <= 20) {
    ranking = "Bronze";
  } else if (score >= 21 && score <= 50) {
    ranking = "Prata";
  } else if (score >= 51 && score <= 80) {
    ranking = "Ouro";
  } else if (score >= 81 && score <= 90) {
    ranking = "Diamante";
  } else if (score >= 91 && score <= 100) {
    ranking = "Lendário";
  } else if (score >= 101) ranking = "Imortal";

  return console.log(
    `O Herói tem de saldo de ${score} está no nível de ${ranking}`
  );
}
