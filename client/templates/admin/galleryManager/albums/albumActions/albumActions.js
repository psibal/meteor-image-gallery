Template.albumActions.events({
    'click .add-album': function (e) {
    	e.preventDefault();
    	e.stopPropagation();
    	Meteor.call('createAlbum', function (err, id) { 
			    	if (err) console.log(err);
			    	
			    	if (!! id) {
			    		Router.go( 'albumEdit', {_id: id} );
			    	}
		});
    }
});