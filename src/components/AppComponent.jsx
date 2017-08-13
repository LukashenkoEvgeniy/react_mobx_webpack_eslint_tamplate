////////////////////////////////////////////////////////////////
//
// THIS FILE IS PART OF DELTA MONITOR
// (c) 2017 C4ISR https://delta.istar.org.ua/
// DO NOT USE, MODIFY OR DISTRIBUTE WITHOUT PERMISSION OF OWNER!
// SEE LICENSE.TXT FOR DETAILS
// Created by LUKASHENKO YEVHENII on 13.08.2017.
//
////////////////////////////////////////////////////////////////
import React, {Component} from 'react';


export default class AppComponent  extends Component{

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div>
                <h1>'Hellop'</h1>
            </div>
        );
    }
}