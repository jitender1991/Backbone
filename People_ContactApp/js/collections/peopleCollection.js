define(['peopleModel'],function(People){   
    var Peoples = Backbone.Collection.extend({ 
        url :'/Data/data.json',
        model : People,
    });
    return Peoples;
});

