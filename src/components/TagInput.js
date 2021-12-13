import React from "react";
import '../styles/TagInput.css'

class TagInput extends React.Component {

    constructor() {
        super();
        this.state = {
            tags: [
                'JavaScript', 'Python'
            ]
        }
    }

    removeTag = (i) => {
        const addTags = [ ...this.state.tags ];
        addTags.splice(i, 1);
        this.setState({ tags: addTags });
    }

    keyDownHandler = (e) => {
        const value = e.target.value;
        if(e.key == 'Enter' && value) {
            if (this.state.tags.find(tag => tag.toLowerCase() == value.toLowerCase())) return;
            this.setState({tags: [...this.state.tags, value]});
            this.input_value.value = null;
        } else if (e.key == 'Backspace' && !value) {
            this.removeTag(this.state.tags.length-1);
        }
    }

    render() {
        const { tags } = this.state;

        return (
            <div>
                <ul>
                    <li>
                        <input type="text" onKeyDown={this.keyDownHandler} ref={c => { this.input_value = c; }} />
                    </li>
                    {
                        tags.map((tag, i) => (
                            <li key = {tag}>
                                {tag}
                            <button className="Tag" type="button" onClick={() => { this.removeTag(i); }}>*</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default TagInput;
