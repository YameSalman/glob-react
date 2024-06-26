import { ultraNetworkInstance } from "../../Serves/AxiosHandler/AxiosClass";
import UltraEndpoints from "../../Serves/AxiosHandler/AxiosEndPoints";

let instance = null;
class NewsService {
  //"6510db02e5f24401b3c97e5f8f9f72d6";
  //"d0380fca8de8409a8f944640852ce786"
  static apiKey = "6510db02e5f24401b3c97e5f8f9f72d6";
  constructor() {
    // Ensure only one instance is created
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  static fetchNewsData = async (searchCategory) => {
    const parm = { q: searchCategory };
    return await ultraNetworkInstance.request(UltraEndpoints.getNews, {
      headers: { "x-api-key": this.apiKey },
      parameters: parm,
    });
  };
}

export { NewsService };
