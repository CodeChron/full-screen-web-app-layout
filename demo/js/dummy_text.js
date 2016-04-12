function generateTextBlock(str, qty){
	do {
   str += str
   qty -= 1
  } while (qty > 0)
	return str
}

var
  text = "Ac nisi hac ridiculus suspendisse condimentum condimentum ornare fusce eu non ligula massa parturient condimentum magnis hendrerit scelerisque class purus a libero libero adipiscing dignissim volutpat et. Imperdiet fermentum turpis platea rutrum varius id proin dis sociosqu dui posuere a mus hac cubilia ultricies orci id a adipiscing sit. A eros ipsum vestibulum rhoncus scelerisque orci adipiscing nec vestibulum duis justo morbi mi malesuada etiam eleifend sodales mattis facilisis urna consectetur vel elementum aptent luctus. Iaculis adipiscing et adipiscing quam suspendisse sem est condimentum a lectus vulputate rutrum leo condimentum morbi suspendisse lacus a eleifend parturient suspendisse erat.",
  fakeTextBlock = document.createTextNode(generateTextBlock(text, 10)),
  placeholder = document.getElementById('main-content')
;
  
placeholder.appendChild(fakeTextBlock)