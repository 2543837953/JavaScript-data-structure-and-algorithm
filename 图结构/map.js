class Map{
    //字典类属性
    constructor() {
        this.items={}
    }
    //字典类方法
    //set方法
    //在字典中添加键值对
    set(key,value){
        this.items[key]=value;
    }
    //remove方法
    //从字典中移除元素
    remove(key){
        //判断字典中是否有这个key
        if (!this.has(key)) return false
        //从字典在删除key
        delete this.items[key];
        return true;
    }
    //has方法
    //判断字典中是否有某个key
    has(key){
        return this.items.hasOwnProperty(key);
    }
    //get方法
    //根据key去获取value
    get(key){
        return this.has(key)?this.items[key]:'undefined';
    }
    //clear方法(将这个字典中的所有元素全部删除)
    clear(){
        this.items={};
    }
    //size方法(返回字典所包含元素的数量。与数组的length属性类似)
    size(){
        return Object.keys(this.items).length
    }
    //keys方法
    //获取所有的keys
    keys(){
        return Object.keys(this.items)
    }
    //values方法
    //获取所有的value
    values(){
        return Object.values(this.items)
    }
}