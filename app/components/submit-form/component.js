import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['submit-form'],
  store: service(),
  router: service('-routing'),

  actions: {
    submitForm() {
      let rec = this.store.createRecord('question', {
        title: this.title,
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        correct: this.correct,
        customText: this.customText
      }).save().then(() => {
        console.log('submitted')
      });
    },

    redirect() {
      this.get('router').transitionTo('questions');
    }
  }
});
