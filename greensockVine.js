//draw();

const numOfPoints = 20;
var lastUpdatedPt = 0;

var vineCount = 0;
var vineList = [];

var starCount = 0;
var dotCount = 0;

// var star = `<?xml version="1.0" encoding="UTF-8"?>
// <svg width="185px" height="176px" viewBox="0 0 185 176" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//     <!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
//     <title>Star</title>
//     <desc>Created with Sketch.</desc>
//     <defs></defs>
//     <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//         <polygon id="Star" stroke="#343313" stroke-width="3" fill="#FAE736" points="92.5 144.25 37.5420789 173.143089 48.0381079 111.946544 3.57621573 68.606911 65.0210395 59.6784555 92.5 4 119.978961 59.6784555 181.423784 68.606911 136.961892 111.946544 147.457921 173.143089"></polygon>
//     </g>
// </svg>`;



// function draw() {
//     // var canvas = document.getElementById("canvas");
//     // var ctx = canvas.getContext("2d");
    
//     var t1 = new TimelineLite();

//     //t1.reverse();
//     t1.from("#vine0", 2, {drawSVG:"0%"}, 0.1);

//     //TweenLite.fromTo("#vine", 2, {drawSVG:"0%"}, {drawSVG:"10% 0%", delay:0.5});
// }
var t1 = new TimelineLite();
insertSegment = function() {
    var vineSVGString = `<?xml version="1.0" encoding="UTF-8"?>
<svg class="vine" width="153px" height="497px" viewBox="0 0 153 497" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
    <title>Path</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path id="vine`+vineCount+`" d="M30.1289063,496.585937 C30.2886207,462.652873 38.2821103,442.240113 54.109375,435.347656 C86.2578125,421.347656 98.9436074,409.437683 110.617188,397.710938 C127.451796,380.799659 114.11421,364.151837 92.5859375,349.082031 C70.1995735,347.919302 49.3805631,341.471386 30.1289063,329.738281 C-8.95870385,305.915968 0.299633475,279.596243 30.1289063,243.335938 C51.8710937,216.90625 103.968948,223.366408 123.316406,201.027344 C158.027344,160.949219 155.507812,152.050781 123.316406,102.222656 C107.698624,78.0483538 41.7226563,63.1914062 30.1289063,1.625" id="Path" stroke="#2B7A17" stroke-width="8"></path>
    </g>
</svg>`;

    $(".vineContainerHolderKingDaddyMaster").prepend("<div class='vineContainer' id='vineContainer"+vineCount+"'></div>");
    $("#vineContainer"+vineCount).css("position", "relative");
    $("#vineContainer"+vineCount).append(vineSVGString);

    var vine = {};
    vine.svg = vineSVGString;
    vine.index = vineCount;
    vine.id = "#vineContainer"+vineCount;
    vine.stars = [];
    vine.dots = [];
    vineList.push(vine);


    // var t1 = new TimelineLite();

    t1.from("#vine"+vineCount, 2, {drawSVG:"0%"}, 0.1);
    vineCount += 1;

    console.log("total", t1.duration() * 1000);

}

var myPathString = "M30.1289063,496.585937 C30.2886207,462.652873 38.2821103,442.240113 54.109375,435.347656 C86.2578125,421.347656 98.9436074,409.437683 110.617188,397.710938 C127.451796,380.799659 114.11421,364.151837 92.5859375,349.082031 C70.1995735,347.919302 49.3805631,341.471386 30.1289063,329.738281 C-8.95870385,305.915968 0.299633475,279.596243 30.1289063,243.335938 C51.8710937,216.90625 103.968948,223.366408 123.316406,201.027344 C158.027344,160.949219 155.507812,152.050781 123.316406,102.222656 C107.698624,78.0483538 41.7226563,63.1914062 30.1289063,1.625";

var points = extractPoints(myPathString);

var checkProgressTime = setInterval(function() {
    // console.log(t1.progress());
    if (t1.progress() >= 1) clearInterval(checkProgressTime);

    if ((lastUpdatedPt * 100 / numOfPoints) < t1.progress() * 100) {
        drawDotOnPath(points[lastUpdatedPt].x, points[lastUpdatedPt].y);
        lastUpdatedPt++;
    }
}, 25);

insertSegment();

console.log(points);

//drawStarOnPath(points);

function drawStarOnPath(points) {
    var starSVGString = `<?xml version="1.0" encoding="UTF-8"?>
    <svg id="star`+starCount+`" width="57px" height="54px" viewBox="0 0 57 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
        <title>Star</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <polygon id="Star" stroke="#343313" fill="#FAE736" points="28.5 44.25 11.1603351 53.3660013 14.4719164 34.0580007 0.443832769 20.3839987 19.8301675 17.5669993 28.5 0 37.1698325 17.5669993 56.5561672 20.3839987 42.5280836 34.0580007 45.8396649 53.3660013"></polygon>
        </g>
    </svg>`;

    var star = {};
    star.svg = starSVGString;
    star.index = starCount;
    star.id = "#star"+starCount;

    var vine = vineList[vineList.length-1];
    vine.stars.push(star);

    var middlePoints = {x: points[6].x, y: points[6].y};
    console.log(middlePoints);
    // get latest vine and stick the star there
    console.log(vine);
    $(vine.id).append(star.svg);

    //$(star.id).css("background-color", "red");
    $(star.id).css("position", "absolute");

    var width = $(star.id).width();
    var height = $(star.id).height();
    $(star.id).css("left", middlePoints.x + width/2);
    $(star.id).css("top", middlePoints.y - height/2);
    $(star.id).css("opacity", "0.2");

    //$(star.id).attr("viewBox", "0 0 1000 1000"); //ugly fix for the size of the star right now
}

function drawDots() {
    for (var i = 0; i < points.length; i++) {
        drawDotOnPath(points[i].x, points[i].y);
    }
}
// drawDotOnPath(points);

function drawDotOnPath(x, y) {
    var dotSVGString = `
    <?xml version="1.0" encoding="UTF-8"?>
    <svg id="dot`+dotCount+`" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
        <title>Group</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Group" transform="translate(1.000000, 1.000000)">
                <circle id="Oval" stroke="#000000" stroke-width="2" fill="#FF0101" cx="9" cy="9" r="9"></circle>
                <circle id="Oval-2" fill="#000000" cx="9" cy="9" r="2"></circle>
            </g>
        </g>
    </svg>`;

    var dot = {};
    dot.svg = dotSVGString;
    dot.index = dotCount;
    dot.id = "#dot"+dotCount;

    var vine = vineList[vineList.length - 1];
    vine.dots.push(dot);

    $(vine.id).append(dot.svg);

    // console.log(x, y);

    var width = $(dot.id).width();
    var height = $(dot.id).height();
    dot.width = width;
    dot.height = height;
    dot.coord = {};
    


    $(dot.id).css("position", "absolute");
    $(dot.id).css("opacity", "0.5");


    // adjusting for origin being in top left corner
    $(dot.id).css("left", x - width/2);
    $(dot.id).css("top", y - height/2);

    // without adjustment
    // $(dot.id).css("left", x);
    // $(dot.id).css("top", y);



    dot.coord.x = $(dot.id).css("left");
    dot.coord.y = $(dot.id).css("top");

    dotCount++;
}


function extractPoints(pathString) {
    var arrayPath = [];

    var newPath = Snap.path.toCubic(pathString);

    var pathLength = Snap.path.getTotalLength(pathString);
    console.log("Path length:", pathLength);

    var pathLengthSection = pathLength / numOfPoints;
    console.log("Path length section:", pathLengthSection);

    var myPoint = Snap.path.getPointAtLength(pathString, pathLengthSection);
    console.log(myPoint);

    for (var i = 0; i < numOfPoints; i++) {
        var point = {};
        calcPoint = Snap.path.getPointAtLength(pathString, pathLengthSection * i);
        point.x = calcPoint.x;
        point.y = calcPoint.y;
        arrayPath.push(point);
    }


    // function setUpPoint(segment) {
    //     for (var i = 0; i < segment.length; i+=2) {
    //         var point = {};
    //         point.x = segment[i];
    //         point.y = segment[i+1];
    //         arrayPath.push(point);
    //     }
    // }

    // for (var i = 0; i < newPath.length; i++) {
    //     var segment = newPath[i], point;
    //     segment.shift();
    //     point = setUpPoint(segment);
    // }

    return arrayPath;
}