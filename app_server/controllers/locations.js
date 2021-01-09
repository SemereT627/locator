const homeList = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with WiFi',
        pageHeader: {
            title: "Loc8r",
            strapLine: "Find a place to work with WiFi near you!"
        },
        sidebar: "Loc8r helps you find places to work when out and about. Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            distance: '100m'
        }, {
            name: 'Cafe hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

const locationInfo = (req, res) => {
    res.render('location-info', {
        title: 'Location Info',
        sidebar: {
            content: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            contentReview: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
        },
        locations: {
            title: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            facilities: ['Hot drinks', 'Food', 'Premium WiFi'],
            cardtitle: ['Opening hours', 'Facilities', 'Location map', 'Customer reviews'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            rating: 3,
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true,
                text: 'Closed'
            }],

        },
        reviews: [{
            name: 'Simon Holmes',
            reviewDate: '16 February 2017',
            reviewMessage: 'What a great place.',
            rating: 5
        }, {
            name: 'Charlie Chaplin',
            reviewDate: '14 Feburary 2017',
            reviewMessage: 'It was okay. Coffee wasn\'t great.',
            rating: 3
        }]
    });
};

const addReview = (req, res) => {
    res.render('location-review-form', {
        title: 'Add review',
        contentBox: {
            title: 'Review Starcups',
            chunk: ['Name','Rating','Review','Add my review']
        }
    });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};