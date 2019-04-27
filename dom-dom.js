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

function addShopList() {
	if (inputLength() > 0) {
		createListElement()
	}
}

function addCreateList(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement()
	}
}

function addToggleEvent(element) {
    // turn off text yg sudah kebeli
	element.addEventListener("click", function() {
		element.classList.toggle("done")
	});
}

function addCloseEvent(element) {

    // menyimpan text yang ada di dalam li dan hapus
	var ListOriginalValue = element.innerHTML
    element.innerHTML = ""

    // create removeBtn di awal
	var createButton = document.createElement("button")
	createButton.classList.add("removeBtn")
	createButton.appendChild(document.createTextNode("X"))
	element.appendChild(createButton)

	// tampil text input 
	element.innerHTML = element.innerHTML + " " + ListOriginalValue

	// generate removeBtn
	element.querySelector("button").addEventListener("click", function() {
		element.remove()
	})
}

button.addEventListener("click", addShopList)
input.addEventListener("keypress", addCreateList)


// Creates initial events to the existing elements on the HTML
liArray.forEach(function(element) {
	addToggleEvent(element)
	addCloseEvent(element)
})

