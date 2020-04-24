/* SLEEP DEBT CALCULATOR PROJECT FROM CODECADEMY*/
const getSleepHours = day => {
    if (day === 'monday')
    {
      return 7;
    } 
    else if (day === 'tuesday')
    {
      return 6;
    }
    else if (day === 'wednesday')
    {
      return 7;
    }
    else if (day === 'thursady')
    {
      return 5;
    }
    else if (day === 'friday')
    {
      return 6;
    }
    else if (day === 'saturday')
    {
      return 7;
    }
    else if (day === 'sunday')
    {
      return 8;
    }
    else
    {
      return 'Error!';
    }
  
  };
  const getActualSleepHours = () => 7 + 6 + 7 + 5 + 6 + 7 + 8;
  //implicitly calling the return statement 
   
  
   const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours)
    {
      console.log("Perfect Sleep!");
    }
    else if (actualSleepHours > idealSleepHours)
    {
      console.log("Wake up sleepy head! You sleep more than its required");
    }
    else
    {
      console.log("Get some sleep!");
    }
    if(actualSleepHours < idealSleepHours)
    {
      console.log('You get ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  
  
  };
  calculateSleepDebt('thursday');