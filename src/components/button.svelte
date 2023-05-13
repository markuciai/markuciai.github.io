

<style>
.lang_switch {
	/* width: 100vw; */
	/* text-align: center; */
	/* text-align: right; */
	/* margin: 5px 25vw 40px 0; */
	/* position:absolute; */
	/* right: ; */
	align-items: center;
	align-self: center;
	text-align: right;
	width: 100%;
	max-width: 800px;
	margin: 10px auto;
	box-sizing: border-box;
	padding-right: 20px;
	color: #222;
	user-select: none;
	}

.lang_button {
	appearance: none;
	box-sizing: border-box;
	text-decoration: none;
	text-align: center;
	font-size: 14px;
	line-height: 20px;
	font-weight: 600;
	/* letter-spacing: 2px; */
	border: none;
 	background-color: rgba(255, 255, 255, 0);
	width: 40px;
	height: 26px;
	margin: 5px;
	/* padding-bottom: 10px; */
	border-radius: 3px;
	/* border: 0px; */
	color: #EEDC83;
	border: 0.67px solid rgb(238, 220, 131, 0.8);
	cursor: pointer;
	user-select: none;

	transition: 0.3s;
	}

.lang_button::first-letter {
	letter-spacing: 2px;
}

.lang_button:hover {
	background-color:#EEDC83;
	color: #D33F37;
	/* border: 0.67px  solid #a29349; */
	/* border-top-color: white;
  	border-left-color: white;
  	border-right-color: white;
 	 border-bottom-color: white; */
	border: 0.67px solid rgb(238, 220, 131, 1);
	transition: 0.05s;
	transform: scale(1.1);
	box-shadow: 0px 3px 5px -3px rgba(0, 0, 0, 0.3);
	}


.lang_button:active {
	background-color:#EEDC83;
	border: 0.67px solid rgb(238, 220, 131, 0);
	transform: scale(0.95);
	box-shadow: 0px 3px 5px -10px rgba(0, 0, 0, 0);
	}

	/* away */
.lang_button:active:not(:hover) {
	transform: scale(1);
	color: #EEDC83;
	border: 0.67px solid rgb(238, 220, 131, 1);
	background-color:rgba(238, 220, 131, 0.2);
	}
/* .lang_button.selected:hover {
	
} */

.lang_button.selected, .lang_button.selected:hover {
	transform: scale(1);
	pointer-events: none;
	cursor: default;
	color: #006837;
	color: #EEDC83;
	/* background-color: white; */
	/* background-color: #EEDC83; */
	/* background-color: rgba(0,0,0, 0.6); */
	/* background-color: #222; */
	background-color: #D33F37;
	border: 0.67px solid rgb(238, 220, 131, 0.1);
	/* border:none; */
	user-select: none;
	transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}
</style>