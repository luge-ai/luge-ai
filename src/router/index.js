import React, {memo, Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
// const Home = lazy(() => import('@/pages/home'));
import Home from '../pages/home';
import DataDetail from '../pages/detail';
const Task = lazy(() => import('../pages/task'));
const Game = lazy(() => import('../pages/game'));
const About = lazy(() => import('../pages/about'));
const Ranking = lazy(() => import('../pages/ranking/index'));
const RankDetail = lazy(() => import('../pages/ranking/rankDetail'));
const TaskDetail = lazy(() => import('../pages/task/TaskDetail'));

const App = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                <Route path="/luge/home" exact component={Home} />
                <Route path="/luge/task" exact component={Task} />
                <Route path="/luge/game" exact component={Game} />
                <Route path="/luge/about" exact component={About} />
                <Route path="/luge/ranking" exact component={Ranking} />
                <Route path="/luge/ranking/rankDetail" exact component={RankDetail} />
                <Route path="/luge/dataDetail" exact component={DataDetail} />
                <Route path="/luge/task/taskDetail" exact component={TaskDetail} />
                <Redirect to="/luge/home" />
            </Switch>
        </Suspense>
    );
};

export default memo(App);
