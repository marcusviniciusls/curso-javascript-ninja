(function() {

console.log( 'Limpando CPFs:' );
function cleanCPF(cpf){
    return cpf.replace(/\D/g, "");
}
console.log(cleanCPF("049-214 3421-1"))
console.log(cleanCPF("210.458.522-05"))
console.log(cleanCPF("735 500 794 - 22"))
console.log(cleanCPF("101.123-131x32"))

console.log( '\nFormatando CPFs corretamente:' );
function formatarCpf(cpfNaoFormato){
    var cpfLimpo = cleanCPF(cpfNaoFormato);
    return cpfLimpo.replace(/(\d\d\d)(\d\d\d)(\d\d\d)(\d\d)/, '$1.$2.$3-$4');
}
console.log(formatarCpf('467518 998 90'));

console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
function palavrasComecacomJ(frase){
    return frase.match(/junho|julho/g);
}
console.log(palavrasComecacomJ('\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":'))
console.log( '\nMatch com a abertura de uma tag HTML:' );
console.log('<div><section><blockquote>Texto <img /></blockquote></section></div>'.match(/<\w+>/g))
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
console.log('<div><ul><li></li><li></li><li><span></span></li></ul></div>'.match(/\w+><\/\w+>/g));
console.log( '\nFazer replace dos textos das tags:' );
// ?
})();