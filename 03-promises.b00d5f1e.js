!function(){var e=document.querySelector(".form"),n={delayInput:e.querySelector('[name="delay"]'),stepInput:e.querySelector('[name="step"]'),amountInput:e.querySelector('[name="amount"]')};function t(e,n){return new Promise((function(t,o){var a=Math.random()>.3;setTimeout((function(){a?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var o=parseInt(n.delayInput.value),a=parseInt(n.stepInput.value),u=parseInt(n.amountInput.value),c=[],r=1;r<=u;r++){var i=t(r,o+(r-1)*a).then((function(e){console.log("✅ Fulfilled promise ".concat(e.position," in ").concat(e.delay,"ms"))})).catch((function(e){console.log("❌ Rejected promise ".concat(e.position," in ").concat(e.delay,"ms"))}));c.push(i)}}))}();
//# sourceMappingURL=03-promises.b00d5f1e.js.map