define(['peopleCollection','peopleView','text!mainViewtmpl'],function(Peoples,peopleView,mainViewtmpl){
    var mainView = Backbone.View.extend({
    initialize :function(){
        var that = this;
        peoples.fetch({
            success:function(data){
                that.render(data); 
            }
        });
       
    },
    events :{
      'keyup .filter' : "filterContacts"  ,
      'click #addbutton' :'addContact'
    },
    addContact:function(){
        this.undelegateEvents() ;
        myrouter.navigate('addContact',{trigger :true});
    },
    el:'body',
    filterContacts :function(e){
        this.inputvalue = e.target.value.trim();
        this.inputvalue = this.inputvalue.toLocaleLowerCase();
        var list = peoples.toJSON();
        list = _.filter(list,function(x){
           if(x.FirstName.toLowerCase().indexOf(this.inputvalue)!== -1){
                return true
           }
        },this);
        this.addList(list);
    },
    template :_.template(mainViewtmpl),
    render :function(data){
        this.$el.html(this.template);
         var data = data.toJSON()
        this.addList(data);
    },
    addList :function(data){
        if(data == undefined){
           return; 
        }
        this.$('#list').empty();
        _.each(data ,function(data){
            var view = new peopleView({model:data});
            this.$('#list').append(view.render().el); 
         });  
    }
    });
 return mainView;
})
