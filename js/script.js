// Accordion
$(function() {
      $("#accordion").accordion();
    });

// Auto complete
$(function() {
      var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++"];
      $("#tags").autocomplete({
        source: availableTags
      });
    });

// Button
$(function() {
      $("#button").button();
    });

// Date picker
$(function() {
      $("#datepicker").datepicker();
    });

// Dialog
$(function() {
      $("#dialog").dialog();
    });

// Menu
$(function() {
      $("#menu").menu();
    });

// Progressbar
$(function() {
      $("#progressbar").progressbar({
        value: 50
      });
    });

// Slider
$(function() {
      $("#slider").slider();
    });

// Spinner
$(function() {
      $("#spinner").spinner();
    });

// Tabs
$(function() {
      $("#tabs").tabs();
    });

// Tooltips
$(function() {
      $(document).tooltip();
    });

// Selectmenu
$(function() {
      $("#speed").selectmenu();
    });

// Dialog with buttons

$(function() {
      $("#dialog-confirm").dialog({
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
          "Delete all items": function() {
            $(this).dialog("close");
          },
          Cancel: function() {
            $(this).dialog("close");
          }
        }
      });
    });

// Draggable
$(function() {
      $("#draggable").draggable();
    });

// Droppable
$(function() {
      $("#draggable2").draggable();
      $("#droppable").droppable({
        drop: function(event, ui) {
          $(this)
            .addClass("ui-state-highlight")
            .find("p")
            .html("Dropped!");
        }
      });
    });



// JavaScript for Example 51
function addNumbers() {
    var result = 5 + 3;
    document.getElementById("addNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 52
function subtractNumbers() {
    var result = 5 - 3;
    document.getElementById("subtractNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 53
function multiplyNumbers() {
    var result = 5 * 3;
    document.getElementById("multiplyNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 54
function divideNumbers() {
    var result = 5 / 3;
    document.getElementById("divideNumbersResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 55
function findRemainder() {
    var result = 5 % 3;
    document.getElementById("findRemainderResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 56
function calculatePower() {
    var result = Math.pow(2, 3);
    document.getElementById("calculatePowerResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 57
function calculateSquareRoot() {
    var result = Math.sqrt(9);
    document.getElementById("calculateSquareRootResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 58
function generateRandomNumber() {
    var result = Math.random();
    document.getElementById("randomNumberResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 59
function checkEvenOdd() {
    var number = 4;
    var result = (number % 2 === 0) ? "Even" : "Odd";
    document.getElementById("evenOddResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 60
function useMathPI() {
    var result = Math.PI;
    document.getElementById("mathPIResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 61
function useMathFloor() {
    var result = Math.floor(4.7);
    document.getElementById("mathFloorResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 62
function useMathCeil() {
    var result = Math.ceil(4.3);
    document.getElementById("mathCeilResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 63
function useMathRound() {
    var result = Math.round(4.5);
    document.getElementById("mathRoundResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 64
function findMax() {
    var result = Math.max(1, 2, 3, 4, 5);
    document.getElementById("maxResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 65
function findMin() {
    var result = Math.min(1, 2, 3, 4, 5);
    document.getElementById("minResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 66
function convertStringToNumber() {
    var str = "123";
    var result = Number(str);
    document.getElementById("stringToNumberResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 67
function convertNumberToString() {
    var num = 123;
    var result = num.toString();
    document.getElementById("numberToStringResult").innerHTML = "Result: " + result;
}

// JavaScript for Example 68
function stringLength() {
    var str = "Hello, World!";
    var result = str.length;
    document.getElementById("stringLengthResult").innerHTML = "Length: " + result;
}

// JavaScript for Example 69
function stringIndexOf() {
    var str = "Hello, World!";
    var result = str.indexOf("World");
    document.getElementById("stringIndexOfResult").innerHTML = "Index: " + result;
}

// JavaScript for Example 70
function stringSubstring() {
    var str = "Hello, World!";
    var result = str.substring(7, 12);
    document.getElementById("stringSubstringResult").innerHTML = "Substring: " + result;
}

// JavaScript for Example 71
function convertToUppercase() {
    var str = "hello world";
    var result = str.toUpperCase();
    document.getElementById("uppercaseResult").innerHTML = "Uppercase: " + result;
}

// JavaScript for Example 72
function convertToLowercase() {
    var str = "HELLO WORLD";
    var result = str.toLowerCase();
    document.getElementById("lowercaseResult").innerHTML = "Lowercase: " + result;
}

// JavaScript for Example 73
function replaceStringContent() {
    var str = "Hello, World!";
    var result = str.replace("World", "JavaScript");
    document.getElementById("replaceStringContentResult").innerHTML = "Replaced: " + result;
}

// JavaScript for Example 74
function splitString() {
    var str = "Hello, World!";
    var result = str.split(",");
    document.getElementById("splitStringResult").innerHTML = "Split: " + result.join(" - ");
}

// JavaScript for Example 75
function joinArray() {
    var arr = ["Hello", "World"];
    var result = arr.join(", ");
    document.getElementById("joinArrayResult").innerHTML = "Joined: " + result;
}

// JavaScript for Example 76
function trimString() {
    var str = "    Hello, World!    ";
    var result = str.trim();
    document.getElementById("trimStringResult").innerHTML = "Trimmed: " + result;
}

// JavaScript for Example 77
function createDate() {
    var date = new Date();
    document.getElementById("dateResult").innerHTML = "Date: " + date;
}

// JavaScript for Example 78
function getCurrentDate() {
    var date = new Date();
    document.getElementById("currentDateResult").innerHTML = "Current Date: " + date.toDateString();
}

// JavaScript for Example 79
function getDayOfWeek() {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var date = new Date();
    var day = days[date.getDay()];
    document.getElementById("dayOfWeekResult").innerHTML = "Day of the Week: " + day;
}

// JavaScript for Example 80
function getMonthOfYear() {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var month = months[date.getMonth()];
    document.getElementById("monthOfYearResult").innerHTML = "Month of the Year: " + month;
}

// JavaScript for Example 81
function getYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("yearResult").innerHTML = "Year: " + year;
}

// JavaScript for Example 82
function getHours() {
    var date = new Date();
    var hours = date.getHours();
    document.getElementById("hoursResult").innerHTML = "Hours: " + hours;
}

// JavaScript for Example 83
function getMinutes() {
    var date = new Date();
    var minutes = date.getMinutes();
    document.getElementById("minutesResult").innerHTML = "Minutes: " + minutes;
}

// JavaScript for Example 84
function getSeconds() {
    var date = new Date();
    var seconds = date.getSeconds();
    document.getElementById("secondsResult").innerHTML = "Seconds: " + seconds;
}

// JavaScript for Example 85
function setHours() {
    var date = new Date();
    date.setHours(10);
    document.getElementById("setHoursResult").innerHTML = "Hours set to: " + date.getHours();
}

// JavaScript for Example 86
function setMinutes() {
    var date = new Date();
    date.setMinutes(30);
    document.getElementById("setMinutesResult").innerHTML = "Minutes set to: " + date.getMinutes();
}

// JavaScript for Example 87
function setSeconds() {
    var date = new Date();
    date.setSeconds(45);
    document.getElementById("setSecondsResult").innerHTML = "Seconds set to: " + date.getSeconds();
}

// JavaScript for Example 88
var timer;
function startTimer() {
    var counter = 0;
    timer = setInterval(function() {
        counter++;
        document.getElementById("timerResult").innerHTML = "Timer: " + counter + " seconds";
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

// JavaScript for Example 89
function stopTimer() {
    clearInterval(timer);
}

// JavaScript for Example 90
function getElementByQuerySelector() {
    var element = document.querySelector("#querySelectorResult");
    element.innerHTML = "Element selected by query selector!";
}

// JavaScript for Example 91
function getElementsByQuerySelectorAll() {
    var elements = document.querySelectorAll("p");
    var result = "";
    elements.forEach(function(element) {
        result += element.innerHTML + " ";
    });
    document.getElementById("querySelectorAllResult").innerHTML = result;
}

// JavaScript for Example 92
function checkCheckboxStatus() {
    var checkbox = document.getElementById("checkbox");
    var result = checkbox.checked ? "Checked" : "Unchecked";
    document.getElementById("checkboxStatusResult").innerHTML = "Checkbox is " + result;
}

// JavaScript for Example 93
function enableButton() {
    document.getElementById("enableButton").disabled = false;
}

// JavaScript for Example 94
function disableButton() {
    document.getElementById("disableButton").disabled = true;
}

// JavaScript for Example 95
function changeImageOnHover() {
    document.getElementById("hoverImage").src = "image2.jpg";
}

function resetImage() {
    document.getElementById("hoverImage").src = "image1.jpg";
}

// JavaScript for Example 96
function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
}

// JavaScript for Example 97
function playAudio2() {
    var audio = document.getElementById("audio2");
    audio.play();
}

function pauseAudio2() {
    var audio = document.getElementById("audio2");
    audio.pause();
}

// JavaScript for Example 98
function createIframe() {
    var iframe = document.createElement("iframe");
    iframe.src = "https://example.com";
    document.getElementById("iframeResult").appendChild(iframe);
}

// JavaScript for Example 99
function changeIframeSource() {
    var iframe = document.getElementById("iframe");
    iframe.src = "https://example.com";
}

// JavaScript for Example 100
function removeIframe() {
    var iframe = document.getElementById("iframe");
    iframe.parentNode.removeChild(iframe);
}



$(document).ready(function() {
  // Example 1: Hide a div
  $('#hideDiv1').click(function() {
    $('#div1').hide();
  });

  // Example 2: Show a div
  $('#showDiv2').click(function() {
    $('#div2').show();
  });

  // Example 3: Toggle visibility of a div
  $('#toggleDiv3').click(function() {
    $('#div3').toggle();
  });

  // Example 4: Fade out a div
  $('#fadeOutDiv4').click(function() {
    $('#div4').fadeOut();
  });

  // Example 5: Fade in a div
  $('#fadeInDiv5').click(function() {
    $('#div5').fadeIn();
  });

  // Example 6: Slide up a div
  $('#slideUpDiv6').click(function() {
    $('#div6').slideUp();
  });

  // Example 7: Slide down a div
  $('#slideDownDiv7').click(function() {
    $('#div7').slideDown();
  });

  // Example 8: Slide toggle a div
  $('#slideToggleDiv8').click(function() {
    $('#div8').slideToggle();
  });

  // Example 9: Change text of a paragraph
  $('#changeText9').click(function() {
    $('#p9').text('New text');
  });

  // Example 10: Change HTML content of a div
  $('#changeHtml10').click(function() {
    $('#div10').html('<strong>New content</strong>');
  });

  // Example 11: Append content to a div
  $('#appendDiv11').click(function() {
    $('#div11').append(' Appended content.');
  });

  // Example 12: Prepend content to a div
  $('#prependDiv12').click(function() {
    $('#div12').prepend('Prepended content. ');
  });

  // Example 13: Add a CSS class to a div
  $('#addClass13').click(function() {
    $('#div13').addClass('blue');
  });

  // Example 14: Remove a CSS class from a div
  $('#removeClass14').click(function() {
    $('#div14').removeClass('blue');
  });

  // Example 15: Toggle a CSS class
  $('#toggleClass15').click(function() {
    $('#div15').toggleClass('blue');
  });

  // Example 16: Change CSS property
  $('#changeCss16').click(function() {
    $('#div16').css('color', 'red');
  });

  // Example 17: Get input value
  $('#getValue17').click(function() {
    var value = $('#input17').val();
    $('#output17').text('Input value: ' + value);
  });

  // Example 18: Set input value
  $('#setValue18').click(function() {
    $('#input18').val('New value');
  });

  // Example 19: Disable a button
  $('#disableButton19').click(function() {
    $('#button19').prop('disabled', true);
  });

  // Example 20: Enable a button
  $('#enableButton20').click(function() {
    $('#button20').prop('disabled', false);
  });

  // Example 21: Handle click event
  $('#clickButton21').click(function() {
    $('#output21').text('Button clicked!');
  });

  // Example 22: Handle double-click event
  $('#dblClickButton22').dblclick(function() {
    $('#output22').text('Button double-clicked!');
  });

  // Example 23: Handle hover event
  $('#hoverDiv23').hover(function() {
    $('#output23').text('Hovering!');
  }, function() {
    $('#output23').text('Not hovering!');
  });

  // Example 24: Animate div width
  $('#animateDiv24').click(function() {
    $('#div24').animate({width: '200px'});
  });

  // Example 25: Animate multiple CSS properties
  $('#animateDiv25').click(function() {
    $('#div25').animate({
      width: '200px',
      height: '200px',
      opacity: 0.5
    });
  });

  // Example 26: Animate with callback
  $('#animateDiv26').click(function() {
    $('#div26').animate({width: '200px'}, function() {
      alert('Animation complete');
    });
  });

  // Example 27: Show alert on page load
  alert('Page has loaded');

  // Example 28: Append item to list
  $('#appendItem28').click(function() {
    $('#list28').append('<li>New item</li>');
  });

  // Example 29: Hide all paragraphs
  $('#hideAllParagraphs29').click(function() {
    $('p').hide();
  });

  // Example 30: Fade in and out with delay
  $('#fadeInOut30').click(function() {
    $('#div30').fadeOut(500).delay(500).fadeIn(500);
  });

  // Example 31: Get attribute value
  $('#getAttr31').click(function() {
    alert($('#image31').attr("src", "../assets/portfolio4.png"));
  });

  // Example 32: Set attribute value
  $('#setAttr32').click(function() {
    $('#image32').attr('src', '../assets/portfolio5.png');
  });

  // Example 33: Remove element
  $('#removeP33').click(function() {
    $('#p33').remove();
  });

  // Example 34: Empty an element
  $('#emptyDiv34').click(function() {
    $('#div34').empty();
  });

  // Example 35: Clone an element
  $('#cloneDiv35').click(function() {
    $('#div35').clone().insertAfter('#div35');
  });

  // Example 36: Change image source
  $('#changeSrc36').click(function() {
    $('#image36').attr('src', '../assets/portfolio6.png');
  });

  // Example 37: Check if checkbox is checked
  $('#isChecked37').click(function() {
    alert($('#checkbox37').is(':checked'));
  });

  // Example 38: Disable a form field
  $('#disableInput38').click(function() {
    $('#input38').prop('disabled', true);
  });

  // Example 39: Enable a form field
  $('#enableInput39').click(function() {
    $('#input39').prop('disabled', false);
  });

  // Example 40: Focus on an input field
  $('#focusInput40').click(function() {
    $('#input40').focus();
  });

  // Example 41: Blur an input field
  $('#blurInput41').click(function() {
    $('#input41').blur();
  });

  // Example 42: Select content in input
  $('#selectText42').click(function() {
    $('#input42').select();
  });

  // Example 43: Add content after a div
  $('#addAfterDiv43').click(function() {
    $('#div43').after('<p>Added content after</p>');
  });

  // Example 44: Add content before a div
  $('#addBeforeDiv44').click(function() {
    $('#div44').before('<p>Added content before</p>');
  });

  // Example 45: Trigger a click event
  $('#triggerClick45').click(function() {
    $('#clickMeButton45').trigger('click');
  });

  $('#clickMeButton45').click(function() {
    alert('Button clicked!');
  });

  // Example 46: Fade toggle a div
  $('#fadeToggleDiv46').click(function() {
    $('#div46').fadeToggle();
  });

  // Example 47: Detect scroll event
  $('#scrollDiv47').scroll(function() {
    $('#scrollOutput47').text('Scrolling...');
  });

  // Example 48: Load content from another file
  $('#loadContent48').click(function() {
    $('#div48').load('content.html');
  });

  // Example 49: Get the size of a div
  $('#getSize49').click(function() {
    alert('Width: ' + $('#div49').width() + ', Height: ' + $('#div49').height());
  });

  // Example 50: Scroll to a specific element
  $('#scrollToButton50').click(function() {
    $('html, body').animate({
      scrollTop: $('#scrollToP50').offset().top
    }, 1000);
  });
});

// if else condiiton
 $(document).ready(function() {
            $("#checkButton").click(function() {
                // Get the value from the input field
                let number = parseInt($("#numberInput").val());

                // Check the condition
                if (number > 10) {
                    $("#result").text("The number is greater than 10.").css("color", "green");
                } else {
                    $("#result").text("The number is 10 or less.").css("color", "red");
                }
            });
        });

 $(document).ready(function(){
            var count = 0;
            setInterval(function(){
                count++;
                $('#counter1').text(count);
            }, 1000); 
        });

 $(document).ready(function(){
            var count = 10;
            var countdown = setInterval(function(){
                count--;
                $('#counter2').text(count);
                if (count === 0) {
                    clearInterval(countdown);
                    alert("Time's up!");
                }
            }, 1000); 
        });

$(document).ready(function(){
            $({countNum: $('#counter').text()}).animate({countNum: 100}, {
                duration: 5000,
                easing: 'linear',
                step: function() {
                    $('#counter3').text(Math.floor(this.countNum));
                },
                complete: function() {
                    $('#counter3').text(this.countNum);
                }
            });
        });