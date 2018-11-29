import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  a: DS.attr('string'),
  b: DS.attr('string'),
  c: DS.attr('string'),
  d: DS.attr('string'),
  correct: DS.attr('string'),
  customText: DS.attr('string')
});
