
   
    //컨텐츠 페이지를 대상으로 코드를 실행해주세요. 
chrome.tabs.executeScript({
    code: 'document.querySelector("body").innerText'
}, function (result) {
    for(i=0; i<result.length; i++){
        result[i].onmouseover = function() {
            var shipping= this.getElementsByClassName("_2CWevj")[0].innerText;
            var item_link = this.querySelector("a").href;
            // console.log(this.getElementsByClassName("_2CWevj")[0].innerText);//이건 콘솔에서만 나타나는거
            // console.log(this.querySelector("a").href);
            alert(shipping);
            document.querySelector('#result').innerText = shipping + ',' + item_link;
        }
    }
});
   
var xhr = new XMLHttpRequest();
var text;
xhr.onreadystatechange = function() {
    if(xhr.readyState==4 && xhr.status==200) {
        text = this.responseText;
    }
}


xhr.open("GET","https://shopee.tw/%F0%9F%94%A5%E5%8F%B0%E7%81%A3%E7%8F%BE%E8%B2%A8%F0%9F%94%A5-10%E5%85%A5-%E5%8F%A3%E7%BD%A9-%E9%9F%93%E7%89%88-KF94-%E9%AD%9A%E5%BD%A2%E5%8F%A3%E7%BD%A9-%E6%88%90%E4%BA%BA%E5%8F%A3%E7%BD%A9-%E9%9F%93%E5%9C%8B%E5%8F%A3%E7%BD%A9-mask-%E7%AB%8B%E9%AB%94%E5%8F%A3%E7%BD%A9-%E9%BB%91%E8%89%B2%E5%8F%A3%E7%BD%A9-%E7%86%94%E5%99%B4%E5%B8%83-i.74016697.4550312591");
// xhr.setRequestHeader("user-agent", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36");
xhr.send();
// const text = "<string>This is my xml</string>"; //API response in XML
var parser = new DOMParser();
var xmlDOM = parser.parseFromString(text,"text/xml");
var value = xmlDOM.getElementsByClassName("SFJkS3");
console.log(value);

//這些是我額外寫的
var result = document.getElementsByClassName("aPKXeO");
var label = -1;// means origin is not mentioned
for (i = 0; i < result.length; i++){
    if (result[i].getElementsByClassName("SFJkS3")[0].innerText == "產地"){
        if (result[i].getElementsByTagName("div")[0].innerText == "中國"){
            label = 0;
        }
        else if (result[i].getElementsByTagName("div")[0].innerText == "台灣"){
            label = 1;
        }
        else{
            label = 2;
        }
        break;
    }
}

console.log(label);


  

