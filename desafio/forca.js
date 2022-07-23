class Forca{
  constructor(palavra){
    this.palavra = palavra,
    this.vidas = 6,
    this.letrasChutadas = "",
    this.progresso = ""
  } 

  chutar(letra) {
    if(this.verificaLetras(letra))
      return;
    if(letra.length===1){
      this.letrasChutadas+=String(letra);
      this.progressoPalavra();
      this.verificaAcerto(letra);
      this.vidas -= this.verificaAcerto(letra) ? 0 : 1;
    }
  }

  verificaLetras(letra){
    for (let value of this.letrasChutadas) 
      if(value===letra)
        return true; 
  }

  verificaAcerto(letra){
    for (let value of this.palavra) 
      if(value===letra)
        return true;
    return false;
  }
  
  progressoPalavra(){
    this.progresso="";
    for (let i = 0 ; i < this.palavra.length ; i++){
      for (let j = 0 ; j < this.letrasChutadas.length ; j++){
        if(this.palavra[i]===this.letrasChutadas[j]){
          this.progresso += this.palavra[i];
          j = this.letrasChutadas.length;
        }else if(j === this.letrasChutadas.length-1)
          this.progresso += '_';
      }
    }
  }

  buscarEstado() {
    if(this.progresso === this.palavra)
      return "ganhou";
    if(this.vidas===0)
      return "perdeu";
    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.progresso // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
