(function() {
'use strict';

const lowerthird = nodecg.Replicant('lowerthird');

Vue.component('dashboard', {
	template: '#dashboard',
	data: function() {
		return {
			isShowing: false,
			title: '',
			text: ''
		}
	},
	created: function() {
		var vm = this
		// We populate the form fields with the defaults values
		// defined in the extension file using readReplicant 
		nodecg.readReplicant('lowerthird', defaults => {
			vm.title = defaults.title
			vm.text = defaults.text
		});
	},
	methods: {
    togglePanel: function() {
			this.isShowing = !this.isShowing
			// We send a message to toggle the panel,
			// we'll define a listener in the overlay graphic.
			nodecg.sendMessage('toggleLowerthird', this.isShowing);
		},
		saveData: function() {
			// Instead of sending a message, we could also modify the values in here and
			// then we would need to declare a listener for the 'change' event
			lowerthird.value.title = this.title
			lowerthird.value.text = this.text			
		}
  }
})

})();