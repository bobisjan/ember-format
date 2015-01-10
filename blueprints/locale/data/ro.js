'use strict;'
module.exports = {"locale":"ro","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;n=Math.floor(n);if(i===1&&v===0)return"one";if((v!==0)||n===0||(n!==1)&&n%100===Math.floor(n%100)&&n%100>=1&&n%100<=19)return"few";return"other";},"fields":{"second":{"displayName":"secundă","relative":{"0":"acum"},"relativeTime":{"future":{"one":"Peste {0} secundă","few":"Peste {0} secunde","other":"Peste {0} de secunde"},"past":{"one":"Acum {0} secundă","few":"Acum {0} secunde","other":"Acum {0} de secunde"}}},"minute":{"displayName":"minut","relativeTime":{"future":{"one":"Peste {0} minut","few":"Peste {0} minute","other":"Peste {0} de minute"},"past":{"one":"Acum {0} minut","few":"Acum {0} minute","other":"Acum {0} de minute"}}},"hour":{"displayName":"oră","relativeTime":{"future":{"one":"Peste {0} oră","few":"Peste {0} ore","other":"Peste {0} de ore"},"past":{"one":"Acum {0} oră","few":"Acum {0} ore","other":"Acum {0} de ore"}}},"day":{"displayName":"zi","relative":{"0":"azi","1":"mâine","2":"poimâine","-2":"alaltăieri","-1":"ieri"},"relativeTime":{"future":{"one":"Peste {0} zi","few":"Peste {0} zile","other":"Peste {0} de zile"},"past":{"one":"Acum {0} zi","few":"Acum {0} zile","other":"Acum {0} de zile"}}},"month":{"displayName":"lună","relative":{"0":"luna aceasta","1":"luna viitoare","-1":"luna trecută"},"relativeTime":{"future":{"one":"Peste {0} lună","few":"Peste {0} luni","other":"Peste {0} de luni"},"past":{"one":"Acum {0} lună","few":"Acum {0} luni","other":"Acum {0} de luni"}}},"year":{"displayName":"an","relative":{"0":"anul acesta","1":"anul viitor","-1":"anul trecut"},"relativeTime":{"future":{"one":"Peste {0} an","few":"Peste {0} ani","other":"Peste {0} de ani"},"past":{"one":"Acum {0} an","few":"Acum {0} ani","other":"Acum {0} de ani"}}}}};