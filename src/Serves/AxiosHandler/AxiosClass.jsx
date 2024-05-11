import axios from "axios";

class UltraNetwork {
  constructor() {
    if (!UltraNetwork.instance) {
      this.client = axios.create();
      UltraNetwork.instance = this;
    }
    return UltraNetwork.instance;
  }

  async request(endpoint, { baseUrl, headers, parameters, formData }) {
    try {
      const response = await this.client.request({
        baseURL: baseUrl,
        url: endpoint.path,
        method: endpoint.method,
        params: parameters,
        data: formData,
        headers: headers,
      });
      return this.handleResponse(response);
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
  handleResponse(response) {
    if (response.status >= 200 && response.status < 400) {
      return response.data;
    } else {
      throw new Error("Request failed with status code: " + response.status);
    }
  }
}
// Singleton instance for NetworkRequest
const ultraNetworkInstance = new UltraNetwork();

export { ultraNetworkInstance };
