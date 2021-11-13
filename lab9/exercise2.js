class Subject{ 
    observers = [{}];
    on(event, fn){
        if(!this.observers[event]){
            return this.observers[event]=[fn];    
        }else{
           return  this.observers[event].push(fn); 
        }                           
    }
    emit(event, message){
        if(this.observers[event]){
            return this.observers[event].map(function2=>function2(message))
        }            
    }
}
const subject = new Subject();
subject.on('eat', console.log);
subject.on('study', console.log);
function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);
subject.emit('eat', 'Corn');
subject.emit('study', 'cs445');