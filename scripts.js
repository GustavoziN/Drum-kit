const sons = {
    dança: 'danca_gatinho.mp3',
    olhaEleAe: 'olha-ele-ae_SSZb6Lg.mp3',
    somDesconhecido: 'som-inentendivel-rodrigo-faro.mp3',
    tome: 'tome-rodrigo-faro_xDXKGwq.mp3',
    ui: 'ui-rodrigo-faro.mp3'
}

const criarButton = (text) => {
    const button = document.createElement('button')
    button.classList.add('key')
    button.textContent = text
    button.id = text
    document.getElementById('conteudo').appendChild(button)

    console.log(button)
}

const exibir = (sons)=> Object.keys(sons).forEach(criarButton)

exibir(sons)

const TocarSom = (verificar)=> {
    const audio = new Audio(`./sounds/${sons[verificar]}`)
    audio.play()
}

const ativar = (e)=> {
    const verificar = e.target.id;
    const Permitir = sons.hasOwnProperty(verificar)
    if(Permitir) {
        TocarSom(verificar)
    }
}

document.getElementById('conteudo').addEventListener('click', ativar)



