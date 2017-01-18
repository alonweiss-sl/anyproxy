
module.exports = {

    summary:function(){
        return "reply with empty tests statuses";
    },

    //mark if use local response
    shouldUseLocalResponse : function(req,reqBody){return true;},

    dealLocalResponse : function(req,reqBody,callback){
        var testStatuses = 
        {
          "customerId": "thecustomer",
          "executionId": "1234",
          "tests": []
        }; 
        
        callback(200, {"content-type":"application/javascript"}, JSON.stringify(testStatuses));
    }
};
