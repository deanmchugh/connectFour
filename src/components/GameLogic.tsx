let playerSquares: any = []
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

const searchArray = (xcood: number, ycood: number, player: number) => {
    for (let i = 0; i < playerSquares.length; i++){
        if (playerSquares[i][0] === xcood && 
            playerSquares[i][1] === ycood &&
            playerSquares[i][2] === player) {
            return true
        }
    }
}

const validSquare = (target: string) => {
    const {xcood, ycood} = coordsToInt(target)
    if (!searchArray(xcood, ycood, 1) && !searchArray(xcood, ycood, 2)) {
        if (searchArray(xcood, ycood + 1, 1) || 
            searchArray(xcood, ycood + 1, 2) || 
            ycood === BOTTOMROW) {
            playerSquares.push([xcood, ycood, player])
            player === 1 ? player = 2 : player = 1
            return true
        }
    } 
}

const hasWon = (xcood: number, ycood: number) => {
    let hosPlus = 1, hosMin = 1, verPlus = 1
    let diaRighPlus = 1, diaLeftPlus = 1
    for (let i = 1; i < CONNNECTED; i++){
        if (searchArray(xcood + i, ycood, player)) hosPlus = hosPlus + 1 
        if (searchArray(xcood - i, ycood, player)) hosMin = hosMin + 1
        if (searchArray(xcood, ycood + i, player)) verPlus = verPlus + 1
        if (searchArray(xcood - i, ycood + i, player)) diaRighPlus = diaRighPlus + 1
        if (searchArray(xcood + i, ycood + i, player)) diaLeftPlus = diaLeftPlus + 1
    }
    if (hosPlus === 4 || hosMin === 4 || verPlus === 4 ||
        diaRighPlus === 4 || diaLeftPlus === 4){
            window.alert("PLAYER " + player + " WON!!")
    }
}

export const returnSquare = (event: { target: any; }) => {
    const targetId = event.target.id
    const square = document.getElementById(targetId)
    const {xcood, ycood} = coordsToInt(targetId)
    if (validSquare(targetId)) {
        player === 1 ? square.style.background = "red" : square.style.background = "yellow"
    } 
    hasWon(xcood, ycood) 
}

