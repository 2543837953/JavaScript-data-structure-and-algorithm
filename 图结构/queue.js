class Queue{
    //队列类的属性
    constructor() {
        this.items=[]
    }
    //队列类的方法
    //1.将元素加入到队列中
    enqueue(element){
        this.items.push(element);
    }
    //2.从队列中删除前端元素
    dequeue(){
        return this.items.shift();
    }
    //3.查看前端元素
    front(){
        return this.items[0]
    }
    //4.查看队列是否为空
    isEmpty(){
        return this.items.length===0
    }
    //5.查看队列中元素的个数
    size(){
        return this.items.length
    }
    //6.toString方法
    toString(){
        let str='';
        this.items.forEach(item=>{
            str+=item+' '
        })
        return str;
    }
}