let nota = 30;
let estado;

if(nota >= 80){
    console.log('Parabéns você foi aprovada(o)!');
    estado = 'aprovado';
}
else if (nota < 80 && nota >= 60){
    console.log('Você está na nossa lista de espera');
    estado = 'lista';
}
else{
    console.log('Você foi reprovada(o)');
    estado = 'reprovado';
}


switch(estado){
    case 'aprovado':
        console.log('Aprovado!');
        break;

    case 'lista':
        console.log('Lista!');
        break;
    
    case 'reprovado':
        console.log('Reprovado!');
        break;

    default: 
        console.log('Não se aplica');
        break;
}