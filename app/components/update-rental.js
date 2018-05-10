import Component from '@ember/component';

export default Component.extend({
  updateRentalForm: false,
  actions: {
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
      };
      this.set('updateRentalForm', false);
      this.sendAction('update', rental, params);
    }
  }
});
