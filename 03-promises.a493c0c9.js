function e(e,t){return new Promise(((n,o)=>{const s=Math.random()>.3;setTimeout((()=>{s?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();const n=parseInt(t.target.elements.delay.value),o=parseInt(t.target.elements.step.value),s=parseInt(t.target.elements.amount.value),l=[];for(let t=1;t<=s;t++){const s=e(t,n+(t-1)*o).then((e=>{console.log(`✅ Fulfilled promise ${e.position} in ${e.delay}ms`)})).catch((e=>{console.log(`❌ Rejected promise ${e.position} in ${e.delay}ms`)}));l.push(s)}}));
//# sourceMappingURL=03-promises.a493c0c9.js.map