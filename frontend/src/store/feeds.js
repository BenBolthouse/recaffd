import { fetch } from './csrf';

const SET_SEARCH_FEED = 'feeds/setSearchFeed';
const SET_HOME_FEED = 'feeds/setHomeFeed';

const setHomeFeed = feed => ({
  type: SET_HOME_FEED,
  payload: feed,
});

const setSearchFeed = feed => ({
  type: SET_SEARCH_FEED,
  payload: feed,
});

/**
 * Fetch a list of entities based on some criteria.
 */
export const fetchHomeFeed = predicates => async dispatch => {
  const {
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

  // Simplify tags
  if (res.data.data.feedItems) {
    const { feedItems } = res.data.data;
    feedItems.forEach(item => {
      if(item.tags.length) {
        const tags = item.tags.map(tag => tag.name);
        item.tags = tags;
      }
    })
  }

  dispatch(setHomeFeed(res.data.data));
  return res;
};

const initialState = {
  home: {
    offset: 0,
    limit: 10,
    sortedBy: 'BEST_RATED',
    includeProducts: true,
    includeBusinesses: false,
    includeFavorites: true,
    includeCheckIns: true,
    items: [],
  },
  search: {
    offset: 0,
    limit: 10,
    sortedBy: 'BEST_RATED',
    includeProducts: true,
    includeBusinesses: true,
    includeFavorites: true,
    includeCheckIns: true,
    items: [],
  },
};

function reducer(state = initialState, { type, payload }) {
  let newState;
  switch (type) {
    case SET_HOME_FEED:
      const {
        offset,
        limit,
        sortedBy,
        includeProducts,
        includeBusinesses,
        includeFavorites,
        includeCheckIns,
        feedItems,
      } = payload;
      newState = Object.assign({}, state);
      const items = [...newState.home.items, ...feedItems]
      newState.home = {
        offset,
        limit,
        sortedBy,
        includeProducts,
        includeBusinesses,
        includeFavorites,
        includeCheckIns,
        items,
      }
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
