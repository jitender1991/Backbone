define(function(){
    var People = Backbone.Model.extend({
        defaults :{
                'Id' :'id',
                'FirstName' :'firstname',
                'LastName' :'lastname',
                'Mobile':'mobile',
                'Age':'age'
        },
        validate: function(attrs, options) {
           debugger
         }

    });
    return People;
})