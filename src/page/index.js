//重载组件必用
import {observer} from 'mobx-react/native';

import Home from "./Home"
import K3 from "./K3"
import Layout from "./Layout"
import Hemai from "./Hemai"
import Kaijiang from "./Kaijiang"
import Shuoshuo from "./Shuoshuo"
import UserInfo from "./UserInfo"
import Test from "./test"


exports.Home = observer(Home);
exports.K3 = observer(K3);
exports.Layout = observer(Layout);
exports.Hemai = observer(Hemai);
exports.Kaijiang = observer(Kaijiang);
exports.Shuoshuo = observer(Shuoshuo);
exports.UserInfo = observer(UserInfo);
exports.Test = observer(Test);
