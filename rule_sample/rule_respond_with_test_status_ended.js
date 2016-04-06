
module.exports = {

	

    summary:function(){
        return "reply with test status ended when asked for status";
    },

    //mark if use local response
    shouldUseLocalResponse : function(req,reqBody){return true;},

    dealLocalResponse : function(req,reqBody,callback){
    	var testStatuses = 
			{
			  "customerId": "thecustomer",
			  "executionId": "1234",
			  "tests": 
			  [
			    {
			      "name": "test1",
			      "duration": 1,
			      "framework": "TestNG",
			      "result": "passed",
			      "status": "ended"
			    }
			  ]
			}; 
        
        callback(200, {"content-type":"application/javascript"}, JSON.stringify(testStatuses))
    }
};
