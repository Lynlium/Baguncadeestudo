function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e insinra novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade >= 12 && idade < 21 ){
                //Jovem
                img.setAttribute('src', 'criancam.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'jovemadultom.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'idosom.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'bebef.webp')
            } else if (idade >= 12 && idade < 21 ){
                //Jovem
                img.setAttribute('src', 'crianca.jpg')
            } else if (idade < 50){
                //Adulto
                img.setAttribute ('src','jovemadultof.jpg')
            } else{
                //Idoso
                img.setAttribute ('src', 'idosof.jpg')
            }
        }
        res.innerHTML =`Detectamos ${gen} de ${idade} anos` 
        res.appendChild(img)
} 
}