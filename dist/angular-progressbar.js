angular.module("ngProgressbar", [])
.directive("progressCircle", function(){
  return {
    restrict: "AE",
    scope: {
      amount: "="
    },
    link: function(scope, element, attrs){
      var circle = new ProgressBar.Circle(element[0], {
        color: attrs.color || '#555',
        strokeWidth: attrs.strokeWidth || 1,
        fill: attrs.fill || '#aaa',
        trailColor: attrs.trailColor || "#f4f4f4",
        trailWidth: attrs.trailWidth || 0.8,
        text: attrs.text || null
      });
      
      circle.animate(attrs.amount/100);
    }
  }
});