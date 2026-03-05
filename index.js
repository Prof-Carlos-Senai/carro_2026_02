let des = document.getElementById('des').getContext('2d')

let carroInimigo = new CarroInimigo(1300,325,50,50,'darkgreen')
let carroInimigo2 = new CarroInimigo(1500,125,50,50,'rgb(247, 0, 255)')
let carroInimigo3 = new CarroInimigo(1700,400,50,50,'rgb(255, 238, 0)')
let estrada = new Estrada(10,345,40,10,'white')
let estrada2 = new Estrada(80,345,40,10,'white')
let estrada3 = new Estrada(140,345,40,10,'white')
let carro = new Carro(100,325,50,50,'darkblue')
let medidaCarro = new Carro(100, 325, 85, 60, 'green')

document.addEventListener('keydown', (e)=>{
    if(e.key === 'w' || e.key === 'ArrowUp'){
        carro.dir -= 10
    }else if(e.key === 's' || e.key === 'ArrowDown'){
        carro.dir += 10
    }    
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'w' || e.key === 'ArrowUp'){
        carro.dir = 0
    }else if(e.key === 's' || e.key === 'ArrowDown'){
        carro.dir = 0
    }
})

function colisao(){
    if(carro.colid(carroInimigo)){
        carroInimigo.recomeca()
        carro.vida -= 1
        
    }
    if(carro.colid(carroInimigo2)){
        carroInimigo2.recomeca()
        carro.vida -= 1
    }
    if(carro.colid(carroInimigo3)){
        carroInimigo3.recomeca()
        carro.vida -= 1
    }
    console.log('vida: ',carro.vida)
}

function pontuacao(){
    console.log('pos: ', carroInimigo.x)
    if(carro.point(carroInimigo)){
        carro.pontos += 5        
    }
    // if(carro.point(carroInimigo2)){
    //     carro.pontos += 5
    // }
    // if(carro.point(carroInimigo3)){
    //     carro.pontos += 5
    // }
    console.log('pontos: ',carro.pontos)
}

function desenha(){
    // estrada.des_quad()
    // estrada2.des_quad()
    // estrada3.des_quad()
    carroInimigo.des_carro()
    // carroInimigo2.des_carro()
    // carroInimigo3.des_carro()
    carro.des_carro()
    medidaCarro.des_quad()    
}

function atualiza(){
    carro.mov_car()
    carroInimigo.mov_car()
    // carroInimigo2.mov_car()
    // carroInimigo3.mov_car()
    // estrada.mov_est()
    // estrada2.mov_est()
    // estrada3.mov_est()
    colisao()
    pontuacao()

}

function main(){
    des.clearRect(0,0,1200,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()