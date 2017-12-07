import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './src/mainContainer.js'

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
});

ReactDOM.render(
	<MainContainer className="main-container">
	</MainContainer>, 
	document.getElementById('root')
);