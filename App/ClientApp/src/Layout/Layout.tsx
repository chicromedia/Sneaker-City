import React, { Component } from 'react';
import { Container } from "reactstrap";
import { Navmenu } from "./Components/NavMenu/NavMenu";

export type LayoutProps = {
    children: any
}

export class Layout extends Component<LayoutProps>
{
    render()
    {
        return (
            <div className="Layout">
                <Navmenu/>
                <Container>
                    { this.props.children }
                </Container>
            </div>
        );
    }
}
