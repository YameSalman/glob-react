class UltraEndpoints {
  static baseUrl = "https://api.tomorrow.io/v4";
  static newsBaseUrl = "https://newsapi.org/v2";
  static weatherCurrent = "http://api.weatherapi.com/v1";
  static carBaseUrl = "https://freetestapi.com/api/v1";
  // Timelines

  static getTimelines = {
    path: "/timelines",
    method: { name: "get" },
  };

  static getWeatherCurrent = {
    path: "/forecast.json",
    method: "get",
  };

  // News
  static getNews = {
    path: `${this.newsBaseUrl}/everything`,
    method: "get",
  };

  static getCars = {
    path: `${this.carBaseUrl}/cars`,
    method: "get",
  };
}

export default UltraEndpoints;
