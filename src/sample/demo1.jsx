import React from "react";

function Demo(){

}

function Input(){
    return "    Subscribe   ";
}
function Output(){
    return "<div>" + Input().trim() + "</div>"
}
const result= Output();
console.log(result)

export default Demo;