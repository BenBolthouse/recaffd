import { fetch } from './csrf';

const SET_HOME_FEED = 'feeds/setHomeFeed';
const RESET_HOME_FEED = 'feeds/resetHomeFeed';

const initialState = {
  home: {
    offset: 0,
    limit: 10,
    sortedBy: 'RATING_DESC',
    includeProducts: true,
    includeBusinesses: false,
    includeFavorites: true,
    includeCheckIns: true,
    items: [],
  },
};

const fetchHomeFeed = async state => {
  const {
    offset,
    limit,
    sortedBy,
    includeBusinesses,
    includeProducts,
    includeFavorites,
    includeCheckIns,
  } = state;

  let urlQuery = '/api/feeds?offset=' + offset + '&limit=' + limit + '&sortedBy=' + sortedBy;
  includeBusinesses && (urlQuery += '&includeBusinesses=true');
  includeProducts && (urlQuery += '&includeProducts=true');
  includeFavorites && (urlQuery += '&includeFavorites=true');
  includeCheckIns && (urlQuery += '&includeCheckIns=true');

  return await fetch(urlQuery);
};

const setHomeFeedAction = state => ({
  type: SET_HOME_FEED,
  payload: state,
});

const resetHomeFeedAction = (state) => ({
  type: RESET_HOME_FEED,
  payload: state,
});

const simplifyTags = feedItems => {
  feedItems.forEach(item => {
    if (item.tags.length) {
      const tags = item.tags.map(tag => tag.name);
      item.tags = tags;
    }
  });
};

/**
 * Fetch a list of entities based on some criteria.
 */
export const setHomeFeed = state => async dispatch => {
  const res = await fetchHomeFeed(state);
  const { data } = res.data;
  simplifyTags(data.feedItems);
  dispatch(setHomeFeedAction(data));
  return res;
};

export const resetHomeFeed = state => async dispatch => {
  const res = await fetchHomeFeed(state);
  const { data } = res.data;
  simplifyTags(data.feedItems);
  dispatch(resetHomeFeedAction(data));
  return res;
};

function reducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case SET_HOME_FEED:
      newState = Object.assign({}, state);
      newState.home.appendCount = state.appendCount + 1;
      newState.home.limit = payload.limit;
      newState.home.offset = payload.offset;
      newState.home.sortedBy = payload.sortedBy;
      newState.home.includeBusinesses = payload.includeBusinesses;
      newState.home.includeProducts = payload.includeProducts;
      newState.home.items = [...newState.home.items, ...payload.feedItems];
      return newState;
    case RESET_HOME_FEED:
      newState = Object.assign({}, state);
      newState.home.appendCount = state.appendCount + 1;
      newState.home.limit = payload.limit;
      newState.home.offset = payload.offset;
      newState.home.sortedBy = payload.sortedBy;
      newState.home.includeBusinesses = payload.includeBusinesses;
      newState.home.includeProducts = payload.includeProducts;
      newState.home.items = [...payload.feedItems];
      return newState;
    default:
      return state;
  }
}

export default reducer;
