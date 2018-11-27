import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['main-display'],
  store: service(),

  actions: {
    loadQuestion() {
      return this.store.findAll('question')
    },

    createQuestion() {
      let question = this.store.createRecord('question', {
        header: 'what does color green look like',
        answers: [{a: 'good'}, {b: 'cool'}, {c: 'terrible'}, {d: 'dupa'}],
        correct: 'b',
        customResponse: 'how could u not know it'
      });
      question.save().then(() => console.log('good')).catch(e => console.log(e));
    }
  }
});
