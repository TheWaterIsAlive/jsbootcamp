function add(numb1, numb2){
var total = numb1 + numb2;

return total;


}


function remain(numb1, numb2){
    var left = numb1 % numb2;
    
    return left;
    
    
    }


    function triangle(base, height){
        var area = (base * height)/2
        
        return area;
        
        
        }

        function triangleEdge(side1, side2){

         
            var side3 = (side1 + side2) -1;
            
                if(side3 > 0){
                    return side3;
                }
                else{ 
                    return "Not valid";
                }
           
            
            }



            function plusOne(numb1){
                var total = numb1 + 1;
                
                return total;
                
                
                }


                /* 6. Multiple of 200
                function by200(numb1){
                    var remaining = numb1 / 200;
                    remaining = remain % 2;

                    if(remaining == 0){
                        return true;

                    }
                    else{

                        return false;
                    }
                    
                    
                    }
*/

                    function empty(text){

                        if(text == ""){
                            return true;
                        }
                        else{

                            return false;

                        }

                    }


                    function length(text1, text2){

                        var count1 = text1.length;
                        var count2 = text2.length;

                        if(count1 == count2){
                            return true;
                        }
                        else{

                            return false;

                        }

                    }

                    function plural(text){

                       var last = text[text.length - 1]

                        if(last === "s"){
                            return true;
                        }
                        else{

                            return false;

                        }

                    }

                    function powerOf(numb, expo){

                        var powerful = Math.pow(numb, expo);
                        
                        return powerful;

                    }



console.log(add(1, 2));
console.log(remain(5, 2));
console.log(triangle(4, 4));
console.log(triangleEdge(4, 4));
console.log(triangleEdge(0, 0));
console.log(plusOne(4));
/*
console.log(by200(200));
console.log(by200(201));
console.log(by200(199));
console.log(by200(0));
console.log(by200(2000));
*/
console.log(empty(""));
console.log(empty(" "));
console.log(empty("a"));
console.log(length("a", "a"));
console.log(length("a", "ab"));
console.log(length("cd", "ay"));
console.log(plural("dogs"));
console.log(plural("dog"));
console.log(powerOf("2", "5"));