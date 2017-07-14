import axios from 'axios';


const helpers = {
    runQuery: (term, start, end) => {

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",{
            params: {
                'api-key': "6db6c6b8202f4c4981d7c14b2e518663",
                'q': term,
                'begin_date': start + "0101",
                'end_date': end + "1231",
                'sort': "newest",
                'fl': "web_url,headline,pub_date",
                'page': 0
            }
        }).then(response => {
            console.log('respponse', response.data.response.docs);
            let title = response.data.response.docs[0].headline.main,
                pubDate = response.data.response.docs[0].pub_date,
                url = response.data.response.docs[0].web_url;
            console.log(title);
            console.log(pubDate);
            console.log(url);

        }).catch(error => {
            console.log('error ' + error);
        })

    }
};

export default helpers;