class NewsAPI {
  constructor() {
    this.APIkey = "f8b7fecd16bc48c38a1ac6f2130fae7b";
  }
  //creat url for requd api
  async creatURL(name, country, category) {
    //creat defult first url
    let url = "https://newsapi.org/v2/";
    //
    if (country == "" && category == "") {
      url += "everything?";
    } else {
      url += "top-headlines?";
    }
    //url with quory
    if (name !== "") {
      url += `q=${name}&`;
    }
    ///url with country
    if (country !== "") {
      url += `country=${country}&`;
    }
    //
    if (category !== "") {
      url += `category=${category}&`;
    }
    //
    url += `apiKey=${this.APIkey}`;
    //fetch url
    const newsResponse = await fetch(url);
    //fetch Json
    const news = await newsResponse.json();
    return news;
  }
}
