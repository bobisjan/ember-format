'use strict;'
module.exports = {"locale":"fo","pluralRuleFunction":function (n) {n=Math.floor(n);if(n===1)return"one";return"other";},"fields":{"second":{"displayName":"sekund","relative":{"0":"now"},"relativeTime":{"future":{"other":"+{0} s"},"past":{"other":"-{0} s"}}},"minute":{"displayName":"mínúta","relativeTime":{"future":{"other":"+{0} min"},"past":{"other":"-{0} min"}}},"hour":{"displayName":"klukkustund","relativeTime":{"future":{"other":"+{0} h"},"past":{"other":"-{0} h"}}},"day":{"displayName":"dagur","relative":{"0":"í dag","1":"á morgunn","2":"á yfirmorgunn","-2":"í fyrradag","-1":"í gær"},"relativeTime":{"future":{"other":"+{0} d"},"past":{"other":"-{0} d"}}},"month":{"displayName":"mánuður","relative":{"0":"henda mánuður","1":"næstu mánuður","-1":"síðstu mánuður"},"relativeTime":{"future":{"other":"+{0} m"},"past":{"other":"-{0} m"}}},"year":{"displayName":"ár","relative":{"0":"hetta ár","1":"næstu ár","-1":"síðstu ár"},"relativeTime":{"future":{"other":"+{0} y"},"past":{"other":"-{0} y"}}}}};