import DS from 'ember-data';

export default DS.Model.extend({
  header: DS.attr('string'),
  answers: DS.attr('string'),
  correct: DS.attr('string'),
  customResponse: DS.attr('string')
});
