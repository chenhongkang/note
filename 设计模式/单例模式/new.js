function _new(Func, ...args) {
    //默认创建一个实例对象（而且是属于当前这个类的一个实例）
    // let obj = {};
    let obj = Object.create(Func.prototype);

    //也会把类当做普通函数执行
    //执行的时候要保证函数中的this指向创建的实例
    let result = Func.call(obj, ...args);

    //若客户自己返回引用值，则以自己返回的为主，否则返回创建的实例
    if ((result !== null && typeof result === "object") || (typeof result === "function")) {
        return result;
    }
    return obj;
}
/**
 * new函数的实现步骤
 * 1.使用Object.create创建新对象，并且继承原型
 * 2.将this指向新对象，并运行构造函数
 * 3.不论其是否写return，都会把新创建的实例返回，这里有个特殊点，如果用户自己返回内容，且返回的是一个引用类型值，则会把默认返回的实例给覆盖掉，此时返回的值就不再是类的实例了
*/