

function documentReady() {

            if ("WebSocket" in window)
            {
               //alert("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://10.70.0.46:80/");
				
               ws.onopen = function()
               {
                  // Web Socket is connected, send data using send()
                  //ws.send([[1][1][4][0]]);
                  //alert("Message is sent...");
               };
				
               ws.onmessage = function (evt) 
               { 
                  //var received_msg = evt.data;
                 alert("Message is received...");
               };
				
               ws.onclose = function()
               { 
                  // websocket is closed.
                  alert("Connection is closed..."); 
               };
            }
            
            else
            {
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
       
}