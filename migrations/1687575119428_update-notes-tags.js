/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.alterColumn('notes', 'tags', { type: 'TEXT[]', using: 'tags::TEXT[]' });
};

exports.down = (pgm) => {};
