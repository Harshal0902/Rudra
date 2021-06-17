import { Component } from "react";
class MouseCard extends Component {
    constructor(props) {
        super(props);
        this.mouseLeaveDelay = null;
        this.background = {
            'backgroundImage': `url("${props.image}")`,
        };
        this.id = `card-${props.id}`;
        this.state = {
            mouseX: 0,
            mouseY: 0,
            tX: 0,
            tY: 0,
            rX: 0,
            rY: 0,
            cardStyle: {
                transform: `rotateY(0deg) rotateX(0deg)`
            },
            cardBgTransform: {
                transform: `translateX(0px) translateY(0px)`
            }
        }
    }
    mousePX = () => {
        return (this.state.mouseX - 150) / 150;
    };
    mousePY = () => {
        return (this.state.mouseY - 250) / 250;
    };


    handleMouseMove = (e) => {
        let card = document.getElementById(this.id);
        let { x, y } = card.getBoundingClientRect()
        this.setState({
            mouseX: e.clientX - x,
            mouseY: e.clientY - y,
            tX: this.mousePX() * 20,
            tY: this.mousePY() * -25,
            rX: this.mousePX() * 20,
            rY: this.mousePY() * -25,
            cardStyle: {
                transform: `rotateY(${this.state.rX}deg) rotateX(${this.state.rY}deg)`
            },
            cardBgTransform: {
                transform: `translateX(${this.state.tX}px) translateY(${this.state.tY}px)`
            }
        });
    };

    handleMouseEnter = () => {
        clearTimeout(this.state.mouseLeaveDelay);
    };

    handleMouseLeave = () => {
        this.mouseLeaveDelay = setTimeout(() => {
            this.setState({
                cardStyle: {
                    transform: `rotateY(0deg) rotateX(0deg)`
                },
                cardBgTransform: {
                    transform: `translateX(0px) translateY(0px)`
                }
            });
        }, 1000);
    };

    render() {
        return (<div className='card-wrap' onMouseMove={this.handleMouseMove}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave} >
            <div id={this.id} className='card' style={this.state.cardStyle}>
                <div className='card-bg' style={{ ...this.background, ...this.state.cardBgTransform }}></div>
                <div className='card-info'>
                    <this.props.Info />
                    <slot name="header"></slot>
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
        )
    };
}
export default MouseCard;