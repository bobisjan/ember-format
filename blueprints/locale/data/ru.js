'use strict;'
module.exports = {"locale":"ru","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;n=Math.floor(n);if(v===0&&i%10===1&&(i%100!==11))return"one";if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&!(i%100>=12&&i%100<=14))return"few";if(v===0&&(i%10===0||v===0&&(i%10===Math.floor(i%10)&&i%10>=5&&i%10<=9||v===0&&i%100===Math.floor(i%100)&&i%100>=11&&i%100<=14)))return"many";return"other";},"fields":{"era":{"displayName":"Эра"},"year":{"displayName":"Год","relative":{"0":"в этому году","1":"в следующем году","-1":"в прошлом году"},"relativeTime":{"future":{"one":"Через {0} год","few":"Через {0} года","many":"Через {0} лет","other":"Через {0} года"},"past":{"one":"{0} год назад","few":"{0} года назад","many":"{0} лет назад","other":"{0} года назад"}}},"month":{"displayName":"Месяц","relative":{"0":"в этом месяце","1":"в следующем месяце","-1":"в прошлом месяце"},"relativeTime":{"future":{"one":"Через {0} месяц","few":"Через {0} месяца","many":"Через {0} месяцев","other":"Через {0} месяца"},"past":{"one":"{0} месяц назад","few":"{0} месяца назад","many":"{0} месяцев назад","other":"{0} месяца назад"}}},"week":{"displayName":"Неделя","relative":{"0":"на этой неделе","1":"на следующей неделе","-1":"на прошлой неделе"},"relativeTime":{"future":{"one":"Через {0} неделю","few":"Через {0} недели","many":"Через {0} недель","other":"Через {0} недели"},"past":{"one":"{0} неделю назад","few":"{0} недели назад","many":"{0} недель назад","other":"{0} недели назад"}}},"day":{"displayName":"День","relative":{"0":"сегодня","1":"завтра","2":"послезавтра","-2":"позавчера","-1":"вчера"},"relativeTime":{"future":{"one":"Через {0} день","few":"Через {0} дня","many":"Через {0} дней","other":"Через {0} дня"},"past":{"one":"{0} день назад","few":"{0} дня назад","many":"{0} дней назад","other":"{0} дня назад"}}},"weekday":{"displayName":"День недели"},"dayperiod":{"displayName":"ДП\u002FПП"},"hour":{"displayName":"Час","relativeTime":{"future":{"one":"Через {0} час","few":"Через {0} часа","many":"Через {0} часов","other":"Через {0} часа"},"past":{"one":"{0} час назад","few":"{0} часа назад","many":"{0} часов назад","other":"{0} часа назад"}}},"minute":{"displayName":"Минута","relativeTime":{"future":{"one":"Через {0} минуту","few":"Через {0} минуты","many":"Через {0} минут","other":"Через {0} минуты"},"past":{"one":"{0} минуту назад","few":"{0} минуты назад","many":"{0} минут назад","other":"{0} минуты назад"}}},"second":{"displayName":"Секунда","relative":{"0":"сейчас"},"relativeTime":{"future":{"one":"Через {0} секунду","few":"Через {0} секунды","many":"Через {0} секунд","other":"Через {0} секунды"},"past":{"one":"{0} секунду назад","few":"{0} секунды назад","many":"{0} секунд назад","other":"{0} секунды назад"}}},"zone":{"displayName":"Часовой пояс"},"sun":{"relative":{"0":"в это воскресенье","1":"в следующее воскресенье","-1":"в прошлое воскресенье"}},"mon":{"relative":{"0":"в этот понедельник","1":"в следующий понедельник","-1":"в прошлый понедельник"}},"tue":{"relative":{"0":"в этот вторник","1":"в следующий вторник","-1":"в прошлый вторник"}},"wed":{"relative":{"0":"в эту среду","1":"в следующую среду","-1":"в прошлую среду"}},"thu":{"relative":{"0":"в этот четверг","1":"в следующий четверг","-1":"в прошлый четверг"}},"fri":{"relative":{"0":"в эту пятницу","1":"в следующую пятницу","-1":"в прошлую пятницу"}},"sat":{"relative":{"0":"в эту субботу","1":"в следующую субботу","-1":"в прошлую субботу"}}}};