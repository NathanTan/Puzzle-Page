//TypeScript file!
$('document').ready(function(){
	let model = new box();
})

class box{
	things: string[];
	reps: number;
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


