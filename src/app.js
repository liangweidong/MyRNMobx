import React, {Component} from 'react';
import {View} from 'react-native';
import {Router, Scene} from 'react-native-mobx';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react/native';

useStrict(true);

// view and model for Counter scene
import Page from './page';
import Models from './model';


@observer
export default class App extends Component {
    render(){
        return (
            <Router key="root">

                <Scene key="index" component={Page.Layout} hideNavBar store={Models.FooterModel} />

                 <Scene key="tabbar" tabs={true}>
                     <Scene key="home" title="home" component={Page.Home} hideNavBar hideTabBar={false} store={Models.HomeModel} />
                     <Scene key="hemai" title="hemai" component={Page.Hemai} />
                     <Scene key="kaijiang" title="kaijiang" component={Page.Kaijiang} />
                     <Scene key="shuoshuo" title="shuoshuo" component={Page.Shuoshuo} />
                     <Scene key="mine" title="userinfo" component={Page.UserInfo} store={Models.UserinfoModel} />
                 </Scene>
                <Scene key="k3" component={Page.K3} store={Models.K3Model} hideNavBar />
            </Router>
        )
    }
}