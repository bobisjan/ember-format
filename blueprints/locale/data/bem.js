'use strict;'
module.exports = {"locale":"bem","pluralRuleFunction":function (n) {n=Math.floor(n);if(n===1)return"one";return"other";},"fields":{"second":{"displayName":"Sekondi","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"minute":{"displayName":"Mineti","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"hour":{"displayName":"Insa","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"day":{"displayName":"Ubushiku","relative":{"0":"Lelo","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"month":{"displayName":"Umweshi","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"year":{"displayName":"Umwaka","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}}}};