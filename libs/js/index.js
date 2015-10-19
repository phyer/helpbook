//home page start--------------------------------------------------------------------------------------------------
//---bannerswrapper section start----------------------------------------------------------------------------------------
var bannersary = book.banners;
var BannerMod = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        src: '',
        name: '',
    },
});


var BannerConn = Backbone.Collection.extend({
    model: BannerMod
});

var myBannerConn = new BannerConn();
myBannerConn.add(bannersary);


var BannersView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");
        _.bindAll(this, 'render');
        this.bannerary = new Array();
        this.render();
    },
    render: function() {
        this.template = _.template($('#banners_temp').html(), {banners: this.collection.toJSON()});
        $(this.el).append(this.template);
    },
});
//---bannerswrapper section end----------------------------------------------------------------------------------------
//---mainmenuwrapper section start----------------------------------------------------------------------------------------
var mainmenuary = [
    {
        'icon': 'fa-send-o',
        'title': '快速上手',
        'link': '#quicklink',
    },
    {
        'icon': 'fa-question',
        'title': '常见问题',
        'link': '#faq',
    },
    {
        'icon': 'fa-book',
        'title': '完整说明',
        'link': '#fulllist',
    },
    {
        'icon': 'fa-at',
        'title': '联系我们',
        'link': '#contactus',
    }
];

var MainMenuMod = Backbone.Model.extend({
    initialize: function() {

    },
    defaults: {
        icon: '',
        title: '',
        link: ''
    },
});


var MainMenuConn = Backbone.Collection.extend({
    model: MainMenuMod
});

var myMainMenuConn = new MainMenuConn();
myMainMenuConn.add(mainmenuary); //


var MainMenuView = Backbone.View.extend({
    initialize: function() {
        // do nothing
        console.log("initialize start");
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        this.template = _.template($('#mainmenu_temp').html(), {mainmu: this.collection.toJSON()});
        $(this.el).append(this.template);
        var height = $(window).height();
        $('.header').css("height", 0.05 * height);
        $('.slide').css("height", 0.45 * height);
        $('.ui-btn').css("height", 0.125 * height);
        $("a.ui-link-inherit").css("font-size", 0.032 * height + "px");
        $("a.ui-link-inherit").css("padding", 0.041 * height + "px");
        $('#slide3').swipeSlide({
            continuousScroll: true,
            speed: 3000,
            transitionType: 'cubic-bezier(0.22, 0.69, 0.72, 0.88)'
        }, function(i) {
            $('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        });
    }

});

//---bannerswrapper section end----------------------------------------------------------------------------------------
//home page end--------------------------------------------------------------------------------------------------

//Quciklink page start-----------------------------------------------------------------------------------------------
var quicklinkary = book.quicklink;

var QuickLinkMod = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        title: '',
        name: ''
    },
});


var QuickLinkConn = Backbone.Collection.extend({
    model: QuickLinkMod
});

var myQuickLinkConn = new QuickLinkConn();
myQuickLinkConn.add(quicklinkary); //


var QuickLinkView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        this.data = new Object();

        this.data.title = '快速上手';
        this.data.main = this.collection.toJSON();
        this.template = _.template($('#quicklink_temp').html(), {quicklink: this.data});
        $(this.el).append(this.template);
    },
});

//QuickLink page end-----------------------------------------------------------------------------------------------
//Faq page start-----------------------------------------------------------------------------------------------
var faqary = book.faq;

var FaqMod = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        question: '',
        answer: '',
    },
});


var FaqConn = Backbone.Collection.extend({
    model: FaqMod
});

var myFaqConn = new FaqConn();
myFaqConn.add(faqary); //


var FaqView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");
        _.bindAll(this, 'render', 'showItem');
        this.render();
    },
    render: function() {
        this.data = new Object();
        this.data.title = '常见问题';
        this.data.main = this.collection.toJSON();
        this.template = _.template($('#faq_temp').html(), {faq: this.data});
        $(this.el).append(this.template);
    },
    events: {
        'click li.noborder': 'showItem',
    },
    showItem: function(event) {
        $(event.target).parent().parent().siblings().find(".answer").hide().parent().find(".ui-btn-up-c").css('font-weight', 'normal');
        $(event.target).parent().parent().find(".answer").show().parent().find(".ui-btn-up-c").css('font-weight', 'bold');
    },
});

//Faq page end-----------------------------------------------------------------------------------------------
//Contact us page start-----------------------------------------------------------------------------

var ContactusView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        this.data = new Object();
        this.data.title = '常见问题';
        this.data.main = "";
        this.template = _.template($('#contactus_temp').html(), {contactus: this.data});
        console.log(this.template);
        $(this.el).append(this.template);
    },
//    showItem: function(event) {
//        $(event.target).parent().parent().siblings().find(".answer").hide().parent().find(".ui-btn-up-c").css('font-weight', 'normal');
//        $(event.target).parent().parent().find(".answer").show().parent().find(".ui-btn-up-c").css('font-weight', 'bold');
//    },
});

//Contact us page end---------------------------------------------------------------------------------


//FullList page start-----------------------------------------------------------------------------------------------
var fulllistary = book.fulllist;

var FullListMod = Backbone.Model.extend({
    initialize: function() {
    },
    defaults: {
        icon: '',
        title: '',
        name: '',
        children: ''
    },
});


var FullListConn = Backbone.Collection.extend({
    model: FullListMod
});

var myFullListConn = new FullListConn();
myFullListConn.add(fulllistary); //


var FullListView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");
        _.bindAll(this, 'render', 'showItem');
        this.render();
    },
    render: function() {
        this.data = new Object();

        this.data.title = '完整说明';
        this.data.main = this.collection.toJSON();
        this.template = _.template($('#fulllist_temp').html(), {fulllist: this.data});
        $(this.el).append(this.template);
    },
    events: {
        'click dt.arrow': 'showItem',
    },
    showItem: function(event) {
        //alert("asdf");
//        $(event.target).parent().siblings();
        // $(event.target).css('font-weight','bold');
        //$(event.target).siblings().find(".answer").hide();
        console.log($(event.target).parent());
        $(event.target).parent().siblings().find(".answer").hide().parent().find(".ui-btn-up-c").css('font-weight', 'normal');
        $(event.target).parent().find(".answer").show().parent().find(".ui-btn-up-c").css('font-weight', 'bold');
    },
});

//var myFullListView = new FullListView({collection: myFullListConn, el: '#container'});
//FullList page end-----------------------------------------------------------------------------------------------

//contenta page start-----------------------------------------------------------------------------------------------
//var contentaary = ;

var ContentAMod = Backbone.Model.extend({
    initialize: function() {

    },
    defaults: {
        name: '',
        title: '',
        src: '',
        content: ''
    },
});

var ContentAConn = Backbone.Collection.extend({
    model: ContentAMod
});

var myContentAConn = new ContentAConn();
//myContentAConn.add(contentaary); //


var ContentAView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");
        _.bindAll(this, 'render', 'getTitle', 'getMain');
        this.collection.add(book[this.model[0]]);
        this.curmodel = this.collection.where({name: this.model[1]});
        this.data = new Object();

        this.data.title = this.getTitle();
        this.data.main = this.getMain();
        this.render();
    },
    getTitle: function() {
        return this.curmodel[0].get('title');
    },
    getMain: function() {
        return this.curmodel[0].get('items');
    },
    render: function() {
        //$(this.el).html("");

        this.template = _.template($('#contenta_temp').html(), {contenta: this.data});
        $(this.el).append(this.template);

        var height = $(window).height();
        $('#slide3').css("height", 0.9 * height);
        $('.header').css("height", 0.10 * height);

        $(function() {
            $('.full').swipeSlide({
                autoSwipe: false
            }, function(i) {
                $('.full li').eq(i).addClass('cur').siblings().removeClass('cur');
                $('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');                
                $(this).scrollTop(0);
            });
        });
    },
});

//var myContentAView = new ContentAView({collection: myContentAConn, el: '#container'});
//contenta page end-----------------------------------------------------------------------------------------------

//contentc page start-----------------------------------------------------------------------------------------------
var ContentCMod = Backbone.Model.extend({
    initialize: function() {
//        this.bind("change:name", function() {
//            var name = this.get("name"); // 'Stewie Griffin'
//            alert("我的名字变为" + name);
//        });
    },
    defaults: {
        name: '',
        title: '',
        pic: '',
        content: ''
    },
});


var ContentCConn = Backbone.Collection.extend({
    model: ContentCMod
});

var myContentCConn = new ContentCConn();

var ContentCView = Backbone.View.extend({
    initialize: function() {
        $(this.el).html("");

        _.bindAll(this, 'render', 'getTitle', 'getMain');
        this.collection.add(book[this.model[0]]);
        this.curmodel = this.collection.where({name: this.model[1]});
        this.collection.add(this.curmodel[0].get('items'));
        var curitem = this.collection.where({name: this.model[2]});
        this.data = new Object();
        this.data.title = curitem[0].get("title");
        this.data.main = curitem[0].get('pages');
        this.render(); 

    },
    getTitle: function() {
    },
    getMain: function() {
    },
    render: function() {
        this.template = _.template($('#contentc_temp').html(), {contentc: this.data});
        $(this.el).append(this.template);
        var height = $(window).height();
        $('#slide3').css("height", 0.9 * height);
        $('.header').css("height", 0.10 * height);
        $(function() {
            $('.full').swipeSlide({
                autoSwipe: false
            }, function(i) {
                $('.full li').eq(i).addClass('cur').siblings().removeClass('cur');
                $('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
                $(this).scrollTop(0);
            });
        });
    },
});

//contentC page end-----------------------------------------------------------------------------------------------
//router sett start---------------------------------------------------------------------------------------------
var AppRouter = Backbone.Router.extend({
    routes: {
        "": "home",
        'quicklink': "quicklink",
        "quicklink/:id": 'contenta',
        'faq': 'faq',
        'contactus': 'contactus',
        'fulllist': 'fulllist',
        'test': 'test',
        "fulllist/:group/:item": 'contentc',
    },
    home: function() {
        console.log("home");
        var myBannersView = new BannersView({collection: myBannerConn, el: '#container'});
        var myMainMenuview = new MainMenuView({collection: myMainMenuConn, el: '#container'});
    },
    quicklink: function(id) {
        var myQuickLinkView = new QuickLinkView({collection: myQuickLinkConn, el: '#container'});
    },
    contenta: function(seg1) {
        var myContentAView = new ContentAView({collection: myContentAConn, el: '#container', model: ["quicklink", seg1]});
    },
    faq: function(id) {
        var myFaqView = new FaqView({collection: myFaqConn, el: '#container'});
    },
    contactus: function(id) {
        var myContactusView = new ContactusView({el: '#container'});
    },
    fulllist: function() {
        var myFullListView = new FullListView({collection: myFullListConn, el: '#container'});
    },
    contentc: function(seg1, seg2) {
        var myContentCView = new ContentCView({collection: myContentCConn, el: '#container', model: ["fulllist", seg1, seg2]});
    },
    defaultRoute: function(actions) {
    }
});
// Initiate the router
var app_router = new AppRouter;
// Start Backbone history a neccesary step for bookmarkable URL's
Backbone.history.start();

