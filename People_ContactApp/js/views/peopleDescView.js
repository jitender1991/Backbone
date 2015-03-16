define(['text!peopleDescViewtmpl'],function(peopleDescViewtmpl){
        console.log('fdgdkushjfkog;')
    var peopleDescView =  Backbone.View.extend({
    tagName :'div',
    events :{
        'click .backbutton' : "gotoHomePage"
    },
    template : _.template(peopleDescViewtmpl),
    render :function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    gotoHomePage :function(e){
        this.undelegateEvents() ;
        myrouter.navigate('',{trigger :true});
    }

});
    return peopleDescView;
})