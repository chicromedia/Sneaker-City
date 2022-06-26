import { Component } from "react";

interface ButtonProps
{
    label: string;
}

export class Button extends Component<ButtonProps>
{
    render()
    {
        return ( <button className={ 'btn' }>{ this.props.label }</button> );
    }
}