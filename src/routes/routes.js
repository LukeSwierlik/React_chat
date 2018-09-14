import Home from 'containers/Page/Home';
import CreateChannelsContainer from 'containers/CreateChannelsContainer/CreateChannelsContainer';
import ChannelContainer from 'components/Channels/Channel';
import ChannelsListContainer from 'containers/Page/ChannelList';
import RegisterContainer from 'containers/Page/Register';
import LoginContainer from 'containers/Page/Login';
import SettingsContainer from 'containers/Page/Settings';

const routes = [
    {
        id: 0,
        path: '/',
        component: Home,
        exact: true
    },
    {
        id: 1,
        path: '/create-channels',
        component: CreateChannelsContainer
    },
    {
        id: 2,
        path: '/channel/:name',
        component: ChannelContainer
    },
    {
        id: 3,
        path: '/login',
        component: LoginContainer
    },
    {
        id: 4,
        path: '/channels',
        component: ChannelsListContainer
    },
    {
        id: 5,
        path: '/register',
        component: RegisterContainer
    },
    {
        id: 6,
        path: '/settings',
        component: SettingsContainer
    }
];

export default routes;