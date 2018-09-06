import Media from '../containers/Media/Media'
import Main from '../containers/Main/Main'

export default [
    { path: '/q',
        component: Main,
        loadData: () => {},
    },
    { path: '/w',
        component: Media,
        loadData: () => {},
    },
];