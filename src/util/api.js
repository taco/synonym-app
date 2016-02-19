import xhr from 'xhr';

export const GET = () => {
    return new Promise((fulfill, reject) => {
        xhr({
            uri: '/api/synonyms',
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }, (error, res, body) => {
            if (res.statusCode !== 200) {
                reject(error);
            }
            else {
                fulfill(JSON.parse(body));
            }
        });
    });
};

export const PUT = definitions => {
    return new Promise((fulfill, reject) => {
        xhr({
            body: JSON.stringify({ definitions }),
            uri: '/api/synonyms',
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            }
        }, (error, res, body) => {
            if (res.statusCode !== 200) {
                reject(error);
            }
            else {
                fulfill(body);
            }
        });
    });
};