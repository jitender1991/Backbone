define(['text!addContacttmpl'],function(addContacttmpl){
	console.log('fdgdkushjfkog;')
	var createContactView = Backbone.View.extend({
		initialize:function(){
			this.render();
		},
		el:'body',
		events:{
			'click #savebutton' :'saveContact',
			'click #cancelbutton' :'gotoHomePage'
		},
		render:function(){
			this.$el.html(addContacttmpl);
		},
		saveContact:function(){
			alert('inprocess');
		},
		gotoHomePage:function(){
			 this.undelegateEvents() ;
			 myrouter.navigate('',{trigger :true});
		}

	});	
	return createContactView;

});