'use strict';

module.exports = function (nodecg) {
	// We define a custom replicant to hold the variables
	// that can be edited in the dashboard panel and then
	// displayed in our overlay

	const panelReplicant = nodecg.Replicant('lowerthird', {
		// if you want to keep the data for another session
		// or simply store it, you would change persistent to true
		// and it will be saved by nodecg in nodecg/db/{bundlename}/{replicant_name}.db
		persistent: false,
		defaultValue: {
			title: 'Overlay Title',
			text: 'Some text'
		}
	});
}