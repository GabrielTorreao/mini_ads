function addCreativeField() {
 
    //create Date object
    var date = new Date();
 
    //get number of milliseconds since midnight Jan 1, 1970 
    //and use it for address key
    var mSec = date.getTime(); 
 
    //Replace 0 with milliseconds
    idAttributBid =  
          "ad_creatives_attributes_0_bid".replace("0", mSec);
    nameAttributBid =  
          "ad[creatives_attributes][0][bid]".replace("0", mSec);
 
    idAttributAdText =  
          "ad_creatives_attributes_0_adText".replace("0", mSec);
    nameAttributAdText =  
          "ad[creatives_attributes][0][adText]".replace("0", mSec);
        
    //create <li> tag
    var li = document.createElement("li");
 
    //create label for Kind, set it's for attribute, 
    //and append it to <li> element
    var labelBid = document.createElement("label");
    labelBid.setAttribute("for", idAttributBid);
    var bidLabelText = document.createTextNode("Bid");
    labelBid.appendChild(bidLabelText);
    li.appendChild(labelBid);
 
    //create input for Kind, set it's type, id and name attribute, 
    //and append it to <li> element
    var inputBid = document.createElement("INPUT");
    inputBid.setAttribute("type", "text");
    inputBid.setAttribute("id", idAttributBid);
    inputBid.setAttribute("name", nameAttributBid);
    li.appendChild(inputBid);
 
    //create label for Street, set it's for attribute, 
    //and append it to <li> element
    var labelAdText = document.createElement("label");
    labelAdText.setAttribute("for", idAttributAdText);
    var adTextLabelText = document.createTextNode("AdText");
    labelAdText.appendChild(adTextLabelText);
    li.appendChild(labelAdText);
 
    //create input for Street, set it's type, id and name attribute, 
    //and append it to <li> element
    var inputAdText = document.createElement("INPUT");
    inputAdText.setAttribute("type", "text");
    inputAdText.setAttribute("id", idAttributAdText);
    inputAdText.setAttribute("name", nameAttributAdText);
    li.appendChild(inputAdText);
 
    //add created <li> element with its child elements 
    //(label and input) to myList (<ul>) element
    document.getElementById("myList").appendChild(li);
 
    //show address header
    $("#addressHeader").show(); 
}