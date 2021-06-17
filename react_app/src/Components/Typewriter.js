import React, { Component } from "react";

// Type-writer Effect
class Typewriter extends Component {
    constructor(props) {
        super(props);
        this.newTextDelay = 1000; // Delay between current and next text
        this.text = ["Welcome to the official site of RUDRA", "We Serve, We Protect"];
        this.charIndex = 0;
        this.textIndex = 0;
        this.timer = undefined;
        this.type = true;
        this.state = {
            dispText: "",
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.typer, 200);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    delay = ms =>
        new Promise(res => setTimeout(res, ms));

    typer = async () => {
        // console.log(this.state.dispText);
        if (this.charIndex >= this.text[this.textIndex].length) {
            this.type = false;
            await this.delay(this.newTextDelay)

        }
        if (this.charIndex <= 0) {
            this.type = true;
            await this.delay(this.newTextDelay);
            this.textIndex = (this.textIndex + 1) % 2;
        }
        if (this.type) {
            this.charIndex++;
            clearTimeout(this.timer);
            this.timer = setTimeout(this.typer, 120);
        }
        else {
            this.charIndex--;
            clearTimeout(this.timer);
            this.timer = setTimeout(this.typer, 100);
        }
        this.setState({ dispText: this.text[this.textIndex].slice(0, this.charIndex) })
    }


    render() {
        return (
            <p><span className="typed-text">
                {this.state.dispText}
            </span>
                <span className="cursor" ref={this.cursorSpan}>&nbsp;</span>
            </p >
        );
    }
}

export default Typewriter;