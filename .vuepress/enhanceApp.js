import {Button, Table, TableColumn} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({ Vue, options, router }) => {
    Vue.use(Button);
    Vue.use(Table);
    Vue.use(TableColumn);
};