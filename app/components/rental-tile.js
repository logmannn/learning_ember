import Component from '@ember/component';

export default Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
     this.set('isImageShowing', false);
   }
  }
});
