document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready");
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue= "";
    function evaluateResult(){
      console.log('currentValue:', currentValue)
      const convertedValue = currentValue
      .replace("×","*")
      .replace("÷","/")
      .replace("%",'*0.1');

      console.log('convertedValue:', convertedValue)
      const result = eval(convertedValue);
      currentValue = result.toString();
      display.value = currentValue;
    }

    for (let i=0; i< buttons.length; i++) {
        const button = buttons[i]
        button.addEventListener('click', function() {
          console.log('button clicked:', button.innerText);
          const value = button.innerText;

          if (value == "AC"){
          currentValue = "";
          display.value=currentValue;     
          } else if(value == "=") {
            evaluateResult();

          }
          
          else {          
        currentValue += value;
        // console.log('currentValue:', currentValue);
        display.value = currentValue;
          }
    })
}
});