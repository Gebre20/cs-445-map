class Info{
    logging(information){
        console.info(information);
    }
}
class Warn{
    logging(information){
        console.warn(information);
    }
}
class Error{
    logging(information){
        console.error(information);
    }
}
class Table{
    logging(information){
        console.table(information);
    }
}
class Strategy{
    loggingIn = "";
    setStrategy(log){
        this.loggingIn = log;
    }
    logging(information){
        this.loggingIn.logging(information);
    }
}

const strategy = new Strategy();
strategy.setStrategy(new Info());
strategy.logging('info....');
strategy.setStrategy(new Warn());
strategy.logging('warn....');
strategy.setStrategy(new Error());
strategy.logging('error....');
strategy.setStrategy(new Table());
strategy.logging(['table', 'table']);
