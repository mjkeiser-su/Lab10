import React from 'react';
import * as axios from 'axios';

export default class TopStories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=33c0af03b6c54f2f8a5d57d205ba81e5')
        .then((res) => {
            this.setState({news: res.data.articles});
        })
    }
    
    render(){
        return(
            <div>
                {this.state.news.map(article => {
                    return (
                        <div class = "row p-5">
                            <div class = "col">
                            <img class ="frontpageimage" src={article.urlToImage}/>
                            </div>
                            <div>
                            <h3 class = "">{article.title}</h3>
                            </div>
                            <div>
                            <div class = "center">{article.description}</div>
                            </div>
                    </div>)
                })}
            </div>
        )
    }
}