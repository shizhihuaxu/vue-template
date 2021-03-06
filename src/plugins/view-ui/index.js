import Vue from 'vue'

// view ui 组件按需引入
import {
    BackTop,
    Button,
    ButtonGroup,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Circle,
    Col,
    Collapse,
    ColorPicker,
    Content,
    DatePicker,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    InputNumber,
    Scroll,
    Sider,
    Split,
    Submenu,
    Layout,
    List,
    LoadingBar,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Modal,
    Notice,
    Option,
    OptionGroup,
    Page,
    Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Step,
    Steps,
    Switch,
    Table,
    Tabs,
    TabPane,
    Tag,
    Time,
    Timeline,
    TimelineItem,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload,
} from 'view-design'
import 'view-design/dist/styles/iview.css'

const components = {
    BackTop,
    Button,
    ButtonGroup,
    Card,
    Carousel,
    CarouselItem,
    Cascader,
    Cell,
    CellGroup,
    Checkbox,
    CheckboxGroup,
    Col,
    Collapse,
    ColorPicker,
    Content,
    DatePicker,
    Divider,
    Drawer,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    InputNumber,
    Scroll,
    Sider,
    Split,
    Submenu,
    Layout,
    List,
    LoadingBar,
    Menu,
    MenuGroup,
    MenuItem,
    Message,
    Modal,
    Notice,
    Option,
    OptionGroup,
    Page,
    Panel,
    Poptip,
    Progress,
    Radio,
    RadioGroup,
    Rate,
    Row,
    Select,
    Slider,
    Spin,
    Step,
    Steps,
    Table,
    Tabs,
    TabPane,
    Tag,
    Time,
    Timeline,
    TimelineItem,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload,
    iButton: Button,
    iCircle: Circle,
    iCol: Col,
    iContent: Content,
    iForm: Form,
    iHeader: Header,
    iInput: Input,
    iMenu: Menu,
    iOption: Option,
    iProgress: Progress,
    iSelect: Select,
    iSwitch: Switch,
    iTable: Table,
    iTime: Time,
}

// 循环注册全局组件
Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})

// 将组件注册到挂载到 vue 原型上
Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Message = Message
Vue.prototype.$Notice = Notice
Vue.prototype.$Spin = Spin

// 配置全局提示组件
Vue.prototype.$Message.config({
    top: 40,
    duration: 3,
})
