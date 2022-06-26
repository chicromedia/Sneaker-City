import React, { Component } from 'react';
import { Route } from 'react-router';

import './custom.css';
import { Layout } from "./Layout/Layout";
import { Feed } from "./Features/Feed/Feed";
import { Stock } from "./Features/Stock/Stock";
import { Coming } from "./Features/Comming/Comming";
import { Details } from "./Features/Details/Details";
import { Cart } from "./Features/Cart/Cart";

export default class App extends Component
{
    static displayName = App.name;

    render()
    {
        return (
            <Layout>
                <Route exact path='/' component={ Feed }/>
                <Route path='/in-stock' component={ Stock }/>
                <Route path='/up-coming' component={ Coming }/>
                <Route path='/details' component={ Details }/>
                <Route path='/cart' component={ Cart }/>
            </Layout>
        );
    }
}
