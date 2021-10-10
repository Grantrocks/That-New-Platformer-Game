            function Register(){
            // fetch title id
            var id = "97CAF";
            var username = document.getElementById("userName");
            if(!id || id == "")
            {
              OutputError("TitleId cannot be null");
              return;
            }
            else if(typeof PlayFab == 'undefined') // make sure we have the SDK prior to calling / setting 
            {
              OutputError("The PlayFab SDK could not be found. Double check your script sources");
              return;
            }

            // save these values locally to ease use
            localStorage.titleId = id;
            localStorage.username = username;
            
            // save title id
            PlayFab.settings.titleId = id;

            // build http request object for LoginWithCustomId
            var LoginWithCustomIDRequest = {};
            LoginWithCustomIDRequest.TitleId = id;
            LoginWithCustomIDRequest.CustomId = username;
            LoginWithCustomIDRequest.CreateAccount = true;


            OutputStatus("Registering...");
            PlayFabClientSDK.LoginWithCustomID(LoginWithCustomIDRequest ,(response, error) => {
                if(error)
                {
                  OutputError(error);
                } 
                else
                {
                  // display account details
                  var result = response.data;
                  var status = "Login Successful. <br \\> Your Player Id Is: " + result.PlayFabId;
                  OutputStatus(status);
                }
            });
          };
     
     // some helper js methods 
          window.onload = function() 
          {
              var id = document.getElementById("titleId");
              if(!id)
              {
                OutputError("Please Fill Out The Form...");
                return;
              }
              else if(typeof PlayFab == 'undefined') // make sure we have the SDK prior to calling / setting 
              {
                OutputError("The PlayFab SDK could not be found. Double check your script sources");
                return;
              }
              id.value = localStorage.titleId ? localStorage.titleId : "";
          };

          function OutputError(error)
          {
            var output = document.getElementById("result");

            if(output)
            {
              output.style.color = "red";
              output.innerHTML = typeof error == "string" ? error : error.status + " -- " + error.errorMessage;  
            }
            else
            {
              console.error("#result could not be located.");
              console.error(error);
            }
          }

          function OutputStatus(request, error)
          {
            var output = document.getElementById("result");

            if(output)
            {
              output.style.color = "black";
              output.innerHTML = request;
            }
            else
            {
                console.log("#result could not be located.");
                console.log(request);
            }
          }
