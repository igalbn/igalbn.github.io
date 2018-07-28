console.log("hi");

let SITE_NAME = 0;  //index in array

let searchWord = "";

drawSearchIcons();

function drawSearchIcons() {
    let stringEngineLinkHtml;

 for (let i = 0; i < enginesArray.length; i++) {
    console.log(enginesArray[i][SITE_NAME]);
   
    stringEngineLinkHtml = '<a href="' + enginesArray[i][1][0] + '">' + '<img src="images/icons/'+ enginesArray[i][1][1] + '" alt="b"></a>';

    $("#adv-search-div1").append(stringEngineLinkHtml);
    console.log(stringEngineLinkHtml);
 }
}

function openAll() {
    for (let i = 0; i < enginesArray.length; i++) {
      window.open(enginesArray[i][1][0],enginesArray[i][SITE_NAME]);
    }
}

function performSearch() {
    //search-images-input1
    searchWord = $("#search-images-input1").val();
    console.log(searchWord);
    var forCheck ="";
    forCheck = 'https://www.google.com/search?tbm=isch&q=' + searchWord;
    window.open(forCheck,"Google");
    forCheck = 'https://www.bing.com/images/search?q=' + searchWord;
    window.open(forCheck,"Bing");    
    forCheck = 'https://search.aol.com/aol/image?query=' + searchWord;
    window.open(forCheck,"Aol");
    forCheck = 'https://yandex.ru/images/search?text=' + searchWord;
    window.open(forCheck,"Yandex");
    forCheck = 'https://duckduckgo.com/?q=' + searchWord + '&iax=images&ia=images';
    window.open(forCheck,"DuckDuckGo");
}