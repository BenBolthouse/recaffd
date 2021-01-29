import { fetch } from './csrf';

const SEARCH = 'search';
const VIEW = 'view';
const APPEND_VIEW = 'appendToView';

const SET_SEARCH_FEED = 'feeds/setSearchFeed';
const SET_VIEW_FEED = 'feeds/setViewFeed';
const APPEND_VIEW_FEED = 'feeds/appendViewFeed';

const setViewFeed = feed => ({
  type: SET_VIEW_FEED,
  payload: feed,
});

const setSearchFeed = feed => ({
  type: SET_SEARCH_FEED,
  payload: feed,
});

/**
 * Fetch a list of entities based on some criteria.
 */
export const fetchCustomFeed = predicates => async dispatch => {
  const {
    location,
    offset,
    limit,
    sortedBy,
    includeProducts,
    includeBusinesses,
    includeFavorites,
    includeCheckIns,
  } = predicates;

  let urlQuery = '/api/feeds?offset=' + offset + '&limit=' + limit + '&sortedBy=' + sortedBy;
  includeBusinesses && (urlQuery += '&includeBusinesses=true');
  includeProducts && (urlQuery += '&includeProducts=true');
  includeFavorites && (urlQuery += '&includeFavorites=true');
  includeCheckIns && (urlQuery += '&includeCheckIns=true');

  const res = await fetch(urlQuery);

  switch (location) {
    case VIEW:
      dispatch(setViewFeed(res.data.data));
      break;
    case SEARCH:
      dispatch(setSearchFeed(res.data.data));
      break;
  }
  return res;
};

const initialState = {
  view: [],
  search: [],
};

function reducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case SET_VIEW_FEED:
      newState = Object.assign({}, state);
      newState.view = [...newState.view, ...payload];
      return newState;
    case SET_SEARCH_FEED:
      newState = Object.assign({}, state);
      newState.search.push(...payload);
      return newState;
    default:
      return state;
  }
}

export default reducer;
