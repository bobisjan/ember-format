import registerHelper from './register-helper';

import formatHelper from './helpers/format';
import formatDateHelper from './helpers/format-date';
import formatMessageHelper from './helpers/format-message';
import formatNumberHelper from './helpers/format-number';
import formatRelativeHelper from './helpers/format-relative';

export function registerFormatHelpers(/*container, application*/) {
  registerHelper('format', formatHelper);
  registerHelper('format-date', formatDateHelper);
  registerHelper('format-message', formatMessageHelper);
  registerHelper('format-number', formatNumberHelper);
  registerHelper('format-relative', formatRelativeHelper);
}
