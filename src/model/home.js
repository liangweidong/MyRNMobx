import {action,reaction,observable,observe,computed,autorun} from 'mobx';
import autoBind from 'autobind-decorator';
import {Actions} from 'react-native-mobx';

@autoBind
class FooterActive{

    @observable ImgList = [
        "https://facebook.github.io/react/img/logo_og.png",
        "https://facebook.github.io/react/img/logo_og.png",
        "https://facebook.github.io/react/img/logo_og.png",
        "https://facebook.github.io/react/img/logo_og.png",
    ];
    @observable firstList = [
        {name:'复制大厅',iconName:'copy',intro:'跟大咖一起玩'},
        {name:'复制大厅',iconName:'calendar',intro:'跟大咖一起玩'},
        {name:'复制大厅',iconName:'stats',intro:'跟大咖一起玩'},
    ];

    @observable secondList = [
        {name:'竞彩足球',imgurl:require('../static/img/jczq.png'),selected:true},
        {name:'竞彩篮球',imgurl:require('../static/img/jclq.png'),selected:false},
        {name:'比分直播',imgurl:require('../static/img/dlt.png'),selected:false},
        {name:'双色球',  imgurl:require('../static/img/sd.png'),selected:false},
        {name:'快3',    imgurl:require('../static/img/qlc.png'),selected:false},
        {name:'11选5',  imgurl:require('../static/img/ssq_55.png'),selected:false},
        {name:'大乐透', imgurl:require('../static/img/syx5.png'),selected:false},
        {name:'福彩3',  imgurl:require('../static/img/k3.png'),selected:false},
        {name:'快乐彩', imgurl:require('../static/img/dlt.png'),selected:false},
    ];

    @observable thridList = [
        [
            {hasIcon:'football',name:'北京单场'},
            {hasIcon:'',name:'胜负彩'},
            {hasIcon:'football',name:'任选9场'},
        ],
        [
            {hasIcon:'',name:'排列3'},
            {hasIcon:'',name:'活动公告'},
            {hasIcon:'',name:'秘籍'},
        ]
    ];
    // @observable currentTab='home';

    @observable selected = '竞彩足球'

    constructor(){
        //只要改变某个值就执行
        // reaction(
        //     ()=>this.currentTab,
        //     this.activeTab
        // );
    }


    @action clickType(type){
        console.log(1)
        this.selected = type
    }
}

export default new FooterActive();