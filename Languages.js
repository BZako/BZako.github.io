import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages : [
            {id: 1, value: "Javascript", xp:1.8},
            {id: 1, value: "Css", xp:2},
            {id: 1, value: "Php", xp:0.7},
            {id: 1, value: "Python", xp:0.4}
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.0},
            {id: 1, value: "Bootstrap", xp:2},
            {id: 1, value: "Sass", xp:0.7},
            {id: 1, value: "Material UI", xp:0.4}
        ]
    }
    render() {
        let {languages, frameworks} = this.state;
        return (
                <div className="languagesFrameworks">
                    <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                    
                    />
                    <ProgressBar
                    languages={frameworks}
                    title="frameworks & bibliotheques"
                    className="frameworksDisplay"
                    />
                </div>
                
            
        );
    }
}

export default Languages;