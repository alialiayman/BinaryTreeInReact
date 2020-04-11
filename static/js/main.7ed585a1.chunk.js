(this.webpackJsonpalgorithms=this.webpackJsonpalgorithms||[]).push([[0],{53:function(e,t,a){e.exports=a(67)},58:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),C=a.n(n),D=a(14),r=a.n(D),S=(a(58),a(20)),H=a(99),l=a(91),o=a(90),c=a(92),i=Object(H.a)(o.a)({display:"flex",justifyContent:"space-around"}),s=function(e){var t=e.name;return C.a.createElement(S.b,{to:"/"+t.toLowerCase().replace(/ /g,"")},C.a.createElement(c.a,{color:"primary"},t))},u=function(){return C.a.createElement(l.a,{position:"static",color:"transparent"},C.a.createElement(i,null,C.a.createElement(S.b,{to:"/"},C.a.createElement(c.a,null,"Home")),C.a.createElement(s,{name:"Binary Tree"}),C.a.createElement(s,{name:"Algorithms"}),C.a.createElement(s,{name:"Taxes"}),C.a.createElement(s,{name:"Birthdays"}),C.a.createElement(s,{name:"Colors"})))},m=a(15),d=a(44),A=a.n(d),T=a(98),h=a(97),J=a(93),K=a(69),f=a(94),Q=function(e){var t=e.name,a=e.problem,n=e.algorithm,D=e.method,r=e.testCases;return C.a.createElement(T.a,null,C.a.createElement(h.a,{expandIcon:C.a.createElement(A.a,null)},C.a.createElement(c.a,{color:"textPrimary",variant:"h5"},t)),C.a.createElement(J.a,null,C.a.createElement(f.a,{container:!0,spacing:2},C.a.createElement(f.a,{item:!0,xs:12,name:"Problem"},C.a.createElement(K.a,{elevation:3,rounded:!0,style:{padding:"15px"}},C.a.createElement(c.a,{color:"primary",variant:"h6"},"Problem"),C.a.createElement(c.a,{color:"textSecondary",style:{whiteSpace:"pre-line"}},a))),C.a.createElement(f.a,{item:!0,xs:12,name:"Algorithm"},C.a.createElement(K.a,{elevantion:3,style:{padding:"15px"}},C.a.createElement(c.a,{variant:"h6"},"Algorithm"),C.a.createElement(c.a,{variant:"body2",color:"textSecondary",style:{whiteSpace:"pre-line"}},n))),C.a.createElement(f.a,{item:!0,xs:12,name:"Method"},C.a.createElement(K.a,{elevantion:3,style:{padding:"15px"}},C.a.createElement(c.a,{variant:"h6"},"Method"),C.a.createElement(c.a,{variant:"body2",color:"textSecondary",style:{whiteSpace:"pre-line"}},D.toString()))),C.a.createElement(f.a,{item:!0,xs:12,name:"testcases"},C.a.createElement(K.a,{elevantion:3,style:{padding:"15px"}},C.a.createElement(c.a,{variant:"h6"},"Test Cases"),r.map((function(e){return C.a.createElement("div",null,e.toString(),"==> ",D(e).toString())})))))))};var y={name:"Best Trade",problem:"Input is an array of Integers which denotes the stock value of company X.\n\nEx : [1,5,6,7,34,10]\n\nIn this case :\n1 is the stock value of company X on Day 0.\n5 is the stock value of company X on Day 1.\n...\n10 is the stock value of a comany X on Day 5.\n\nYou need to find the day where I can buy the stock and day where I can sell the stock to get the max profit :\n\nIn the above case, If I buy the stock at Day 0 (i.e when the value is 1) and sell on Day 4 (when the value is 34). I get the max profit. Profit = 34-1 = 33. So, the output for the above example should be [0,4] (i.e [buy-day, sell-day])\n\nIf there is a test case in which any profit is not possible, Print [0,0] (i.e: you're buying and selling the stock on the same day)\n\nTest Cases :\n[200, 1,5,6,7,34,10]\n[1,5,6,7,34,10,300]\n[10,1,5,6,7,34,10,20]\n[2,200,1,0,10]\n[7,10]\n[1] //Output: [0,0] You buy and sell on the same day because there's only one number.\n\nIf an emty array or null is passed as an input return [-1,-1].",algorithm:"// loop1 from 0 to end with BuyIndex\n// loop2 from index to end sellIndex\n// declare MaxProfit, BuyDay, SellDay\n// compute profit if greater than MaxProfit, Replace BuyDay,SellDay and overriteMaxProfit",method:function(e){if(!e||0===e.length)return[-1,-1];if(1===e.length)return[0,0];for(var t=0,a=0,n=0,C=0;C<e.length;C++)for(var D=C+1;D<e.length;D++){var r=e[D]-e[C];r>t&&(t=r,a=C,n=D)}return[a,n]},testCases:[[1,5,6,7,34,10],[200,1,5,6,7,34,10],[1,5,6,7,34,10,300],[10,1,5,6,7,34,10,20],[2,200,1,0,10],[7,10],[1]]},p=a(46);var E={name:"Decks",problem:'You\u2019re given an X decks of N playing cards with few cards missing. The playing cards can be in the form of an array and is shuffled in any order:\n\nEg: ["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", \u201cTH"]\n\nwhere: \u2018H\u2019,\u2019S\u2019,\u2019D\u2019,\u2019C\u2019 is Hearts, Spades, Diamonds and Clubs\n\nand \u2018A\u2019,\u20192\u2019,\u20193\u2019,\u20194\u2019,\u20195\u2019,\u20196\u2019,\u20197\u2019,\u20198\u2019,\u20199\u2019,\u2019T\u2019,\u2019J\u2019,\u2019Q\u2019,\u2019K\u2019 is Ace, 2,3\u2026. Ten, Jack, Queen, King respectively.\n\nYou need to find out how many complete decks can be made from the cards you\u2019ve given in the input.\n\nTest Cases:\n\ndecksOfCards(["9C", "KS", "AC", "AH", "8D", "4C", "KD", "JC", "7D", "9D", "2H", "7C", "3C", "7S", "5C", "6H", "TH"]) // Output: 0 (No complete decks in this array)\n\ndecksOfCards(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD"]) // Output: 2 (2 complete decks in this array)\n\ndecksOfCards(["TD", "TC", "6H", "5H", "KC", "JH", "QC", "4S", "2S", "8H", "JD", "2H", "AC", "7D", "6C", "5D", "AD", "TS", "4D", "KH", "3H", "9H", "3S", "2D", "5S", "6S", "AH", "JS", "6D", "9S", "4C", "7C", "8S", "AS", "KD", "7S", "4H", "KS", "7H", "9D", "8D", "3D", "5C", "9C", "QH", "JC", "8C", "TH", "QS", "3C", "QD", "2C"]) // Output: 1\n\ndecksOfCards(["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AH"]) // Output: 2\n\ndecksOfCards(["QC", "6D", "KD", "QS", "7S", "5C", "QH", "3H", "AD", "9C", "7H", "QD", "QH", "2S", "AH", "KS", "5D", "QC", "AS", "2D", "6C", "8C", "7D", "8H", "9S", "4D", "6H", "JC", "3S", "4C", "3C", "7S", "KD", "4H", "5C", "7C", "AS", "3D", "7D", "2H", "8S", "2H", "8D", "9S", "3C", "5H", "KS", "8D", "9H", "TH", "2C", "JH", "6D", "KC", "TS", "6S", "TD", "4S", "8S", "5S", "8H", "TD", "9D", "4H", "6C", "7C", "AC", "JC", "JD", "TS", "KH", "2C", "QD", "JS", "QS", "KH", "8C", "3H", "2D", "2S", "3S", "5H", "4S", "9C", "4D", "6H", "JS", "TH", "9H", "TC", "7H", "JH", "TC", "6S", "AD", "AC", "JD", "4C", "5D", "9D", "KC", "3D"]) // Output: 1\n\ndecksOfCards(["AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "AC", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH"]) // Output: 0',algorithm:"",method:function(e){var t=new Map,a=["A","2","3","4","5","6","7","8","9","T","J","Q","K"];a.forEach((function(e){return t.set(e+"H",0)})),a.forEach((function(e){return t.set(e+"S",0)})),a.forEach((function(e){return t.set(e+"D",0)})),a.forEach((function(e){return t.set(e+"C",0)})),e.forEach((function(e){t.set(e,t.get(e)+1)}));var n=Array.from(t.values());return Math.min.apply(Math,Object(p.a)(n))},testCases:[["9C","KS","AC","AH","8D","4C","KD","JC","7D","9D","2H","7C","3C","7S","5C","6H","TH"],["2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD"],["TD","TC","6H","5H","KC","JH","QC","4S","2S","8H","JD","2H","AC","7D","6C","5D","AD","TS","4D","KH","3H","9H","3S","2D","5S","6S","AH","JS","6D","9S","4C","7C","8S","AS","KD","7S","4H","KS","7H","9D","8D","3D","5C","9C","QH","JC","8C","TH","QS","3C","QD","2C"],["2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","2S","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","AH"],["QC","6D","KD","QS","7S","5C","QH","3H","AD","9C","7H","QD","QH","2S","AH","KS","5D","QC","AS","2D","6C","8C","7D","8H","9S","4D","6H","JC","3S","4C","3C","7S","KD","4H","5C","7C","AS","3D","7D","2H","8S","2H","8D","9S","3C","5H","KS","8D","9H","TH","2C","JH","6D","KC","TS","6S","TD","4S","8S","5S","8H","TD","9D","4H","6C","7C","AC","JC","JD","TS","KH","2C","QD","JS","QS","KH","8C","3H","2D","2S","3S","5H","4S","9C","4D","6H","JS","TH","9H","TC","7H","JH","TC","6S","AD","AC","JD","4C","5D","9D","KC","3D"],["AC","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","AC","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH","AC","2C","2D","2H","3S","3C","3D","3H","4S","4C","4D","4H","5S","5C","5D","5H","6S","6C","6D","6H","7S","7C","7D","7H","8S","8C","8D","8H","9S","9C","9D","9H","TS","TC","TD","TH","JS","JC","JD","JH","QS","QC","QD","QH","KS","KC","KD","KH","AS","AC","AD","AH"]]};var g,b={name:"Flatten Array",problem:"Flatten this array out : [1,2,[3,4,[5,6],7,[8,9]]]\nOutput should be [1,2,3,4,5,6,7,8,9]\n\nYou can ONLY use arr.push(), arr.concat() as library / array functions. Please don't use any other library or array functions.",algorithm:"",method:function e(t,a){return t.forEach((function(t){Array.isArray(t)?e(t,a):(a||(a=[]),a.push(t))})),a},testCases:[[1,2,[3,4,[5,6],7,[8,9]]]]},v=function(){return C.a.createElement(C.a.Fragment,null,C.a.createElement(Q,y),C.a.createElement(Q,E),C.a.createElement(Q,b))},k=a(33),x=a(95),O=Object(H.a)(x.a)({textAlign:"center",borderRadius:"25%"}),w=Object(H.a)(x.a)({fontSize:"1em"}),I=Object(H.a)(x.a)({display:"flex",justifyItems:"center",justifyContent:"center"}),j=Object(H.a)(x.a)({width:"50%",backgroundColor:"yellow"}),N=Object(H.a)(x.a)({width:"50%",backgroundColor:"magenta"}),M=function e(t){var a=t.node;if(!a||!a.key)return null;var n=C.a.createElement(O,null,C.a.createElement(w,null,a.key),C.a.createElement(I,null,C.a.createElement(j,null,a.left&&C.a.createElement(e,{node:a.left})),C.a.createElement(N,null,a.right&&C.a.createElement(e,{node:a.right}))));return C.a.createElement(C.a.Fragment,null,n)},P=a(45),B=(a(66),function(e){var t=e.addNode,a=Object(n.useState)(0),D=Object(k.a)(a,2),r=D[0],S=D[1];return C.a.createElement(C.a.Fragment,null,C.a.createElement("div",{className:"editor-container"},C.a.createElement("label",null,"Value:",C.a.createElement("input",{type:"number",value:r,onChange:function(e){S(e.target.value)}})),C.a.createElement("button",{type:"button",onClick:function(){t(r)}},"Add")))}),F=function(){var e=Object(n.useState)({key:null,left:null,right:null}),t=Object(k.a)(e,2),a=t[0],D=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("rootNode");e&&D(JSON.parse(e))}),[]);return C.a.createElement(C.a.Fragment,null,C.a.createElement(B,{addNode:function(e){(function e(t,a){if(t.key!==a)return null===t.key?(t.key=a,t.left=null,t.right=null,localStorage.setItem("rootNode",JSON.stringify(g)),D(g)):void(parseInt(a)>parseInt(t.key)?(t.right||(t.right={key:null}),e(t.right,a)):(t.left||(t.left={key:null}),e(t.left,a)))})(g=Object(P.cloneDeep)(a),e)}}),C.a.createElement(M,{node:a}))},Y=function(){return C.a.createElement(C.a.Fragment,null,C.a.createElement(u,null),C.a.createElement(m.a,{exact:!0,path:"/",component:null}),C.a.createElement(m.a,{exact:!0,path:"/binarytree",component:F}),C.a.createElement(m.a,{exact:!0,path:"/algorithms",component:v}))};var X=function(){return C.a.createElement(S.a,null,C.a.createElement(Y,null))};r.a.render(C.a.createElement(C.a.StrictMode,null,C.a.createElement(X,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.7ed585a1.chunk.js.map