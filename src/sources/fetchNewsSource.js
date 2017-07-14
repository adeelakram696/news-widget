import Request from 'superagent';
import { TIMEOUT, APIKEY } from 'utils/constants';

export default function fetchNewsSource(source, sortBy) {
 return new Promise((resolve, reject) => {
      const url = 'https://newsapi.org/v1/articles?source={SOURCE}&sortBy={SORT_BY}&apiKey={API_KEY}'
        .replace('{SOURCE}', source)
        .replace('{SORT_BY}', sortBy)
        .replace('{API_KEY}', APIKEY);
      Request
        .get(url)
        .timeout(TIMEOUT)
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
    });
}
