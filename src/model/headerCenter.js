import {action,reaction,observable,observe,computed,autorun} from 'mobx';
import autoBind from 'autobind-decorator';
import {Animated,InteractionManager} from 'react-native';
import {Actions} from 'react-native-mobx';

@autoBind
class FooterActive{

    @observable isOpen = false;
    @observable perLine = 4;
    @observable dataList = [
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa2'},
        {name:'玩法',type:'wanfa3'},
        {name:'玩法',type:'wanfa4'},
        {name:'玩法',type:'wanfa5'},
        {name:'玩法',type:'wanfa6'},
        {name:'玩法',type:'wanfa7'},
        {name:'玩法',type:'wanfa8'},
        {name:'玩法',type:'wanfa9'},
    ]
    @observable currentSelected = 'wanfa';
    @observable bounceValue = new Animated.Value(0);
    // @observable currentTab='home';

    constructor(){
        //只要改变某个值就执行
        reaction(
            ()=>this.isOpen,
            this.animatedOn
        );
    }


    @action toggle(){
        // if(this.isOpen){
        //     this.bounceValue.setValue(1);
        //     Animated.spring(
        //         this.bounceValue,
        //         {
        //             toValue:0,
        //             friction:5,
        //         }
        //     ).start();
        //     this.isOpen = !this.isOpen;
        // }else{
        //     this.isOpen = !this.isOpen;
        // }
        this.isOpen = !this.isOpen;

    }
    @action selected(type){
        this.currentSelected = type;
    }
    @action animatedOn(){
        if(this.isOpen){
            // this.isOpen = !this.isOpen;
            this.bounceValue.setValue(0);
            Animated.spring(
                this.bounceValue,
                {
                    toValue:1,
                    friction:4,
                }
            ).start();
        }
    }

}

export default new FooterActive();