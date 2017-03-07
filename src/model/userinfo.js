import {action,reaction,observable,observe,computed,autorun} from 'mobx';
import autoBind from 'autobind-decorator';
import {Actions} from 'react-native-mobx';

@autoBind
class FooterActive{

    @observable gridList = [
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
        {icon:"print",type:'foundation',text:"账户明细"},
    ];
    // @observable currentTab='home';

    constructor(){
        //只要改变某个值就执行
        // reaction(
        //     ()=>this.currentTab,
        //     this.activeTab
        // );
    }


    @action changeTab(ct){
        // this.currentTab = ct;
    }
}

export default new FooterActive();