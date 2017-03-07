import {action,reaction,observable,observe,computed,autorun} from 'mobx';
import autoBind from 'autobind-decorator'

@autoBind
class CounterStore{
    @observable counter = 0;
    @observable total = 0;
    constructor(){
        reaction(()=>this.counter,this.increaseTotal)
    }

    @action increaseTotal(){
        this.total++;
    }

    @action increase(){
        this.counter++;
    }

    @action decrease(){
        this.counter--;
    }

}

export default new CounterStore();