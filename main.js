let canvas
let ctx
let cells = []

const createCanvas = (w, h) => {
    canvas = document.getElementById("canvas")
    canvas.width = w
    canvas.height = h
    ctx = canvas.getContext("2d")
}

const init = () => {
    createCanvas(2500, 2500)
    createCells(25)
}

let animation = () => {
    requestAnimationFrame(animation)
    update()
}

let update = () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    draw()   
}

let draw = () => {
    cells.forEach(set => {
        set.forEach(obj => {
            obj.update()
        });
    });
}

let randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const createCells = (size) => {
    let xPoints = [0]
    let yPoints = [0]
    let startSet = Math.floor(Math.random() * (size - 0 + 0)) + 0
    let startCell = Math.floor(Math.random() * (size - 0 + 0)) + 0
    for(let i = 1; i < size; i++){
        xPoints.push((canvas.width/size)*i)
        yPoints.push((canvas.height/size)*i)
    }
    for(let i = 0; i < size; i++){
        let newY = yPoints[i];
        let temp = []
        for(let j = 0; j < size; j++){
            temp.push(new Cell(xPoints[j], newY, (canvas.width/size), (canvas.height/size), 5, 0, [i, j]));
        }
        cells.push(temp);
    }

    let index = 0
    let usedCells = []
    let potentialNewCells = []
    let initStartCell = [startSet, startCell]
    let parent = [initStartCell[0], initStartCell[1]]
    cells[initStartCell[0]][initStartCell[1]].type = randomInteger(1,5)
    console.log(potentialNewCells.length - usedCells.length)
    while(potentialNewCells.length - usedCells.length >= 0){
        if(!(usedCells.some(cell => cell.length == parent.length &&
            cell.every((value, index) => parent[index] == value)))){
            usedCells.push(parent)
        }
        if(cells[parent[0]-1]){
            let top = cells[parent[0]-1][parent[1]]
            if(top.type == 0){
                switch(cells[parent[0]][parent[1]].type){
                    case 5:
                        top.type = (randomInteger(1,2) == 1) ? 4 : 5
                        break;
                    case 4:
                        top.type = (randomInteger(1,2) == 1) ? 3 : 5
                        break;
                    case 3:
                        top.type = randomInteger(2,4)
                        break;
                    case 2:
                        top.type = (randomInteger(1,2) == 1) ? 3 : 1
                        break;
                    case 1:
                        top.type = (randomInteger(1,2) == 1) ? 1 : 2
                        break;
                }
                let newTopCell = [parent[0]-1,parent[1]]
                if(!(potentialNewCells.some(cell => cell.length == newTopCell.length &&
                    cell.every((value, index) => newTopCell[index] == value)))){
                    potentialNewCells.push(newTopCell)
                }
            }
        }
        if(cells[parent[0]][parent[1]-1]){
            let left = cells[parent[0]][parent[1]-1]
            if(left.type == 0){
                switch(cells[parent[0]][parent[1]].type){
                    case 5:
                        left.type = (randomInteger(1,2) == 1) ? 4 : 5
                        break;
                    case 4:
                        left.type = (randomInteger(1,2) == 1) ? 3 : 5
                        break;
                    case 3:
                        left.type = randomInteger(2,4)
                        break;
                    case 2:
                        left.type = (randomInteger(1,2) == 1) ? 3 : 1
                        break;
                    case 1:
                        left.type = (randomInteger(1,2) == 1) ? 1 : 2
                        break;
                }
                let newLeftCell = [parent[0],parent[1]-1]
                if(!(potentialNewCells.some(cell => cell.length == newLeftCell.length &&
                    cell.every((value, index) => newLeftCell[index] == value)))){
                    potentialNewCells.push(newLeftCell)
                }
            }
        }
        if(cells[parent[0]+1]){
            let bottom = cells[parent[0]+1][parent[1]]
            if(bottom.type == 0){
                switch(cells[parent[0]][parent[1]].type){
                    case 5:
                        bottom.type = (randomInteger(1,2) == 1) ? 4 : 5
                        break;
                    case 4:
                        bottom.type = (randomInteger(1,2) == 1) ? 3 : 5
                        break;
                    case 3:
                        bottom.type = randomInteger(2,4)
                        break;
                    case 2:
                        bottom.type = (randomInteger(1,2) == 1) ? 3 : 1
                        break;
                    case 1:
                        bottom.type = (randomInteger(1,2) == 1) ? 1 : 2
                        break;
                }
                let newBottomCell = [parent[0]+1,parent[1]]
                if(!(potentialNewCells.some(cell => cell.length == newBottomCell.length &&
                    cell.every((value, index) => newBottomCell[index] == value)))){
                    potentialNewCells.push(newBottomCell)
                }
            }
        }
        if(cells[parent[0]][parent[1]+1]){
            let right = cells[parent[0]][parent[1]+1]
            if(right.type == 0){
                switch(cells[parent[0]][parent[1]].type){
                    case 5:
                        right.type = (randomInteger(1,2) == 1) ? 4 : 5
                        break;
                    case 4:
                        right.type = (randomInteger(1,2) == 1) ? 3 : 5
                        break;
                    case 3:
                        right.type = randomInteger(2,4)
                        break;
                    case 2:
                        right.type = (randomInteger(1,2) == 1) ? 3 : 1
                        break;
                    case 1:
                        right.type = (randomInteger(1,2) == 1) ? 1 : 2
                        break;
                }
                let newRightCell = [parent[0],parent[1]+1]
                if(!(potentialNewCells.some(cell => cell.length == newRightCell.length &&
                    cell.every((value, index) => newRightCell[index] == value)))){
                    potentialNewCells.push(newRightCell)
                }
            }
        }
        parent = potentialNewCells[Math.floor(Math.random() * (potentialNewCells.length - 0 + 0)) + 0]
        index++
    }
}


const WaveFunctionCollapse = (_startSet, _startCell, _potentialNewCells, _initStartCell) => {
    startSet = _startSet
    startCell = _startCell
    potentialNewCells = _potentialNewCells
    initStartCell = _initStartCell
    if(cells[initStartCell[0]-1]){
        top = cells[initStartCell[0]-1][initStartCell[1]]
        if(top.type == 0){
            switch(parent){
                case 3:
                    let newCellType = Math.floor(Math.random() * (4 - 2 + 1)) + 2
                    top.type = newCellType
                    break;
            }
            potentialNewCells.push([startSet-1,startCell])
        }
    }
    if(cells[initStartCell[0]][initStartCell[1]-1]){
        left = cells[initStartCell[0]][initStartCell[1]-1]
        if(left.type == 0){
            switch(parent){
                case 3:
                    let newCellType = Math.floor(Math.random() * (4 - 2 + 1)) + 2
                    left.type = newCellType
                    break;
            }
            potentialNewCells.push([startSet,startCell-1])
        }
    }
    if(cells[initStartCell[0]+1]){
        bottom = cells[initStartCell[0]+1][initStartCell[1]]
        if(bottom.type == 0){
            switch(parent){
                case 3:
                    let newCellType = Math.floor(Math.random() * (4 - 2 + 1)) + 2
                    bottom.type = newCellType
                    break;
            }
            potentialNewCells.push([startSet+1,startCell])
        }
    }
    if(cells[initStartCell[0]][initStartCell[1]+1]){
        right = cells[initStartCell[0]][initStartCell[1]+1]
        if(right.type == 0){
            switch(parent){
                case 3:
                    let newCellType = Math.floor(Math.random() * (4 - 2 + 1)) + 2
                    right.type = newCellType
                    break;
            }
            potentialNewCells.push([startSet,startCell+1])
        }
    }
    initStartCell = potentialNewCells[Math.floor(Math.random() * (potentialNewCells.length - 0 + 0)) + 0]
}

let start = () => {
    init()
    animation()
}

start()