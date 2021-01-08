const homeList = (req,res) => {
    res.render('locations-list', {title:'Home'});
};

const locationInfo = (req,res) => {
    res.render('index', {title: 'Location Info'});
};

const addReview = (req,res) => {
    res.render('index', {title: 'Add review'});
};

module.exports = {homeList, locationInfo, addReview};