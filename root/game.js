if (typeof RegExpGamp === "undefined") RegExpGame = {};

RegExpGame.Questions = [ 
    {
        "id" : 1, 
        "Text": "Find all words from the following set that contain the letter p followed by any letter other than h.",
        "Samples": [
            {string:"accelerographs", expected:false}, 
            {string:"photograph", expected:false}, 
            {string:"bob", expected:false}, 
            {string:"pelican", expected:true}, 
            {string:"Pacha", expected:true}, 
        ]

    },
    {
        "id" : 2, 
        "Text": "Match all valid UK Post codes.",
        "Samples": [
            {string:"EH12 5HD", expected:true}, 
            {string:"EH12 5HD", expected:true}, 
            {string:"EH125HD", expected:true}, 
            {string:"G24HU", expected:true}, 
            {string:"G2 4HU", expected:true}, 
            {string:"EC4Y 0JP", expected:true}, 
            {string:"bob", expected:false}, 
            {string:"TH3 END", expected:false}, 
            {string:"SIQQ 1ZZ", expected:false}, 

        ]

    },
    {
        "id" : 3, 
        "Text": "Match all urls that resolve to localhost.",
        "Samples": [
            {string:"http://localhost", expected:true}, 
            {string:"http://localhost:8080", expected:true}, 
            {string:"https://127.0.0.1", expected:true}, 
            {string:"http://127.0.0.1:8080", expected:true}, 
            {string:"http://[::1]", expected:true}, 
            {string:"http://notlocal@127.0.0.1", expected:true}, 
            {string:"https://127.45.209.66", expected:true}, 
            {string:"tcp://127.255.255.254", expected:true}, 
            {string:"bob", expected:false}, 
            {string:"http://google.com", expected:false}, 
            {string:"https://google.com", expected:false}, 

        ]

    },
    {
        "id" : 4,
        "Text": "Match all http logs that had an error. The logs have the header text '#Fields: date time s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs(User-Agent) cs(Referer) sc-status sc-substatus sc-win32-status time-taken'",
        "Samples": [
            {string:"#Fields: date time s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs(User-Agent) cs(Referer) sc-status sc-substatus sc-win32-status time-taken", expected:false},
            {string:"2024-04-26 07:28:06 fe80::f524:806f:62a0:d229%8 POST /WebAPI/api/v6.12/Logins/GetLogin - 443 - fe80::f524:806f:62a0:d229%8 - - 200 0 0 35", expected:false},
            {string:"2024-04-26 07:27:59 10.1.10.235 POST /sign-in/ - 443 - 10.0.20.208 Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/124.0.0.0+Safari/537.36 https://vtst-release4/auth/connect/authorize/callback?client_id=7A9E48 302 0 0 1652", expected:false},
            {string:"2024-04-26 07:28:08 10.1.10.235 GET /Styles/Vendors/vendor.css - 443 GLASGOW\RizwanaB 10.0.20.208 Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/124.0.0.0+Safari/537.36 https://vtst-release4/Styles/Core/autorek.css 304 0 0 84", expected:false},
            {string:"2024-04-26 09:43:55 10.1.10.235 GET /Admin/NotificationSenders.aspx - 443 GLASGOW\tonyb 10.0.20.215 Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/124.0.0.0+Safari/537.36 https://vtst-release4/Admin/AdminDefault.aspx 200 0 0 404", expected:false},
            {string:"2024-04-26 09:53:28 fe80::f524:806f:62a0:d229%8 POST /auth/connect/token - 443 7A9E48A8-5C1A-49C8-942B-C8CF961C4667 fe80::f524:806f:62a0:d229%8 - - 401 1 1326 1", expected:true},
            {string:"2024-04-26 09:41:52 10.1.10.235 GET /auth/styles/images/favicon.svg - 443 - 10.0.20.215 Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/124.0.0.0+Safari/537.36 https://vtst-release4/auth/home/error?errorId=CfDJ8AewzHt 404 0 0 46", expected:true},
            {string:"2024-04-26 07:28:58 10.1.10.235 GET /serviceworker.js - 443 GLASGOW\RizwanaB 10.0.20.208 Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64)+AppleWebKit/537.36+(KHTML,+like+Gecko)+Chrome/124.0.0.0+Safari/537.36 https://vtst-release4/serviceworker.js 500 0 0 71", expected:true},
            {string:"bob", expected:false}, 
        ]
 
    },
    {
        "id" : 5,
        "Text": "Match all lines that have just 5 columns in these csv files",
        "Samples": [
            {string:"1,2,3,4,5", expected:true},
            {string:"a,b,c,d,e", expected:true},
            {string:"col a,col b,col c,col d,col e", expected:true},
            {string:"\"col a\",\"col b\",\"col c\",\"col d\",\"col e\"", expected:true},
            {string:"1,\"col b\",\"3\",\"col d\",5", expected:true},
            {string:"1,\"col,b\",\"3\",\"col,d\",5", expected:true},
            {string:"1,\"col b\",\"3\",\"cold\",5", expected:true},
            {string:"1,\"col,b\",\"3\",\",\"\"col,d\"\"\",5", expected:true},
            {string:"1,\"\"\"col,b\",\"3\",\",\"\"col,d\",5", expected:true},
            {string:"bob", expected:false}, 
            {string:"1,2,3,4", expected:false},
            {string:"1,2,3,4,5,6", expected:false},
            {string:"1,\"\"col,b\",\"3\",\"col,d\",5", expected:false},
        ]
    }

];

RegExpGame.CurrentQuestion = 0;
RegExpGame.Results = [];

RegExpGame.board = void 0;
RegExpGame.input = void 0;
RegExpGame.list = void 0;
RegExpGame.resultlist = void 0;
RegExpGame.evaluate = void 0;
RegExpGame.skip = void 0;
RegExpGame.hint = void 0;
RegExpGame.prompt = void 0;

RegExpGame.StartGame = function() {
    RegExpGame.board = document.getElementById("gameboard");
    RegExpGame.input = document.getElementById("regexinput");
    RegExpGame.list = document.getElementById("sample-list");
    RegExpGame.resultlist = document.getElementById("result-list");
    RegExpGame.evaluate = document.getElementById("check");
    RegExpGame.skip = document.getElementById("skip");
	RegExpGame.hint = document.getElementById("hint");
    RegExpGame.prompt = document.getElementById("prompt");

    RegExpGame.evaluate.addEventListener("click", RegExpGame.Evaluate);
    RegExpGame.skip.addEventListener("click", RegExpGame.NextQ);
    RegExpGame.hint.addEventListener("click", RegExpGame.ShowHint);
    RegExpGame.DoQuestion(0);
}
RegExpGame.ShowHint = function() {
    let samples = document.querySelectorAll(".sample");
	samples.forEach(s=>{
		if(s.dataset.expectedResult === "true") s.classList.add("correct")
	});
}
RegExpGame.NextQ = function(q) {
    RegExpGame.DoQuestion(RegExpGame.CurrentQuestion + 1)
    if(RegExpGame.CurrentQuestion >= RegExpGame.Questions.length) RegExpGame.skip.enabled=false;
}
RegExpGame.DoQuestion = function(q) {
    console.log(q);
    RegExpGame.CurrentQuestion = q;
    RegExpGame.list.innerHTML = "";
    
    nextQ = RegExpGame.Questions[q];
    RegExpGame.prompt.innerText = nextQ.Text;
    nextQ.Samples.forEach(nq => { 
        let sample = document.createElement('li');
        console.log(nq);
        sample.dataset.expectedResult = nq.expected;
        sample.classList.add("sample");
        sample.appendChild(document.createTextNode(nq.string));
        RegExpGame.list.appendChild(sample)
    });
}

RegExpGame.Evaluate = function() {
    let samples = document.querySelectorAll(".sample")
    let pattern = new RegExp(RegExpGame.input.value);
    let correct = 0;
    let total = 0;
    samples.forEach(s=>{
        total++;
        if(s.dataset.expectedResult == pattern.test(s.innerText).toString()){
            s.classList.add("passed");
            s.classList.remove("failed");
            correct++
        }
        else{
            s.classList.add("failed");
            s.classList.remove("passed");
        }
    });

    var cap = `Senario ${RegExpGame.CurrentQuestion + 1}: ${correct} out of ${total}`;
    var res = document.createElement("li")
    res.appendChild(document.createTextNode(cap));
    if(correct === total) res.classList.add("passed");
    else res.classList.add("failed");
    RegExpGame.resultlist.appendChild(res);
}


RegExpGame.StartGame();
