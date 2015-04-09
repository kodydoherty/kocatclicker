var initalCats = [
    {
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/cutecat.jpg',
        imgAttribution: 'http://stylonica.com/cat-pictures/',
        nickNames: ["crazy", "fluffy", "fuzzface" , "tiny"]

    },
    {
        clickCount: 0,
        name: 'max',
        imgSrc: 'img/duckcat.jpg',
        imgAttribution: 'http://stylonica.com/cat-pictures/',
        nickNames: ["crazy", "fluffy", "fuzzface" , "tiny"]

    },
    {
        clickCount: 0,
        name: 'Eva',
        imgSrc: 'img/max.jpg',
        imgAttribution: 'http://stylonica.com/cat-pictures/',
        nickNames: ["crazy", "fluffy", "fuzzface" , "tiny"]

    },
    {
        clickCount: 0,
        name: 'Fluffy',
        imgSrc: 'img/hatcat.jpeg',
        imgAttribution: 'http://stylonica.com/cat-pictures/',
        nickNames: ["crazy", "fluffy", "fuzzface" , "tiny"]

    },
    {
        clickCount: 0,
        name: 'Mue',
        imgSrc: 'img/kitten.jpg',
        imgAttribution: 'http://stylonica.com/cat-pictures/',
        nickNames: ["crazy", "fluffy", "fuzzface" , "tiny"]

    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nickNames = ko.observableArray(data.nickNames);

    this.title = ko.computed(function() {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = 'Ninja';
        }

        return title;
    }, this);
}


var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);

    initalCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem) );
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.changeCat = function(cat) {
        self.currentCat(cat);
    };

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());