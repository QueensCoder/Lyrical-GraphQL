//deals with push all issue so you can now update title
const mongoose = require('mongoose');
mongoose.plugin(schema => {
  schema.options.usePushEach = true;
});

require('./song');
require('./lyric');
