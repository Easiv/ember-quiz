import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    this.store.findAll('question').then(res=> console.log(res))
    return this.store.findAll('question');
  }
});
