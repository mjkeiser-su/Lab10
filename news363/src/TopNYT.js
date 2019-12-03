import React from 'react';
import * as axios from 'axios';

export default class TopNYT extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?sources=the-new-york-times&pageSize=7&apiKey=33c0af03b6c54f2f8a5d57d205ba81e5')
        .then((res) => {
            this.setState({news: res.data.articles});
        })
    }
    render(){
        return(
            <div class = "">
                <h2>From: The NY Times</h2>
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