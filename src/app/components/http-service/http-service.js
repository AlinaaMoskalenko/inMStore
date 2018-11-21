export class HTTPService {
    get(url, successCallBack, errorCallBack) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const parseData = JSON.parse(xhr.response);
                    successCallBack(parseData);
                } else {
                    errorCallBack(xhr);
                }
            }
        }
    }

    post(url, data, successCallBack, errorCallBack) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);

        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send((typeof data !== 'string') ? JSON.stringify(data) : data);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const parseData = JSON.parse(xhr.response);
                    successCallBack(parseData);
                } else {
                    errorCallBack(xhr);
                }
            }
        }
    }

    delete(url, successCallBack, errorCallBack) {
        const xhr = new XMLHttpRequest();
        xhr.open('DELETE', url);

        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const parseData = JSON.parse(xhr.response);
                    successCallBack(parseData);
                } else {
                    errorCallBack(xhr);
                }
            }
        }
    }
}