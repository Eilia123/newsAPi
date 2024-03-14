const htmlUi = new HtmlUI();
const newApi = new NewsAPI();

//variable   show
const form = document.querySelector("#search-news");

//eventlistener
eventlistener();
function eventlistener() {
  document.addEventListener("DOMContentLoaded", () => {
    //check netWork
    if (navigator.onLine) {
    } else {
      htmlUi.printMassage(
        "Your Offline please turn on your network!",
        "alert alert-danger mt-4 text-alian-center"
      );
      setTimeout(() => {
        location.reload();
      }, 2000);
    }
  });
  //event for submit buttom
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //varable for three input
    const name = document.querySelector("#news-name").value;
    const country = document.querySelector("#country").value;
    const category = document.querySelector("#category").value;
    //Validate of filds
    if (name !== "" || country !== "" || category !== "") {
      htmlUi.showSpinner();
      htmlUi.restForm();
      newApi.creatURL(name, country, category).then((news) => {
        const newArray = news.articles;
        if (newArray.length > 0) {
          htmlUi.showResult(newArray);
        } else {
          htmlUi.printMassage(
            "There isnt new with your filtering",
            "alert alert-danger mt-4 text-alian-center"
          );
          htmlUi.removeMasseage();
        }
      });
    } else {
      htmlUi.printMassage(
        "please complete one of filed",
        "alert alert-danger mt-4"
      );
      htmlUi.removeMasseage();
    }
    //
  });
}
