import {action,reaction,observable,observe,computed,autorun} from 'mobx';
import autoBind from 'autobind-decorator';
import {Actions} from 'react-native-mobx';

@autoBind
class FooterActive{

    @observable TabsList = [
        {name:'home',title:"首页",icon:'home',isActive:true},
        {name:'hemai',title:"合买",icon:'people',isActive:false},
        {name:'kaijiang',title:"开奖",icon:'notifications',isActive:false},
        {name:'shuoshuo',title:"说说",icon:'chatbubbles',isActive:false},
        {name:'mine',title:"我的",icon:'person',isActive:false}
    ];
    @observable currentTab='home';

    constructor(){
        //只要改变某个值就执行
        reaction(()=>this.currentTab,this.activeTab);
    }

    @action activeTab(){
        this.TabsList.map(i=>{
            if(i.isActive){i.isActive=false};
            if(i.name==this.currentTab){
                i.isActive = true;
            }
        });
    }

    @action changeTab(ct){
        this.currentTab = ct;
        // switch (ct){
        //     case "home":
        //         Actions.home();
        //         break;
        //     case "hemai":
        //         Actions.hemai();
        //         break;
        //     case "kaijiang":
        //         Actions.kaijiang();
        //         break;
        //     case "shuoshuo":
        //         Actions.shuoshuo();
        //         break;
        //     case "mine":
        //         Actions.mine();
        //         break;
        //
        // }

        this.currentTab = ct;
    }
}

export default new FooterActive();