// Scroll To Section - Start
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function() {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      50
    );

    return false;
  });
// Scroll To Section - End

// Accordion Menu - Start
const links = document.getElementsByClassName("nav-link"); // links = HTMLCollection

const linksLen = links.length;
var i;

for (i = 0; i < linksLen; i++) {
  links[i].addEventListener("click", function(event) {
    event.preventDefault();

    $(".nav-link")
      .siblings()
      .removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("dropdown-btn")) {
      $(".dropdown-container").css("display", "none");

      var dropdownContent = this.nextElementSibling;
      dropdownContent.style.display = "block";

      return;
    }

    if (
      $(this)
        .closest("div")
        .hasClass("dropdown-container")
    ) {
      return;
    } else {
      $(".dropdown-container").css("display", "none");
    }
  });
}
// Accordion Menu - End

// Tabs - Start
function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks, activetabs;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab-link" and remove the class "active-tab"
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }

  // Show the current tab, and add an "active-tab" class to the button that opened the tab
  activetabs = document.getElementsByClassName(tabName);
  for (i = 0; i < activetabs.length; i++) {
    activetabs[i].style.display = "block";
  }
  
  evt.currentTarget.className += " active-tab";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
// Tabs - End

// init prism
Prism.highlightAll();

Prism.plugins.NormalizeWhitespace.setDefaults({
	'remove-trailing': true,
	'remove-indent': true,
	'left-trim': true,
	'right-trim': true,
	'break-lines': 80,
	'indent': 2,
	'remove-initial-line-feed': false,
	'tabs-to-spaces': 4,
	'spaces-to-tabs': 4
});
