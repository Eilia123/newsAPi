class HtmlUI {
  constructor() {
    this.result = document.querySelector("#result");
    this.div = document.createElement("div");
  }
  //show masseage
  printMassage(masseage, className) {
    this.div.className = className;
    this.div.innerHTML = masseage;
    document.getElementById("masseage").appendChild(this.div);
    submitBtn.disabled = true;
  }
  //remove masseage after 3 secned
  removeMasseage() {
    if (document.querySelector("#masseage div")) {
      setTimeout(() => {
        submitBtn.disabled = false;
        document.querySelector("#masseage div").remove();
      }, 3000);
    }
  }
  //show result in html
  showResult(news) {
    let html = "";
    news.forEach((newsInfo) => {
      html += `
           <div class="col-md-4 md-4">
            <div class="card" style="margin-bottom:40px;">
            <img src="${newsInfo.urlToImage}" class="card-img-top text-center" alt="This news dont have image">
            <div class="card-body">
              <h5 class="card-title">${newsInfo.title}</h5>
              <p class="card-text">${newsInfo.content}</p>
              <h6 class="card-subtitle mb-2 text-body-secondary">${newsInfo.author}</h6>
              <a href="${newsInfo.url}" class="btn btn-primary">complete News</a>
            </div>
          </div>
          </div> 
            
            `;
    });
    //show result after 3 secend
    setTimeout(() => {
      this.result.innerHTML = html;
    }, 3000);
  }
  // rest form after click submit
  restForm() {
    this.result.innerHTML = "";
    form.reset();
  }
  //show spinner
  showSpinner() {
    const spinner = document.createElement("img");
    spinner.src = "../img/1487.gif";
    document.querySelector("#spinner").appendChild(spinner);
    this.removeSpinner();
  }
  //remove spinner after 3 secend
  removeSpinner() {
    if (document.querySelector("#spinner img")) {
      setTimeout(() => {
        document.querySelector("#spinner img").remove();
      }, 3000);
    }
  }
}
