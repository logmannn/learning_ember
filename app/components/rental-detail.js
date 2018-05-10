import Component from '@ember/component';

export default Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }  
});
