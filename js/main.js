/**loader**/
document.onreadystatechange = function() { 
	if (document.readyState !== "complete") { 
			document.querySelector( 
				"body").style.visibility = "hidden"; 
			document.querySelector( 
				"#loader").style.visibility = "visible"; 
	} else { 
			document.querySelector( 
				"#loader").style.display = "none"; 
			document.querySelector( 
				"body").style.visibility = "visible"; 
	} 
}; 

/**menu scroll**/
const menuItems = document.querySelectorAll('.menu-link');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
	event.preventDefault()
	const element = event.target;
	const to = getScrollTopByHref(event.target);

	scrollToPosition(to);
}

function scrollToPosition(to) {
	// window.scroll({
	// 	top: to,
	// 	behavior: "smooth",
	// });
	smoothScrollTo(0, to);
}

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;
}


/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 600;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

/**form**/
window.addEventListener("DOMContentLoaded", function() {

	// get the form elements defined in your form HTML above

	const form = document.getElementById("my-form");
	// const button = document.getElementById("my-form-button");
	const status = document.getElementById("status");

	// Success and Error functions for after the form is submitted

	function success() {
		form.reset();
		status.classList.add("success");
		status.innerHTML = "Thanks! your message was sent.";
	}

	function error() {

		status.classList.add("error")
		status.innerHTML = "Oops! There was a problem.";
	}

	// handle the form submission event

	form.addEventListener("submit", function(ev) {
		ev.preventDefault();
		const data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState !== XMLHttpRequest.DONE) return;
		if (xhr.status === 200) {
			success(xhr.response, xhr.responseType);
		} else {
			error(xhr.status, xhr.response, xhr.responseType);
		}
	};
	xhr.send(data);
}
