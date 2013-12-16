onconnect = function(e) {
	var port = e.ports[0];
	port.postMessage('Hello World!');
	var wsUri = "ws://echo.websocket.org/";
	function testWebSocket() {
		port.postMessage('Testing WebSocket!');
//		websocket = new WebSocket(wsUri);
		websocket.onopen = function(evt, port) {
			onOpen(evt, port)
		};
		websocket.onclose = function(evt, port) {
			onClose(evt, port)
		};
		websocket.onmessage = function(evt, port) {
			onMessage(evt, port)
		};
		websocket.onerror = function(evt, port) {
			onError(evt, port)
		};
	}
	port.postMessage('Hello Again!');
	websocket = new WebSocket(wsUri);
	function onOpen(evt) {
		port.postMessage('CONNECTED');
//		doSend("WebSocket rocks");
	} 
	function onClose(evt) {
		port.postMessage('DISCONNECTED');
	} 
	function onMessage(evt) {
		port.postMessage('RESPONSE: ' + evt.data);
//		websocket.close();
	} 
	function onError(evt) {
		port.postMessage('ERROR: ' + evt.data);
	}
	function doSend(message) {
		port.postMessage('SENT: ' + message);
		websocket.send(message);
	}
	
	port.onmessage = function(e) {
		testWebSocket();
		doSend("WebSocket rocks");
		doSend(e.data);
		port.postMessage('pong (not from websocket, it just Echos)'); // not e.ports[0].postMessage!
    // e.target.postMessage('pong'); would work also
  }
  
}