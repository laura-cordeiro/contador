function contar() {
  let vInicio = document.getElementById("inicio");
  let vFim = document.getElementById("fim");
  let vPasso = document.getElementById("passo");
  var vRes = document.querySelector("div#res");
  if (
    vInicio.value.length == 0 ||
    vFim.value.length == 0 ||
    vPasso.value.length == 0
  ) {
    res.innerHTML = "Impossível contar!";
  } else {
    vRes.innerHTML = `Contando: <br>`;
    let i = Number(vInicio.value);
    let f = Number(vFim.value);
    let p = Number(vPasso.value);
    if (p <= 0) {
      window.alert("Passo inválido! Considerando passo igual a 1");
      p = 1;
    }
    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        vRes.innerHTML += ` ${c} \u{27A1} `;
      }
    } else {
      //contagem decrescente
      for (let c = i; c >= f; c -= p) {
        vRes.innerHTML += ` ${c} \u{27A1} `;
      }
    }
    vRes.innerHTML += `\u{23F9}`;
  }
}
