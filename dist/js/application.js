/*! mongotest 30-01-2015 */
(function(){_.templateSettings={interpolate:/\{\{(.+?)\}\}/g},window.Julala={Models:{},Collections:{},Routers:{},Views:{}},$(document).ready(function(){return Julala.appView=new Julala.Views.appView,Julala.appView.render(),Julala.router=new Julala.Routers.appRouter,Backbone.history.start({pushState:!1})})}).call(this),function(){Julala.Routers.appRouter=Backbone.Router.extend({routes:{"":"home",about:"about",japanese:"japanese",music:"music",calendar:"calendar",contact:"contact"},home:function(){this.clearEvents(),Julala.homeView=new Julala.Views.homeView,Julala.homeView.render()},about:function(){this.clearEvents(),Julala.aboutView=new Julala.Views.aboutView,Julala.aboutView.render()},japanese:function(){this.clearEvents(),Julala.japaneseView=new Julala.Views.japaneseView,Julala.japaneseView.render()},music:function(){this.clearEvents(),Julala.musicView=new Julala.Views.musicView,Julala.musicView.render()},calendar:function(){this.clearEvents(),Julala.calendarView=new Julala.Views.calendarView,Julala.calendarView.render()},contact:function(){this.clearEvents(),Julala.contactView=new Julala.Views.contactView,Julala.contactView.render()},clearEvents:function(){return $("#output").off()}})}.call(this),function(){Julala.Views.aboutView=Backbone.View.extend({el:"#output",initialize:function(){this.template=_.template($("#aboutView").html())},render:function(){this.$el.html(this.template())}})}.call(this),function(){Julala.Views.appView=Backbone.View.extend({el:"#app",initialize:function(){this.template=_.template($("#appView").html())},render:function(){this.$el.html(this.template())}})}.call(this),function(){Julala.Views.calendarView=Backbone.View.extend({el:"#output",initialize:function(){this.template=_.template($("#calendarView").html())},render:function(){this.$el.html(this.template())}})}.call(this),function(){Julala.Views.contactView=Backbone.View.extend({el:"#output",initialize:function(){this.template=_.template($("#contactView").html())},render:function(){this.$el.html(this.template())}})}.call(this),function(){Julala.Views.homeView=Backbone.View.extend({el:"#output",initialize:function(){this.template=_.template($("#homeView").html())},render:function(){this.$el.html(this.template())},events:{"mouseover .tuition-link":"color","mouseleave .tuition-link":"blackWhite"},color:function(a){var b;return b=$(a.currentTarget),b.find(".tuition").addClass("mouseover"),b.find("img").addClass("mouseover")},blackWhite:function(a){var b;return b=$(a.currentTarget),b.find(".tuition").removeClass("mouseover"),b.find("img").removeClass("mouseover")}})}.call(this),function(){Julala.Views.japaneseView=Backbone.View.extend({el:"#output",initialize:function(){this.template=_.template($("#japaneseView").html())},render:function(){this.$el.html(this.template())}})}.call(this),function(){Julala.Views.musicView=Backbone.View.extend({el:"#output",initialize:function(){this.template=_.template($("#musicView").html())},render:function(){this.$el.html(this.template())}})}.call(this);