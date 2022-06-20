class Cell{
    constructor(x,y,w,h,options,type,index,isParent){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.options = options
        this.type = type
        this.index = index
        this.isParent = isParent
    }

    update = () => {
        if(this.type != 0){
            this.options = 0
        }
        this.draw()
    }

    draw = () => {
        let img
        switch(this.type){
            case 5:
                img = document.getElementById('tree')
                ctx.drawImage(img, this.x, this.y, this.w, this.h)
                break;
            case 4:
                img = document.getElementById('flower')
                ctx.drawImage(img, this.x, this.y, this.w, this.h)
                break;
            case 3:
                img = document.getElementById('grass')
                ctx.drawImage(img, this.x, this.y, this.w, this.h)
                break;
            case 2:
                img = document.getElementById('sand')
                ctx.drawImage(img, this.x, this.y, this.w, this.h)
                break;
            case 1:
                img = document.getElementById('water')
                ctx.drawImage(img, this.x, this.y, this.w, this.h)
                break;
        }
    }
}