var button = document.getElementById("btn")
var input = document.getElementById("inputList")
var ul = document.querySelector("ul")
var liArray = document.querySelectorAll("li")

function inputLength() {
	return input.value.length
}

function createListElement() {
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = ""
	input.focus()

	addToggleEvent(li)
	addCloseEvent(li)
}

function addWishList() {
	if (inputLength() > 0) {
		createListElement()
	}
}

function addCreateList(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}

function addToggleEvent(btnEl) {
    // turn off text yg sudah kebeli
	btnEl.addEventListener("click", function() {
		btnEl.classList.toggle("done")
	});
}

function addCloseEvent(btnEl) {

    // menyimpan text yang ada di dalam li dan hapus
	var ListOriginalValue = btnEl.innerHTML
    btnEl.innerHTML = ""

    // create removeBtn di awal
	var createButton = document.createElement("button")
	createButton.classList.add("removeBtn")
	createButton.appendChild(document.createTextNode("X"))
	btnEl.appendChild(createButton)

    
	// tampil text input 
	btnEl.innerHTML = btnEl.innerHTML + " " + ListOriginalValue

	// generate removeBtn
	btnEl.querySelector("button").addEventListener("click", function() {
		btnEl.remove()
	})
}

button.addEventListener("click", addWishList)
input.addEventListener("keypress", addCreateList)
liArray.forEach(function(btnEl) {
	addToggleEvent(btnEl)
	addCloseEvent(btnEl)
})

