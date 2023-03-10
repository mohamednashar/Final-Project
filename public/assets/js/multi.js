window.onload = (event) => {
    initMultiselect();
  };
  
  function initMultiselect() {
    checkboxStatusChange();

  
    document.addEventListener("click", function(evt) {
      var flyoutElement = document.getElementById('myMultiselect'),
        targetElement = evt.target; // clicked element
  
      do {
        if (targetElement == flyoutElement) {
          // This is a click inside. Do nothing, just return.
          //console.log('click inside');
          return;
        }
  
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
  
      // This is a click outside.
      toggleCheckboxArea(true);
      //console.log('click outside');
    });
  }
  
  function checkboxStatusChange() {
    var multiselect = document.getElementById("mySelectLabel");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];
  
    var values = [];
    var checkboxes = document.getElementById("mySelectOptions");
    var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');
  
    for (const item of checkedCheckboxes) {
      var checkboxValue = item.getAttribute('value');
      values.push(checkboxValue);
    }
  
    var dropdownValue = "Nothing is selected";
    if (values.length > 0) {
      dropdownValue = values.join(', ');
    }
  
    multiselectOption.innerText = dropdownValue;
  }
  
  function toggleCheckboxArea(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectOptions");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

  function initMultiselect2() {
    checkboxStatusChange2();

  
    document.addEventListener("click", function(evt) {
      var flyoutElement2 = document.getElementById('myMultiselect2'),
        targetElement2 = evt.target; // clicked element
  
      do {
        if (targetElement2 == flyoutElement2) {
          // This is a click inside. Do nothing, just return.
          //console.log('click inside');
          return;
        }
  
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
  
      // This is a click outside.
      toggleCheckboxArea2(true);
      //console.log('click outside');
    });
  }
  
  function checkboxStatusChange2() {
    var multiselect2 = document.getElementById("mySelectLabel2");
    var multiselectOption2 = multiselect2.getElementsByTagName('option')[0];
  
    var values2 = [];
    var checkboxes2 = document.getElementById("mySelectOptions2");
    var checkedCheckboxes2 = checkboxes.querySelectorAll('input[type=checkbox]:checked');
  
    for (const item2 of checkedCheckboxes2) {
      var checkboxValue2 = item2.getAttribute('value');
      values.push(checkboxValue2);
    }
  
    var dropdownValue2 = "Nothing is selected";
    if (values2.length > 0) {
      dropdownValue = values2.join(', ');
    }
  
    multiselectOption2.innerText = dropdownValue2;
  }
  
  function toggleCheckboxArea2(onlyHide2 = false) {
    var checkboxes2 = document.getElementById("mySelectOptions2");
    var displayValue2 = checkboxes2.style.display;
  
    if (displayValue2 != "block") {
      if (onlyHide2 == false) {
        checkboxes2.style.display = "block";
      }
    } else {
      checkboxes2.style.display = "none";
    }
  }

