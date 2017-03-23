//Script file!
$('document').ready(function(){
	let model = new InputBox();
	let boxStack= new Array<box>();
	for(let i=0; i<4; i++){
		boxStack.push(new box(i));
	}
})


class box{
	selected = false;
	//Pass in the id of the box
	constructor(id: number){
		console.log("in box constructor");
		document.getElementById("boxes").innerHTML += "<div id='box" + id + "' class='box'></div>";
		//$('#boxes').innerHtml += "<div id='box" + id + "' class='box'></div>";
	}
}

class InputBox{
	things: string[];
	reps = 1; //Start at 1
	constructor(){
		this.addEventHandlers();
	}

	addEventHandlers(){
		let obj = this;
		this.addInputEventHandler();
		this.addBoxesEventHander();
        //Updates the current text input of the box upon click
        $('#boxSubmit').click(function () {
            let newInput = " " + $('#addToBox').val();
			console.log(newInput)
            let currentInput = "" + $('#box').text();
            for(let i=0; i < obj.reps; i++)
			    currentInput = currentInput + newInput;
            $('#box').text(currentInput);

			var str = $('#box').text();
            if (str.length > 60) {
                $('#part2Start').removeClass('hidden');
				
				window.setTimeout(function(){
				$('#boxes').removeClass('hidden');
				}, 890);
            }
        });
	}

	addInputEventHandler(){
		let obj = this;
		$('option').click(function(){
			let option = <HTMLOptionElement>this;
			obj.reps = +option.value;
		});
	}

	addBoxesEventHander(){
		$('.box').click(function(){
			let boxOfFocus = this;
			if(boxOfFocus.hasClass('selected')){
				boxOfFocus.removeClass('selected');
			}
			else{
				boxOfFocus.addClass('selected');
			}
		})
	}

	printBox() {
		for(let s in this.things){
			$('#box').innerText += s + " ";
			$('#box').Text += s;
		}		
	}
}


