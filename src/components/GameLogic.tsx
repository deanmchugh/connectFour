let playerOneSquares: any = []
let playerTwoSquares: any = []
let player = 1
const BOTTOMROW = 5
const CONNNECTED = 5

const coordsToInt = (target: string) => {
    const x = parseInt(target.charAt(1))
    const y = parseInt(target.charAt(0))
    return {
        xcood: x,
        ycood: y 
    }
}

const searchArray = (xcood: number, ycood: number) => {
    for (let i = 0; i < playerOneSquares.length; i++){
        if (playerOneSquares[i][0] === xcood && playerOneSquares[i][1] === ycood) {
            return true
        }
    }
}

const validSquare = (target: string) => {
    const {xcood, ycood} = coordsToInt(target)
    if (!searchArray(xcood, ycood)) {
        if (searchArray(xcood, ycood + 1) || ycood === BOTTOMROW) {
            playerOneSquares.push([xcood, ycood])
            return true
        }
    } 
}

const hasWon = (xcood: number, ycood: number) => {
    let hosPlus = 1, hosMin = 1, verPlus = 1
    let diaRighPlus = 1, diaLeftPlus = 1
    for (let i = 1; i < CONNNECTED; i++){
        if (searchArray(xcood + i, ycood)) hosPlus = hosPlus + 1 
        if (searchArray(xcood - i, ycood)) hosMin = hosMin + 1
        if (searchArray(xcood, ycood + i)) verPlus = verPlus + 1
        if (searchArray(xcood - i, ycood + i)) diaRighPlus = diaRighPlus + 1
        if (searchArray(xcood + i, ycood + i)) diaLeftPlus = diaLeftPlus + 1
    }
    if (hosPlus === 4 || hosMin === 4 || verPlus === 4 ||
        diaRighPlus === 4 || diaLeftPlus === 4){
            window.alert("YOU WON!!")
    }
    
}

export const returnSquare = (event: { target: any; }) => {
    const targetId = event.target.id
    const square = document.getElementById(targetId)
    const {xcood, ycood} = coordsToInt(targetId)
    if (validSquare(targetId)) {
        square.style.background = "red"
    }  
    hasWon(xcood, ycood)  
}

