var ReviewModel = Backbone.Model.extend({
	defaults: function() {
		return {
			id: '',
			comments: '',
			score: 0
		}
	}
});