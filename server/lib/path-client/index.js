import request from 'superagent';

const CLIENT_ID = 'MzVhMzQ4MTEtZWU2Ni00MzczLWE5NTItNTBhYjJlMzE0YTgz';

export default class PathClient {

  constructor(token) {
    this._token = token;
  }

  static authenticate(username, password) {
    const url = 'https://api.path.com/3/user/authenticate';

    const formData = {
      post: JSON.stringify({
        login: username,
        password: password,
        client_id: CLIENT_ID,
        reactivate_user: 1
      })
    };

    return new Promise((resolve, reject) => {
      request
        .post(url)
        .type('form')
        .send(formData)
        .end((err, res) => {
          if (res.ok) {
            resolve(res.body);
          } else {
            reject(err);
          }
        });
    });
  }

  getHomeFeed(limit, newerThan, olderThan) {
    const url = 'https://api.path.com/3/moment/feed/home?';

    return this._getFeed(url, limit, newerThan, olderThan);
  }

  getUserFeed(userId, limit, newerThan, olderThan) {
    const url = 'https://api.path.com/3/moment/feed?';

    return this._getFeed(url, limit, newerThan, olderThan, userId);
  }

  _getFeed(url, limit, newerThan, olderThan, userId) {
    if (limit) {
      url += 'limit=' + limit;
    } else {
      url += 'limit=' + 24;
    }

    url += '&oauth_token=' + this._token;
    url += '&gs=1';

    if (newerThan) {
      url += '&newerThan=' + newerThan;
    }

    if (olderThan) {
      url += '&olderThan=' + olderThan;
    }

    if (userId) {
      url += '&user_id=' + userId;
    }

    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (res.ok) {
            resolve(res.body);
          } else {
            reject(err);
          }
        });
    });
  }

}
