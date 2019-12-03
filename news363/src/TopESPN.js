import React from 'react';
import * as axios from 'axios';

export default class TopESPN extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=33c0af03b6c54f2f8a5d57d205ba81e5')
        .then((res) => {
            this.setState({news: res.data.articles});
        })
    }
    render(){
        return(
            <div class = "bar">
                <h2>From: ESPN</h2>
                {this.state.news.map(article => {
                    return (
                        <div class = "text-left">{article.title}
                        <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}