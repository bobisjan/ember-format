'use strict;'
module.exports = {"locale":"mt","pluralRuleFunction":function (n) {n=Math.floor(n);if(n===1)return"one";if(n===0||n%100===Math.floor(n%100)&&n%100>=2&&n%100<=10)return"few";if(n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19)return"many";return"other";},"fields":{"era":{"displayName":"Epoka"},"year":{"displayName":"Sena","relative":{"0":"Din is-sena","1":"Is-sena d-dieħla","-1":"Is-sena li għaddiet"},"relativeTime":{"past":{"one":"{0} sena ilu","few":"{0} snin ilu","many":"{0} snin ilu","other":"{0} snin ilu"},"future":{"other":"+{0} y"}}},"month":{"displayName":"Xahar","relative":{"0":"Dan ix-xahar","1":"Ix-xahar id-dieħel","-1":"Ix-xahar li għadda"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"week":{"displayName":"Ġimgħa","relative":{"0":"Din il-ġimgħa","1":"Il-ġimgħa d-dieħla","-1":"Il-ġimgħa li għaddiet"},"relativeTime":{"future":{"other":"+{0} w"},"past":{"other":"-{0} w"}}},"day":{"displayName":"Jum","relative":{"0":"Illum","1":"Għada","-1":"Ilbieraħ"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"weekday":{"displayName":"Jum tal-Ġimgħa"},"dayperiod":{"displayName":"QN\u002FWN"},"hour":{"displayName":"Siegħa","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"minute":{"displayName":"Minuta","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"second":{"displayName":"Sekonda","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"zone":{"displayName":"Żona"},"sun":{"relative":{"0":"Dan il-Ħadd","1":"Il-Ħadd li ġej","-1":"Il-Ħadd li għadda"}},"mon":{"relative":{"0":"this Monday","1":"It-Tnejn li ġej","-1":"It-Tnejn li għadda"}},"tue":{"relative":{"0":"this Tuesday","1":"next Tuesday","-1":"last Tuesday"}},"wed":{"relative":{"0":"this Wednesday","1":"next Wednesday","-1":"last Wednesday"}},"thu":{"relative":{"0":"this Thursday","1":"next Thursday","-1":"last Thursday"}},"fri":{"relative":{"0":"this Friday","1":"next Friday","-1":"last Friday"}},"sat":{"relative":{"0":"this Saturday","1":"next Saturday","-1":"last Saturday"}}}};