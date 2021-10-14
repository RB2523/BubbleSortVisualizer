

        var check = true;   // to run the first if only one time
  

         function run() 
         {
              // parent element
             let parent = document.getElementById("container");  


              // the array which we give as input 
              var inputArrayStr = document.getElementById("arrayValues").value;
              var patt = new RegExp("^[0-9\\s]*$");

              // if the string is not as per our need we reject it 
               if(! patt.test(inputArrayStr) ){
                  alert("only numbers and space allowed");
                  return;
               } 

                 // we split the array with respect to delimiter
                 var tempArray = inputArrayStr.split(" ");



                 var inputArray = [];
                 // no of elements in the inputArray
                 var len = 0;



                 // this loop is used to remove the null string present in tempArray
                 for(var i=0; i<tempArray.length;i++)
                 {
                     if(tempArray[i] == "") continue;

                     // so that number greater than 999 can not accepted
                     if(tempArray[i].trim().length > 3){
                        alert("Please enter integers between 0 and 999");
                        return;
                     }

                     //here we cannot use i becaue then out inputArray sequence get changed
                      inputArray[len] = tempArray[i];
                      len++;
                 }

                 if(len < 5  ||  len> 10){
                      alert("Please enter 5 to 10 positive integers between 0 and 999");
                      return;
                  }

   
                  remove();


         let visualizer =     `<div id="visualizer">
                                    <legend id="legend2">VISUALIZE</legend>
       
                                         <div id="visualizer__arrayBox">
                                              <table id="table"> </table>
                                         </div>
       
                                         <div id="messageBox">
                                              <p id="heading">Steps:</p>
                                              <p id="message">Starting Bubble Sort</p>
                                         </div>
       
                                        <div id="visualizer--buttonBox">
                                               <button onclick="next()" id="next">Next</button>
                                        </div>
                              </div>`;

                   parent.insertAdjacentHTML("beforeend" , visualizer);



               let table = document.getElementById("table");
               let tr1 = table.insertRow(0);
               let tr2 = table.insertRow(1);

              tr1.setAttribute("id" , "row1");
              tr2.setAttribute("id" , "row2");

              for(let i=0; i<len ;i++)
              {
                   let td = document.createElement("td");
                   td.innerHTML = inputArray[i];
                    tr1.appendChild(td);
               }

      
               for(let i=0; i<len ;i++)
             {
                  let td = document.createElement("td");
                  td.innerHTML = i;
                  tr2.appendChild(td);
              }

               // so that if a person click on run again the check become true
              // and  in next function values will be reinitialize and 
              // we do not have to reload the page or we do not have to delete the box also
              check = true;
        }




 
          var table ;         //to get table 
          var row ;          //  get first row
          var td_array;     // get td array

                //this tell if a maximum element reached to end of the array or not
               // that is first pass is completed
           var lengthToComplete ;   //get td array length

         // these are used so that we can mark the current element on which we are
          var i ; 
          var j ;



            // these are used in second if to give appropriate message when the user click
           // secind if only run when user click first 2times
           var pass ;
           var arr = [ "For each pass, we will move left to right swapping adjacent elements as needed. Each pass moves the next largest element into its final position (these will be shown in green)."  ,
      "For each element moving through the list",
           ];
           var outputMessage ;  // will treat as index for the array "arr"


            var message ;  // to display/ change the message



    function next()
    {  
        // want to run these satatement one time only 
        //and their values will be assigned to gloabal variables and then we use them
        if(check){
             table = document.getElementById("table");
             row = table.rows[0];
             td_array = row.cells;

             pass = 0;
             outputMessage = -1; 

             i = -1; 
             j =  0;
         
             lengthToComplete = td_array.length;
             message = document.getElementById("message");

             //this if will run only one time
            check=false;  
        }


       // this if is used to change the message in the p tag
         if(outputMessage < arr.length-1){
                  outputMessage++;
                  message.textContent = arr[outputMessage];
                  return;
         }


       // current meximum element reached to its correct position
         if(lengthToComplete -1 == 0){
               td_array[0].style.backgroundColor = "#73b369";
               td_array[0].style.color = "white";
               message.textContent = "Done sorting!";
              return;
          }


           // to start comparing the element
           // so that we can start the process
           if(i == -1){
                i++;
                j++;
                td_array[i].style.backgroundColor = "rgba(76,156,223,0.5)";
                td_array[j].style.backgroundColor = "rgba(76,156,223,0.5)";
                 message.textContent = "Starting pass "+pass +"  Compare Elements";
                 pass++;
                return;
               }

 
                 //  now here we are comparing the elements [i]  with   [j]
                 // if arr[i] > arr[j]   swap
                 // otherwise
                 //first check if they already in ascending order and j reached to end of 
                 // otherwise
                 //move ahead in the array
                       if(  parseInt(td_array[i].textContent)  > parseInt(td_array[j].textContent)  )
                       {
                             let temp = td_array[i].textContent;
                             td_array[i].textContent = td_array[j].textContent;
                             td_array[j].textContent = temp;
                              message.textContent = "Swap";
              
                           return;
                        }
                         else
                        {
                         // if alerady in ascending order and j reached to end of array
                          if(j == lengthToComplete-1)
                          {
                                td_array[i].style.backgroundColor = "white";
                                td_array[j].style.backgroundColor ="#73b369";
                                td_array[j].style.color ="white";
                               lengthToComplete--;
                               i = -1;
                               j = 0;
                              message.textContent = "Done this pass. The last element processed is now in its final position.";
                              return;
                         }
            
                         // here moving ahead in the array
                          td_array[i].style.backgroundColor = "white";
                          i++;
                          j++;
                          td_array[j].style.backgroundColor = "rgba(76,156,223,0.5)";
                           message.textContent = "Compare elements";
                           return;
                     }
    }



      function remove()
      {
          // parent element
          let parent = document.getElementById("container");  

          // this code prevent the run button to add more "visualizer" box in container
          // means run button only work one time
          // if this child present then remove it then again append it otherwise simply append it
            let lastChile = document.getElementById("visualizer");


         if(lastChile != null){
             parent.removeChild(parent.lastElementChild);
           }
      }