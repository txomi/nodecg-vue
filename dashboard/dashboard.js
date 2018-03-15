(function() {
	'use strict';

	Vue.use(Vuetify);

	// we setup the root instance with vuetify required markup,
	// our panel html in a x-template script and our panel as a vue component
	var app =	new Vue({
		el: '#app',
		template:`
			<v-app light>
				<v-container fluid>
					<v-layout row wrap align-center>
						<dashboard/>
					</v-layout>
				</v-container>
			</v-app>`
	});

	// example component
	/*
		Vue.component('dashboard', {
			template: '#dashboard',
			data: function() {
				return {}
			},
			methods: {
				foo: function() {}
			}
		})
	*/
})();