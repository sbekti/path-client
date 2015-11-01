# path-client
An unofficial Path API and web client.

## Installation

```
git clone https://github.com/sbekti/path-client.git
npm install
npm start
```

Open your REST API browser (e.g. Postman) at `http://localhost:5000`.

## REST APIs

### Authentication
```
POST /api/v1/authenticate
```

Send your credentials as a JSON on the request body. Don't forget to use `Content-Type: application/json`.

```json
{
  "username": "your_login_email_address",
  "password": "your_password"
}
```

You will get a JSON containing your `oauth_token`. This token will be used to access the other APIs.

### Home Feed
```
GET /api/v1/feed/home
```

Parameters:

| Query Parameter | Remarks  |
| ------------- |-------------|
| `oauth_token`    | Your `oauth_token` from `/api/v1/authenticate`.  |
| `limit`      | Limit the number of returned posts. If not specified, the default value is `24`. |
| `newer_than` | Only return posts that are newer than the specified timestamp. Must be a valid UNIX timestamp in seconds. May contain milliseconds up to 6 decimal points. |
| `older_than` | Only return posts that are older than the specified timestamp. Must be a valid UNIX timestamp in seconds. May contain milliseconds up to 6 decimal points. |

### User Feed
```
GET /api/v1/feed/user
```

Parameters:

| Query Parameter | Remarks  |
| ------------- |-------------|
| `oauth_token`    | Your `oauth_token` from `/api/v1/authenticate`.  |
| `user_id`    | The `user_id` of the target user.  |
| `limit`      | Limit the number of returned posts. If not specified, the default value is `24`. |
| `newer_than` | Only return posts that are newer than the specified timestamp. Must be a valid UNIX timestamp in seconds. May contain milliseconds up to 6 decimal points. |
| `older_than` | Only return posts that are older than the specified timestamp. Must be a valid UNIX timestamp in seconds. May contain milliseconds up to 6 decimal points. |

### Location Update (Arrived In)
```
GET /api/v1/location/update
```

Parameters:

| Query Parameter | Remarks  |
| ------------- |-------------|
| `oauth_token`    | Your `oauth_token` from `/api/v1/authenticate`.  |
| `lat`    | Latitude up to 6 decimal points.  |
| `lng`      | Longitude up to 6 decimal points. |
| `accuracy` | Accuracy in unknown units. Just put 16.0 to be safe. |
| `elevation` | Elevation in meters. Use 1 decimal point (e.g. 0.0). |


This project is not complete yet!
