import Ember from 'ember';

//functions so that app template NAV bar isnt shown on some pages
export default Ember.Controller.extend({
   hideNavRoutes: ['products.show'],
    isHiddenNavRoute: Ember.computed('currentRouteName', function(){
      //return true if current route is one of the non nav routes
      return this.get('hideNavRoutes').indexOf(this.get('currentRouteName')) !== -1;
    }),
    actions: {
      click() {
        console.log('clicked');
      }
    }
});
