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
})
.directive("progressHexagon", function(){
  return {
    restrict: "AE",
    scope: {
      amount: "@",
      bgStrokeWidth: "=",
      bgStrokeColor: "=",
      strokeWidth: "=",
      strokeColor: "="
    },
    link: function(scope, element, attrs){
      console.log(attrs.amount);
      var path = new ProgressBar.Path($(element).find(".hexagon-path")[0], {
        
      });
      path.animate(attrs.amount/100);
    },
    template: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 173.20508075688772 200"><path fill-opacity="0" stroke-width="{{ bgStrokeWidth || 0.3 }}" stroke="#{{ bgStrokeColor || \'949494\' }}"  d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path><path class="hexagon-path" fill-opacity="0" stroke-width="{{ strokeWidth || 0.3 }}" stroke="#{{ strokeColor || \'949494\' }}"  d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path></svg>'
  }
});