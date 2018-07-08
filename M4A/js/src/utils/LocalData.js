var LocalData = function () {
};

LocalData.prototype = {
    getLevel: function () {
        var mLevel = 0;

        if (localStorage.getItem("ogro-mLevel") != undefined) {
            mLevel = localStorage.getItem("ogro-mLevel");
        }
        return mLevel;
    },
    setLevel: function (mLevel) {
        window.localStorage.setItem("ogro-mLevel", mLevel);
    }
};