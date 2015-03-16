require.config({
     
     paths :{
         'jquery' :'lib/jquery',
         'backbone':'lib/backbone',
         'underscore' :'lib/underscore',
         'text' :'lib/text',
         'appRouter':'router/appRouter',
         'mainView':'views/mainView',
         'templates' :'templates',
         'peopleCollection':'collections/peopleCollection',
         'peopleModel' :'models/peopleModel',
         'peopleView':'views/peopleView',
         'peopleDescView':'views/peopleDescView',
         'mainViewtmpl':'templates/mainViewtmpl.html',
         'peopleDescViewtmpl':'templates/peopleDescViewtmpl.html',
         'peopleViewtmpl':'templates/peopleViewtmpl.html',
         'createContactView' :'views/createContactView',
         'addContacttmpl':'templates/addContacttmpl.html'
     },
     shim:{
          'backbone':{
               deps:['underscore','jquery'],
               exports :'Backbone'
               
          },
          'underscore':{
               exports :'_'
          },
          'appRouter' :{
               deps:['backbone'],
               exports:'myRouter'
          },
          'peopleCollection':{
               deps:['backbone']
               
          }
          
     } 
});
require(['backbone','appRouter','peopleCollection'],function(Backbone,myRouter,Peoples){
    peoples = new Peoples();
    myrouter = new myRouter();
    Backbone.history.start();
});