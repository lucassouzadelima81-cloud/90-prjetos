let dinheiro = Number(prompt("#valor"))


alert(dinheiro.toLocaleString(`pt-br`, {
    style: `currency`, 
    currency: `BRL`,
}))