import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from './App.tsx';
import HttpClient from './network/http.ts';
import TweetEditor from './service/TweetEditor.ts';
import { theme } from './theme.ts';

const GlobalStyle = createGlobalStyle`
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

/* custom */
* {
	 box-sizing: border-box;
	font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
}

button{
  border:none;
}
input,button{
  &:focus{
    outline: none;
  }
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* custom */
body{
	font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


`

const baseUrl = 'http://localhost:8080';
const httpClient = new HttpClient(baseUrl);

const tweetEditor = new TweetEditor(httpClient);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<App tweetEditor={tweetEditor} />
		</ThemeProvider>
	</React.StrictMode>
);

