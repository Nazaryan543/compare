function f(){
    let a = document.getElementById("myInput1").value;
    let a2 = document.getElementById("myInput2").value;
    let longestmatch =0
    let longestmatchString = ''
    for(let i=0;i<a.length;i++){
        for(let j=0; j<a2.length;j++){
            let match = 0
            let matchString = ''
            while(a[i+match]==a2[j+match]){
                matchString = matchString+a[i+match]
                match++
                if(!a[i+match] || !a2[j+match]){
                    break
                }
            }
            if(match>longestmatch){
                longestmatch=match
            }
            if(matchString.length >longestmatchString.length){
                longestmatchString = matchString
            }
        }
    }
    alert(longestmatchString)

}
