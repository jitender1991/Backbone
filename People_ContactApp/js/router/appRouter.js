define(['mainView','peopleDescView','createContactView'],function(mainView,peopleDescView,createContactView){
    var myRouter = Backbone.Router.extend({
             routes : {
                 "" : "createHomePage",
                 "description/*id" :"createDescriptionPage",
                 'addContact' : 'createContact'
           
             },
             createHomePage :function(){
                 $('body').empty(); 
                mainview = new mainView();
             },
             createDescriptionPage :function(options){
                 peoples.fetch({
                    success:function(data){
                        var data = peoples.at(options-1);
                        var view = new peopleDescView({model:data});
                        $('body').html(view.render().el);
                    }
                });
                  
             },
             createContact :function(){
                new createContactView();
             }
      
     });
    return myRouter;
  
});


