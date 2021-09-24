window.onload = function () {
    initColorPicker();
};

function initColorPicker () {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");

    setColorPickerEventListeners(colorBox, rgb, colorPickers);
    }
    function setColorPickerEventListeners(element, colors, pickerElements){
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++){
            pickerElements[i].addEventListener("change", () => {
                let red = colors.red.value;
                let green = colors.green.value;
                let blue = colors.blue.value
                setElementBGColor(element, red, green, blue);
                setDisplayValues(red, green, blue);
            });

        }}

        function setElementBGColor(element, red, green, blue) {
            let rgbVal = [red, green, blue].join(",");
            element.style.backgroundColor = "rgb(" + rgbVal + ")";
        }

        function setDisplayValues(red, green, blue) {
            let redVal = document.getElementById("redVal")
            let greenVal = document.getElementById("greenVal")
            let blueVal = document.getElementById("blueVal")

            redVal.innerText = red;
            greenVal.innerText = green;
            blueVal.innerText = blue;



       /* rgb.red.addEventListener("change", () => {
            console.log("Red value:", rgb.red.value);
            setBoxBGColor(colorBox, rgb.red.value.value, rgb.blue.value);
        });
        rgb.green.addEventListener("change", () => {
            console.log("Green value:", rgb.blue.value);
            setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
        });
        rgb.blue.addEventListener("change", () => {
            console.log("Blue value:", rgb.blue.value);
            setBoxBGColor(colorBox, rgb.red.value, rgb.green.value, rgb.blue.value);
        });
        }
            function setBoxBGColor(colorBox, red, green, blue){
                let rgbVal = [red, green, blue].join(",");
                colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
            }

        /*    let pickerLen = pickerElements.length;

        for (let i = 0; i < pickerLen; i++)
               pickerElements[i].addEventListener("change", () => {

                   let red = colors.red.value;
                   let green = colors.green.value;
                   let blue = colors.blue.value
                   setElementBGColor(element, red, green, blue);
         *          setDisplayValues(red, green, blue)

               }); */
     //  let colorPickers = document.getElementsByClassName("picker")





   //setColorPickerEventListeners(colorBox, rgb, colorPickers );

   }


   /*
   }

   function setElementBGColor(bgElement, red, green , blue) {
       let rgbVal = [red, green, blue].join(",");
       bgElement.style.backgroundColor = "rgb(" + rgbVal + ")";

       function setDisplayValues(red, green, blue) {
           let redVal = document.getElementById("redVal");
           let greenVal = document.getElementById("greenVal");
           let blueVal = document.getElementById("blueVal");

           redVal.innerText = red;
           redVal.innerText = blue;
           redVal.innerText = green;
       }
   }

           rgb.red.addEventListener("change", () => {
           console.log("red value: , rgb.red.value");

       });
       rgb.green.addEventListener("change", () => {
           console.log("green value: , rgb.green.value");
           setBoxBGColor(colorBox, rgb.red.value, rgb.green.value , rgb.blue.value);
       });
       rgb.blue.addEventListener("change", () => {
           console.log("blue value: , rgb.blue.value");
           setBoxBGColor(colorBox, rgb.red.value, rgb.green.value , rgb.blue.value);
       });


   function changeColorVal(e) {
       let target = e.target
       let parent = target.parentElement
       let span = parent.getElementsByTagName("span")[0]
       span.innerText = target.value
       console.log(target.value)
       */

//}
    /*
function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let blueSlider = document.getElementById("blue");

    blueSlider.onchange = changeColorVal;



    let redSlider = document.getElementById("red");

    redSlider.onchange = changeColorVal;

    function initColorPicker() {

        let greenSlider = document.getElementById("green");

        greenSlider.onchange = changeColorVal;
            */





