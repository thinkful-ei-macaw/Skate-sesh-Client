import TokenService from '../services/token-service';
import config from '../config';

const SkatelogsApiService = {
  getSkateLogs() {
    return fetch(`${config.API_ENDPOINT}/skatelogs`, {
      headers: {

      },
    })
      .then(res => (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  },
  getSkateLogs(seshId) {
    return fetch(`${config.API_ENDPOINT}/skatelogs/${seshId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default SkatelogsApiService;