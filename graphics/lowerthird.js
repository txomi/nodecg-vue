(function() {
'use strict';

const lowerthird = nodecg.Replicant('lowerthird');

nodecg.listenFor('toggleLowerthird', display => {
	graphic.togglePanel(display);
});

lowerthird.on('change', function(newVal) {
	graphic.updateData(newVal);
})

var graphic = new Vue({
	el: '#lowerthird',
	data: function() {
		return {
			isShowing: false,
			title: '',
			text: ''
		}
	},
	created: function() {
		var vm = this
		nodecg.readReplicant('lowerthird', data => {
			vm.title = data.title
			vm.text = data.text
		});	
	},
	methods: {
		togglePanel: function(display) {
			this.isShowing = display
		},
		updateData: function(data) {
			this.title = data.title
			this.text = data.text
		}
	}
});

})();