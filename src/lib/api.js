import axios from 'axios';
import qs from "qs";

export default axios.create({
  baseURL: 'https://api.github.com'
});

export const Api = () => {

  const accessToken = Api.store.getState().api.accessToken;
  const dispatch = Api.store.dispatch;
  const instance = axios.create({
    baseURL: "https://www.christianaugustyn.me/ajax/"
  });

  return {
    get: function(url, options) {
      if(typeof options === "undefined") {
        options = {};
      }

      if(typeof options.params === "undefined") {
        options.params = {};
      }

      options.params.access_token = accessToken;
      return instance.get(url, options);
    },
    post: function(url, data, options) {
      if(typeof options === "undefined") {
        options = {};
      }

      if(typeof options.params === "undefined") {
        options.params = {};
      }

      options.params.access_token = accessToken;
      return instance.post(url, data, options);
    },
    fetchUser: async function() {
      const resp = await Api().post('/user/fetch_user');

      if(resp.data.result && resp.data.result.user && resp.data.result.company) {
        dispatch({type: 'SET_SESSION', payload: resp.data.result});
      } else {
        dispatch({type: 'SET_SESSION_LOGOUT', payload: null});
      }
    },
    fetchCart: async function() {
      const resp = await Api().get('/cart/get_items');
      dispatch({type: 'SET_CART_ITEMS', payload: resp.data.result});
      return true;
    },
    addItemToCart: async function(offerId, quantity) {
      const resp = await Api().post('/cart/add_item', {offer_id: offerId, quantity: quantity});
      return true;
    }
  }
  return instance;
}
Api.store = undefined;

/**
 * Get full Strapi URL from path
 * @param {string} path Path of the URL
 * @returns {string} Full Strapi URL
 */
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {Object} options Options passed to fetch
 * @returns Parsed API call response
 */
export async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`;

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions);

  // Handle response
  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }
  const data = await response.json();
  return data;
}


// Helper to make GET requests to Strapi
// export async function fetchAPI(path) {
//   const requestUrl = getStrapiURL(path);
//   const response = await fetch(requestUrl);
//   const data = await response.json();
//   return data;
// }

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getProducts() {
  const products = await fetchAPI("/products");
  return products;
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}

export async function getProjects() {
  const projects = await fetchAPI('/')
  return projects?.[0]
}