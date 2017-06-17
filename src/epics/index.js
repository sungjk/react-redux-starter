import { combineEpics } from 'redux-observable';
import searchUsers from './searchUsers';
import clearSearchResults from './clearSearchResults';
import fetchReposByUser from './fetchReposByUser';

export default combineEpics(
  searchUsers,
  clearSearchResults,
  fetchReposByUser,
);
