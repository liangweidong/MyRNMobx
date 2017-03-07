import {observer} from 'mobx-react/native';

import Header from './Header'
import Counter from './Counter'
import HeaderCenter from './HeaderCenter'

exports.Header = observer(Header)
exports.Counter = observer(Counter)
exports.HeaderCenter = observer(HeaderCenter)