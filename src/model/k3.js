import {action,reaction,observable,observe,computed,autorun} from 'mobx';
import autoBind from 'autobind-decorator';
import {Actions} from 'react-native-mobx';

@autoBind
class FooterActive{

    @observable test = 'asd'
    @observable CenterOpen = {false}
    // @observable currentTab='home';

    constructor(){
        //只要改变某个值就执行
        // reaction(
        //     ()=>this.currentTab,
        //     this.activeTab
        // );
    }


    @action changeTest(ct){
        // this.currentTab = ct;
        this.test = '呵呵呵'
    }
}

export default new FooterActive();