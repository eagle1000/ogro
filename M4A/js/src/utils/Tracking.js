function Tracking() {
}

this.shouldTracking = false;

//TRACKING
Tracking.prototype.startTracking = function(){
    this.getData();
    this.canPost = true;
    this.trackingAlreadyStarted = true;
}

Tracking.prototype.getData = function () {
    this.startDate = new Date();
    this.shouldTracking;
    this.dProfile;
    this.dGame;
    this.dArea;
    this.dActivityType;
    this.dDetail;
    this.dLevel;
    this.dNextAchievements;
    this.dMedalTimeId;
    this.dMedalTimeToNext;
    this.dMedalCountID;
    this.dMedalCountToNext;
    this.activityDetailCount = 0;
    
    var that = this;
    var id = (typeof idJuego == "undefined") ? 0 : idJuego;
    
    var gameID = {
        game_id: id
    }
    
    jQuery.post(apiURL+'trackInit',JSON.stringify(gameID), function (data) {
        that.shouldTracking = data.tracking;
        if(that.shouldTracking){
            that.dProfile = data.profile_id;
            that.dGame = data.game_id;
            that.dArea = data.area_id;
            that.dActivityType= data.activity_type_id;
            that.dDetail = data.activity_detail_id;
            that.dLevel = data.level_id;
            that.dNextAchievements = data.nextAchievements;
            var gMedalTime = data.nextAchievements.time.split("&");
            that.dMedalTimeId = gMedalTime[0];
            that.dMedalTimeToNext = gMedalTime[1];
            var gMedalCount = data.nextAchievements.count.split("&");
            that.dMedalCountID = gMedalCount[0];
            that.dMedalCountToNext = gMedalCount[1];            
            console.log(data.nextAchievements);
            that.setMedalTimer(that.dMedalTimeType);
        }
    });    
};


Tracking.prototype.correctAnswer = function(){
    this.activityDetailCount ++;
    if(this.activityDetailCount >=this.dMedalCountToNext){
        this.postData("unlockAchievement",this.dMedalCountID);        
    }
};

Tracking.prototype.setMedalTimer = function(){
    var that = this;
    this.timerMedal = setTimeout(function(){ 
        that.postData("unlockAchievement",this.dMedalTimeID);
    },this.dMedalTimeToNext*1000);
};

Tracking.prototype.postData = function (apiFunction,medalId) {
    if(this.canPost && this.shouldTracking){
        var dTime =  this.calculateTimer();
        var data = {
            profile_id: this.dProfile,
            game_id: this.dGame,
            area_id: this.dArea,
            activity_type_id: this.dActivityType,
            activity_detail_id: this.dDetail,
            level_id: this.dLevel,
            activity_time: dTime,
            activity_detail_count:this.activityDetailCount 
        };
        
        jQuery.post(apiURL+'storeTrackingData', JSON.stringify(data), function (data) {
            console.log(data);
        });                 
        
        if(apiFunction=="unlockAchievement"){
            var data = {
                profile_id: this.dProfile,
                activity_detail_id: this.dDetail,
                achievement_id: medalId
            };  
            jQuery.post(apiURL+'unlockAchievement', JSON.stringify(data), function (data) {
                if(data.status == "achievementUnlocked"){
                    showUnlockedAchievement(data);
                }
            });
            clearTimeout(this.timerMedal);
            this.getData();
        }
    }   
};

Tracking.prototype.gup = function(name){
   name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
   var regexS = "[\\?&]" + name + "=([^&#]*)";
   var regex = new RegExp(regexS);
   var results = regex.exec(window.location.href);
   if (results == null)
       return "";
   else
       return results[1];
};

Tracking.prototype.calculateTimer= function(){
    this.endDate = new Date();
    var mili = this.endDate-this.startDate;;
    return Math.ceil(mili/1000);
    
};