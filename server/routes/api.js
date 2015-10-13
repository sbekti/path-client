import express from 'express';
import PathClient from '../lib/path-client';

const router = express.Router();

router.post('/authenticate', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  PathClient
    .authenticate(username, password)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/feed/home', (req, res) => {
  const token = req.query.token;
  const limit = req.query.limit;
  const newerThan = req.query.newer_than;
  const olderThan = req.query.older_than;

  const pathClient = new PathClient(token);

  pathClient.getHomeFeed(limit, newerThan, olderThan)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get('/feed/user', (req, res) => {
  const token = req.query.token;
  const userId = req.query.user_id;
  const limit = req.query.limit;
  const newerThan = req.query.newer_than;
  const olderThan = req.query.older_than;

  const pathClient = new PathClient(token);

  pathClient.getUserFeed(userId, limit, newerThan, olderThan)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

export default router;
