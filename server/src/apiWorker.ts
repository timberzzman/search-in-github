const got = require('got');

export default class ApiWorker {
  // eslint-disable-next-line class-methods-use-this
  public async getUser(user: String) {
    try {
      const { body } = await got.get(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
        responseType: 'json',
      });

      return body;
    } catch ({ code }) {
      if (code === 'ERR_NON_2XX_3XX_RESPONSE') {
        return null;
      }
    }
    return null;
  }
}
