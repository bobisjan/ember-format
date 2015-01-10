'use strict;'
module.exports = {"locale":"lag","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n));n=Math.floor(n);if(n===0)return"zero";if((i===0||i===1)&&(n!==0))return"one";return"other";},"fields":{"second":{"displayName":"Sekúunde","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"minute":{"displayName":"Dakíka","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"hour":{"displayName":"Sáa","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"day":{"displayName":"Sikʉ","relative":{"0":"Isikʉ","1":"Lamʉtoondo","-1":"Niijo"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"month":{"displayName":"Mweéri","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"year":{"displayName":"Mwaáka","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}}}};