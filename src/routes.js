import React from 'react';
import Blog from './containers/Blog/Blog'
import BlogItemDetail from './components/BlogItemDetail/BlogItemDetail';

const routes = [
    {
        path: '/blogs',
        exact: true,
        main: ({match}) => <Blog match={match}/>
    },
    {
        path: '/blogs/:id',
        exact: false,
        main: (props) => <BlogItemDetail {...props}/>
    }
]

export default routes;