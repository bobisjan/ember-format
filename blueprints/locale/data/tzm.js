'use strict;'
module.exports = {"locale":"tzm","pluralRuleFunction":function (n) {n=Math.floor(n);if(n===Math.floor(n)&&n>=0&&n<=1||n===Math.floor(n)&&n>=11&&n<=99)return"one";return"other";},"fields":{"era":{"displayName":"Tallit"},"year":{"displayName":"Asseggas","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}},"month":{"displayName":"Ayur","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"week":{"displayName":"Imalass","relative":{"0":"this week","1":"next week","-1":"last week"},"relativeTime":{"future":{"other":"+{0} w"},"past":{"other":"-{0} w"}}},"day":{"displayName":"Ass","relative":{"0":"Assa","1":"Asekka","-1":"Assenaṭ"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"weekday":{"displayName":"Ass n Imalass"},"dayperiod":{"displayName":"Zdat azal\u002FDeffir azal"},"hour":{"displayName":"Tasragt","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"minute":{"displayName":"Tusdat","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"second":{"displayName":"Tusnat","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"zone":{"displayName":"Aseglem asergan"},"sun":{"relative":{"0":"this Sunday","1":"next Sunday","-1":"last Sunday"}},"mon":{"relative":{"0":"this Monday","1":"next Monday","-1":"last Monday"}},"tue":{"relative":{"0":"this Tuesday","1":"next Tuesday","-1":"last Tuesday"}},"wed":{"relative":{"0":"this Wednesday","1":"next Wednesday","-1":"last Wednesday"}},"thu":{"relative":{"0":"this Thursday","1":"next Thursday","-1":"last Thursday"}},"fri":{"relative":{"0":"this Friday","1":"next Friday","-1":"last Friday"}},"sat":{"relative":{"0":"this Saturday","1":"next Saturday","-1":"last Saturday"}}}};