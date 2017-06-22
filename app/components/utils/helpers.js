import axios from 'axios';


export const helpers = {
    runQuery: (term, start, end) => {

        axios.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': "6db6c6b8202f4c4981d7c14b2e518663",
                'q': term,
                'begin_date': start + "0101",
                'end_date': end + "1231",
                'sort': "newest",
                'fl': "web_url,headline,pub_date",
                'page': 0
            },
        }, function (err, response, body) {
            body = JSON.parse(body);
            return body;
        });

    }
};