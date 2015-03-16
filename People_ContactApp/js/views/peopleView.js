define(['text!peopleViewtmpl'],function(peopleViewtmpl){
    var peopleView =  Backbone.View.extend({
        tagName :'li',
        events :{
        	'click #delbutton' :'deleteContact'
        },
        deleteContact:function(){
        	alert('inprogress');
        },
        template :_.template(peopleViewtmpl),
        render :function(){
            this.$el.html(this.template(this.model));
            return this;
        }
    });
    return peopleView;   
})